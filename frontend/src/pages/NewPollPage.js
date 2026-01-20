import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPollPage() {
    const [pollName, setPollName] = useState('');
    const [pollQuestion, setPollQuestion] = useState('');
    const [pollDatetime, setPollDatetime] = useState('');
    const [pollEmails, setPollEmails] = useState([]);
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [loading, setLoading] = useState(false);

    const emailInputRef = useRef(null);
    const navigate = useNavigate();

    const addEmailToPoll = () => {
        const newEmail = emailInputRef.current.value.trim();
        if (!newEmail || newEmail === "") {
            alert("Unesite email adresu");
            return;
        }
        
        // Validacija email-a
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(newEmail)) {
            alert("Unesite važeću email adresu");
            return;
        }
        
        if (pollEmails.includes(newEmail)) {
            alert("Ovaj email je već dodat");
            return;
        }
        
        if (pollEmails.length >= 50) {
            alert("Maksimalno 50 email adresa je dozvoljeno");
            return;
        }
        
        emailInputRef.current.value = "";
        setPollEmails([...pollEmails, newEmail]);
    }

    const removeEmail = (emailToRemove) => {
        setPollEmails(pollEmails.filter(email => email !== emailToRemove));
    }

    const onPollSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Validacija
        if (!pollName.trim()) {
            alert("Unesite naziv ankete");
            setLoading(false);
            return;
        }
        
        if (!pollQuestion.trim()) {
            alert("Unesite pitanje");
            setLoading(false);
            return;
        }
        
        if (!pollDatetime) {
            alert("Unesite datum završetka ankete");
            setLoading(false);
            return;
        }
        
        if (pollEmails.length === 0) {
            alert("Dodajte bar jednu email adresu");
            setLoading(false);
            return;
        }

        const access_token = localStorage.getItem("access_token");
        if (!access_token) {
            alert("Morate biti ulogovani");
            navigate("/login");
            setLoading(false);
            return;
        }

        const poll_data = {
            name: pollName.trim(),
            question: pollQuestion.trim(),
            end_date: pollDatetime,
            emails: pollEmails,
            is_anonymous: isAnonymous
        }

        try {
            const response = await fetch('http://localhost:5000/api/polls/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${access_token}`
                },
                body: JSON.stringify(poll_data)
            });

            const data = await response.json();
            
            if (response.ok) {
                alert("Anketa je uspešno kreirana!");
                navigate('/polls');
            } else {
                alert(data.error || "Greška pri kreiranju ankete");
            }
        } catch (error) {
            console.log(error);
            alert("Greška pri kreiranju ankete");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h2 className="mb-0">Kreiraj novu anketu</h2>
                            <button className="btn btn-outline-secondary" type="button" onClick={() => navigate('/polls')}>
                                Nazad na ankete
                            </button>
                        </div>
                        <div className="card-body">
                            <form onSubmit={onPollSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Naziv ankete *</label>
                                    <input
                                        className="form-control"
                                        onChange={(e) => setPollName(e.target.value)}
                                        type="text"
                                        placeholder="Unesite naziv ankete"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Pitanje *</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        onChange={(e) => setPollQuestion(e.target.value)}
                                        placeholder="Unesite pitanje (da/ne/ne mogu da odgovorim)"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Datum završetka ankete *</label>
                                    <input
                                        className="form-control"
                                        onChange={(e) => setPollDatetime(e.target.value)}
                                        type="datetime-local"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="anonymousCheck"
                                            checked={isAnonymous}
                                            onChange={(e) => setIsAnonymous(e.target.checked)}
                                        />
                                        <label className="form-check-label" htmlFor="anonymousCheck">
                                            Anonimna anketa
                                        </label>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email adrese *</label>
                                    <div className="input-group">
                                        <input
                                            ref={emailInputRef}
                                            className="form-control"
                                            type="email"
                                            placeholder="Unesite email adresu"
                                            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addEmailToPoll())}
                                        />
                                        <button 
                                            type="button" 
                                            className="btn btn-outline-secondary"
                                            onClick={addEmailToPoll}
                                        >
                                            Dodaj
                                        </button>
                                    </div>
                                    <small className="text-muted">
                                        Maksimalno 50 email adresa
                                    </small>
                                </div>

                                {pollEmails.length > 0 && (
                                    <div className="mb-3">
                                        <label className="form-label">Dodate email adrese ({pollEmails.length}/50):</label>
                                        <div className="border rounded p-2" style={{maxHeight: '200px', overflowY: 'auto'}}>
                                            {pollEmails.map((email, index) => (
                                                <div key={index} className="d-flex justify-content-between align-items-center mb-1">
                                                    <span>{email}</span>
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-outline-danger"
                                                        onClick={() => removeEmail(email)}
                                                    >
                                                        ×
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="d-flex gap-2">
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary"
                                        disabled={loading}
                                    >
                                        {loading ? "Kreiranje..." : "Kreiraj anketu"}
                                    </button>
                                    <button 
                                        type="button" 
                                        className="btn btn-secondary"
                                        onClick={() => navigate('/polls')}
                                    >
                                        Odustani
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
