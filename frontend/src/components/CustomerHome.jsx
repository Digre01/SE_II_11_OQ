import { useState } from 'react'
import { Dropdown, Button, Spinner, Alert } from 'react-bootstrap'
import API from '../API/API.mjs';

function CustomerHome() {
    const [selectedService, setSelectedService] = useState(null);
    const [loading, setLoading] = useState(false);
    const [ticket, setTicket] = useState(null);
    const [error, setError] = useState(null);

    const mockServices = [
        { id: "S1", name: "Service 1" },
        { id: "S2", name: "Service 2" },
        { id: "S3", name: "Service 3" },
        { id: null, name: "None" }
    ];

    const handleSelect = (eventKey) => {
        setSelectedService(eventKey);
    }

    const handleGetTicket = async () => {
        setLoading(true);
        setError(null);
        setTicket(null);
        try {
            const t = await API.newTicket(selectedService);
            setTicket(t);
        } catch (err) {
            setError("Failed to get ticket: " + err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
        <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant='success' id="dropdown-basic">
                {selectedService 
                    ? mockServices.find(s => s.id === selectedService).name
                    : "Select a service"
                }
            </Dropdown.Toggle>

            <Dropdown.Menu>     {/**il valore deve essere preso dal backend e messo come value */}
                {mockServices.map(s => (
                    <Dropdown.Item key={s.id} eventKey={s.id}>{s.name}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>

        <div className="mt-3">
            <Button 
                variant="primary" 
                onClick={handleGetTicket} 
                disabled={loading || !selectedService || selectedService === 'null'}
            >
                {loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : "Get Ticket"}
            </Button>
        </div>

        {ticket && (
            <Alert variant="success" className="mt-3">
                List Code: {ticket.listCode}
            </Alert>
        )}
        {error && (
            <Alert variant="danger" className="mt-3">{error}</Alert>
        )}
        </>
    )
}

export default CustomerHome;