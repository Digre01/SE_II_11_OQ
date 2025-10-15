import { useState, useEffect } from 'react'
import { Dropdown, Button, Form, Alert, Spinner } from 'react-bootstrap'
import API from '../API/API.mjs';


function OfficerHome() {
  

  const [selectedService, setSelectedService] = useState([]);
  const [selectedDesk, setSelectedDesk] = useState(null);
  const [callMessage, setCallMessage] = useState('');
  const [services, setServices] = useState([]);
  const [servicesLoading, setServicesLoading] = useState(true);
  const [servicesError, setServicesError] = useState(null);
  const [callLoading, setCallLoading] = useState(false);
  const [callError, setCallError] = useState(null);

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

  const mockDesk = [
          {id: "D1", name: "Desk 1" },
          {id: "D2", name: "Desk 2" },
          {id: "D3", name: "Desk 3" },
          {id: null, name: "None" },

  ];

  const handleSelectDesk = (eventKey) => setSelectedDesk(eventKey);

  // toggle a service id in the selectedService array

  const handleToggleService = (serviceId) => {
    setSelectedService(prev => {
      if (serviceId === null) {
        // 'None' selected -> clear all services
        return [];
      }
      if (prev.includes(serviceId)) return prev.filter(s => s !== serviceId);
      return [...prev, serviceId];
    });
  };

  const handleCall = async () => {
    setCallLoading(true);
    setCallError(null);
    setCallMessage('');
    try {
      // Chiama l'API per il prossimo ticket
      const ticket = await API.callNextTicket(selectedService.map(Number));
      if (ticket) {
        setCallMessage(`Called ticket ${ticket.ticket} on Desk ${selectedDesk}`);
      } else {
        setCallMessage('No customers in queue for the selected services.');
      }
    } catch (err) {
      setCallError("Failed to call next customer: " + err);
    } finally {
      setCallLoading(false);
    }
  };

  
  return (
    <>
      <h2>Officer Dashboard</h2>

       <div className="d-flex gap-3 my-3 justify-content-center">
        <Dropdown onSelect={handleSelectDesk}>
          <Dropdown.Toggle variant="primary" id="dropdown-desk">
            {selectedDesk
              ? (mockDesk.find(d => d.id === selectedDesk)?.name ?? "Select a desk")
              : "Select a desk"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {mockDesk.map(d => (
              <Dropdown.Item key={d.id ?? 'none'} eventKey={d.id}>
                {d.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <div className="d-flex flex-column align-items-start p-2">
          <div className="mb-1">Select services:</div>
          {servicesLoading && <div>Loading services...</div>}
          {servicesError && <div className="text-danger">{servicesError}</div>}
          {!servicesLoading && !servicesError && services.map(s => (
            <Form.Check
              key={s.serviceId}
              type="checkbox"
              id={`service-${s.serviceId}`}
              label={s.name}
              checked={selectedService.includes(s.serviceId)}
              onChange={() => handleToggleService(s.serviceId)}
            />
          ))}
        </div>

        
      </div>

      <div>
        <Button
          variant="primary"
          onClick={handleCall}
          disabled={!selectedDesk || selectedService.length === 0 || callLoading}
        >
          {callLoading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : "Call"}
        </Button>
      </div>

  {callMessage && <Alert variant="success" className="mt-3">{callMessage}</Alert>}
  {callError && <Alert variant="danger" className="mt-3">{callError}</Alert>}

    </>
  )
}

export default OfficerHome
