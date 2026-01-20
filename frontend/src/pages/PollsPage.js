import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function PollsPage() {
    const [polls, setPolls] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        fetchPolls()
    }, [])

    async function fetchPolls() {
        try {
            const access_token = localStorage.getItem("access_token")
            if (!access_token) {
                alert("Morate biti ulogovani")
                navigate("/login")
                return
            }

            const res = await fetch('http://localhost:5000/api/polls', {
                headers: {
                    "Authorization": `Bearer ${access_token}`
                }
            })

            if (res.ok) {
                const data = await res.json()
                setPolls(data.polls || [])
            } else {
                const error = await res.json()
                alert(error.error || "Greška pri učitavanju anketa")
            }
        } catch (e) {
            console.log(e)
            alert("Greška pri učitavanju anketa")
        } finally {
            setLoading(false)
        }
    }

    async function deletePoll(pollId) {
        if (!confirm("Da li ste sigurni da želite da obrišete ovu anketu?")) {
            return
        }

        try {
            const access_token = localStorage.getItem("access_token")
            const res = await fetch(`http://localhost:5000/api/polls/${pollId}/delete`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${access_token}`
                }
            })

            if (res.ok) {
                alert("Anketa je uspešno obrisana")
                fetchPolls() // Osveži listu
            } else {
                const error = await res.json()
                alert(error.error || "Greška pri brisanju ankete")
            }
        } catch (e) {
            console.log(e)
            alert("Greška pri brisanju ankete")
        }
    }

    async function finishPoll(pollId) {
        if (!confirm("Da li ste sigurni da želite da završite ovu anketu?")) {
            return
        }

        try {
            const access_token = localStorage.getItem("access_token")
            const res = await fetch(`http://localhost:5000/api/polls/${pollId}/finish`, {
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${access_token}`
                }
            })

            if (res.ok) {
                alert("Anketa je uspešno završena")
                fetchPolls() // Osveži listu
            } else {
                const error = await res.json()
                alert(error.error || "Greška pri završavanju ankete")
            }
        } catch (e) {
            console.log(e)
            alert("Greška pri završavanju ankete")
        }
    }

    async function searchPolls() {
        if (!searchTerm.trim()) {
            fetchPolls()
            return
        }

        try {
            const access_token = localStorage.getItem("access_token")
            const res = await fetch(`http://localhost:5000/api/polls/search?q=${encodeURIComponent(searchTerm)}`, {
                headers: {
                    "Authorization": `Bearer ${access_token}`
                }
            })

            if (res.ok) {
                const data = await res.json()
                setPolls(data.polls || [])
            } else {
                const error = await res.json()
                alert(error.error || "Greška pri pretraživanju")
            }
        } catch (e) {
            console.log(e)
            alert("Greška pri pretraživanju")
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

    function getStatusText(poll) {
        if (poll.is_finished) {
            return "Završena"
        }
        
        if (!poll.end_date) {
            return "Nepoznato"
        }
        
        try {
            const endDate = new Date(poll.end_date);
            if (isNaN(endDate.getTime())) {
                return "Nevažeći datum"
            }
            
            const now = new Date()
            if (endDate < now) {
                return "Istekla"
            }
            return "Aktivna"
        } catch (error) {
            console.error("Error checking poll status:", error);
            return "Greška"
        }
    }

    function getStatusColor(poll) {
        if (poll.is_finished) {
            return "red"
        }
        
        if (!poll.end_date) {
            return "gray"
        }
        
        try {
            const endDate = new Date(poll.end_date);
            if (isNaN(endDate.getTime())) {
                return "gray"
            }
            
            const now = new Date()
            if (endDate < now) {
                return "orange"
            }
            return "green"
        } catch (error) {
            console.error("Error checking poll status:", error);
            return "gray"
        }
    }

    if (loading) {
        return <div className="container mt-4"><p>Učitavanje...</p></div>
    }

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Moje ankete</h1>
                <button 
                    className="btn btn-primary"
                    onClick={() => navigate("/polls/new")}
                >
                    Kreiraj novu anketu
                </button>
            </div>

            {/* Search */}
            <div className="row mb-4">
                <div className="col-md-6">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Pretraži ankete..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && searchPolls()}
                        />
                        <button 
                            className="btn btn-outline-secondary"
                            onClick={searchPolls}
                        >
                            Pretraži
                        </button>
                    </div>
                </div>
            </div>

            {/* Polls List */}
            {polls.length > 0 ? (
                <div className="row">
                    {polls.map(poll => (
                        <div key={poll._id} className="col-md-6 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start">
                                        <h5 className="card-title">{poll.name}</h5>
                                        <span 
                                            className={`badge bg-${getStatusColor(poll)}`}
                                            style={{color: 'white'}}
                                        >
                                            {getStatusText(poll)}
                                        </span>
                                    </div>
                                    <p className="card-text">{poll.question}</p>
                                    <div className="row text-muted small">
                                        <div className="col">
                                            <strong>Kraj:</strong> {formatDate(poll.end_date)}
                                        </div>
                                        <div className="col">
                                            <strong>Email-ova:</strong> {poll.emails.length}
                                        </div>
                                        <div className="col">
                                            <strong>Glasova:</strong> {Object.values(poll.results).reduce((a, b) => a + b, 0)}
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <button 
                                            className="btn btn-sm btn-info me-2"
                                            onClick={() => navigate(`/polls/${poll._id}`)}
                                        >
                                            Pregledaj
                                        </button>
                                        {!poll.is_finished && (
                                            <button 
                                                className="btn btn-sm btn-warning me-2"
                                                onClick={() => finishPoll(poll._id)}
                                            >
                                                Završi
                                            </button>
                                        )}
                                        <button 
                                            className="btn btn-sm btn-danger"
                                            onClick={() => deletePoll(poll._id)}
                                        >
                                            Obriši
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center">
                    <p>Nemate kreiranih anketa.</p>
                    <button 
                        className="btn btn-primary"
                        onClick={() => navigate("/new-poll")}
                    >
                        Kreiraj svoju prvu anketu
                    </button>
                </div>
            )}
        </div>
    )
}
