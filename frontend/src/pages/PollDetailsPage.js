import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function PollDetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [poll, setPoll] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedResponse, setSelectedResponse] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        fetchPollById();
    }, [id]);

    async function fetchPollById() {
        try {
            setLoading(true);
            const res = await fetch(`http://localhost:5000/api/polls/${id}`);
            
            if (res.ok) {
                const data = await res.json();
                setPoll(data.poll);
            } else {
                const error = await res.json();
                alert(error.error || "Greška pri učitavanju ankete");
                navigate("/polls");
            }
        } catch (e) {
            console.log(e);
            alert("Greška pri učitavanju ankete");
            navigate("/polls");
        } finally {
            setLoading(false);
        }
    }

    async function submitResponse() {
        if (!selectedResponse) {
            alert("Odaberite odgovor");
            return;
        }

        if (!poll.is_anonymous && !userEmail.trim()) {
            alert("Unesite vašu email adresu");
            return;
        }

        setSubmitting(true);

        try {
            const responseData = {
                poll_id: id,
                response: selectedResponse,
                email: userEmail.trim() || null
            };

            const res = await fetch(`http://localhost:5000/api/polls/${id}/respond`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(responseData)
            });

            const data = await res.json();

            if (res.ok) {
                alert("Vaš odgovor je uspešno podnet!");
                fetchPollById(); // Osveži podatke
                setSelectedResponse("");
                setUserEmail("");
            } else {
                alert(data.error || "Greška pri podnošenju odgovora");
            }
        } catch (e) {
            console.log(e);
            alert("Greška pri podnošenju odgovora");
        } finally {
            setSubmitting(false);
        }
    }

    function formatDate(dateString) {
        if (!dateString) return "Nije postavljen";
        
        try {
            const date = new Date(dateString);
            if (isNaN(date.getTime())) {
                return "Nevažeći datum";
            }
            
            return date.toLocaleDateString('sr-RS', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch (error) {
            console.error("Error formatting date:", error);
            return "Greška pri formatiranju datuma";
        }
    }

    function getStatusText() {
        if (poll.is_finished) {
            return "Završena";
        }
        
        if (!poll.end_date) {
            return "Nepoznato";
        }
        
        try {
            const endDate = new Date(poll.end_date);
            if (isNaN(endDate.getTime())) {
                return "Nevažeći datum";
            }
            
            const now = new Date();
            if (endDate < now) {
                return "Istekla";
            }
            return "Aktivna";
        } catch (error) {
            console.error("Error checking poll status:", error);
            return "Greška";
        }
    }

    function getStatusColor() {
        if (poll.is_finished) {
            return "danger";
        }
        
        if (!poll.end_date) {
            return "secondary";
        }
        
        try {
            const endDate = new Date(poll.end_date);
            if (isNaN(endDate.getTime())) {
                return "secondary";
            }
            
            const now = new Date();
            if (endDate < now) {
                return "warning";
            }
            return "success";
        } catch (error) {
            console.error("Error checking poll status:", error);
            return "secondary";
        }
    }

    function calculatePercentage(value, total) {
        if (total === 0) return 0;
        return Math.round((value / total) * 100);
    }

    const totalVotes = Object.values(poll?.results || {}).reduce((a, b) => a + b, 0);

    if (loading) {
        return <div className="container mt-4"><p>Učitavanje...</p></div>;
    }

    if (!poll) {
        return <div className="container mt-4"><p>Anketa nije pronađena</p></div>;
    }

    return (
        <div className="container mt-4">
            <div className="row mb-3">
                <div className="col-12">
                    <button className="btn btn-outline-secondary" onClick={() => navigate('/polls')}>
                        Nazad na ankete
                    </button>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2>{poll.name}</h2>
                                <span className={`badge bg-${getStatusColor()}`}>
                                    {getStatusText()}
                                </span>
                            </div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{poll.question}</h5>
                            <p className="text-muted">
                                <strong>Datum završetka:</strong> {formatDate(poll.end_date)}
                            </p>
                            <p className="text-muted">
                                <strong>Ukupno glasova:</strong> {totalVotes}
                            </p>

                            {/* Rezultati */}
                            {totalVotes > 0 && (
                                <div className="mb-4">
                                    <h6>Rezultati:</h6>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="text-center">
                                                <h4 className="text-success">{poll.results.da || 0}</h4>
                                                <p>Da ({calculatePercentage(poll.results.da || 0, totalVotes)}%)</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="text-center">
                                                <h4 className="text-danger">{poll.results.ne || 0}</h4>
                                                <p>Ne ({calculatePercentage(poll.results.ne || 0, totalVotes)}%)</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="text-center">
                                                <h4 className="text-warning">{poll.results.ne_mogu_da_odgovorim || 0}</h4>
                                                <p>Ne mogu da odgovorim ({calculatePercentage(poll.results.ne_mogu_da_odgovorim || 0, totalVotes)}%)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Grafik */}
                            {totalVotes > 0 && (
                                <div className="mb-4">
                                    <h6>Grafik rezultata:</h6>
                                    <div className="progress mb-2">
                                        <div 
                                            className="progress-bar bg-success" 
                                            style={{width: `${calculatePercentage(poll.results.da || 0, totalVotes)}%`}}
                                        >
                                            Da
                                        </div>
                                    </div>
                                    <div className="progress mb-2">
                                        <div 
                                            className="progress-bar bg-danger" 
                                            style={{width: `${calculatePercentage(poll.results.ne || 0, totalVotes)}%`}}
                                        >
                                            Ne
                                        </div>
                                    </div>
                                    <div className="progress mb-2">
                                        <div 
                                            className="progress-bar bg-warning" 
                                            style={{width: `${calculatePercentage(poll.results.ne_mogu_da_odgovorim || 0, totalVotes)}%`}}
                                        >
                                            Ne mogu da odgovorim
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Odgovori (ako nije anonimna) */}
                            {!poll.is_anonymous && poll.responses && poll.responses.length > 0 && (
                                <div className="mb-4">
                                    <h6>Pojedinačni odgovori:</h6>
                                    <div className="table-responsive">
                                        <table className="table table-sm">
                                            <thead>
                                                <tr>
                                                    <th>Email</th>
                                                    <th>Odgovor</th>
                                                    <th>Datum</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {poll.responses.map((response, index) => (
                                                    <tr key={index}>
                                                        <td>{response.email}</td>
                                                        <td>
                                                            <span className={`badge bg-${
                                                                response.response === 'da' ? 'success' : 
                                                                response.response === 'ne' ? 'danger' : 'warning'
                                                            }`}>
                                                                {response.response === 'da' ? 'Da' : 
                                                                 response.response === 'ne' ? 'Ne' : 'Ne mogu da odgovorim'}
                                                            </span>
                                                        </td>
                                                        <td>{formatDate(response.timestamp)}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {/* Forma za glasanje (ako anketa nije završena) */}
                            {!poll.is_finished && (
                                <div className="border-top pt-3">
                                    <h6>Glasajte:</h6>
                                    <div className="mb-3">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="response"
                                                id="responseDa"
                                                value="da"
                                                checked={selectedResponse === "da"}
                                                onChange={(e) => setSelectedResponse(e.target.value)}
                                            />
                                            <label className="form-check-label" htmlFor="responseDa">
                                                Da
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="response"
                                                id="responseNe"
                                                value="ne"
                                                checked={selectedResponse === "ne"}
                                                onChange={(e) => setSelectedResponse(e.target.value)}
                                            />
                                            <label className="form-check-label" htmlFor="responseNe">
                                                Ne
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="response"
                                                id="responseNeMogu"
                                                value="ne_mogu_da_odgovorim"
                                                checked={selectedResponse === "ne_mogu_da_odgovorim"}
                                                onChange={(e) => setSelectedResponse(e.target.value)}
                                            />
                                            <label className="form-check-label" htmlFor="responseNeMogu">
                                                Ne mogu da odgovorim
                                            </label>
                                        </div>
                                    </div>

                                    {!poll.is_anonymous && (
                                        <div className="mb-3">
                                            <label className="form-label">Vaša email adresa:</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Unesite vašu email adresu"
                                                value={userEmail}
                                                onChange={(e) => setUserEmail(e.target.value)}
                                            />
                                        </div>
                                    )}

                                    <button
                                        className="btn btn-primary"
                                        onClick={submitResponse}
                                        disabled={submitting || !selectedResponse}
                                    >
                                        {submitting ? "Slanje..." : "Pošaljite odgovor"}
                                    </button>
                                </div>
                            )}

                            <div className="mt-3">
                                <button 
                                    className="btn btn-secondary"
                                    onClick={() => navigate("/polls")}
                                >
                                    Nazad na ankete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
