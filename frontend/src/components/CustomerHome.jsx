import { useState, useEffect } from 'react'
import { Dropdown, Button, Spinner, Alert } from 'react-bootstrap'
import API from '../API/API.mjs';

function CustomerHome() {
    const [selectedService, setSelectedService] = useState(null);
    const [loading, setLoading] = useState(false);
    const [ticket, setTicket] = useState(null);
    const [error, setError] = useState(null);


    const [services, setServices] = useState([]);
    const [servicesLoading, setServicesLoading] = useState(true);
    const [servicesError, setServicesError] = useState(null);

    useEffect(() => {
        setServicesLoading(true);
        API.fetchAllServices()
            .then(data => {
                setServices(data);
                setServicesLoading(false);
            })
            .catch(err => {
                setServicesError("Failed to load services: " + err);
                setServicesLoading(false);
            });
    }, []);


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
                    ? (services.find(s => s.serviceId === Number(selectedService))?.name || "Select a service")
                    : "Select a service"
                }
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {servicesLoading && <Dropdown.Item disabled>Loading...</Dropdown.Item>}
                {servicesError && <Dropdown.Item disabled>{servicesError}</Dropdown.Item>}
                {!servicesLoading && !servicesError && services.map(s => (
                    <Dropdown.Item key={s.serviceId} eventKey={s.serviceId}>{s.name}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>

        <div className="mt-3">
            <Button
                variant="primary"
                onClick={handleGetTicket}
                disabled={loading || !selectedService}
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