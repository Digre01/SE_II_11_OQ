import { useState } from 'react'
import { Dropdown, Button, Form } from 'react-bootstrap'
import { generateTicket } from '../utils';


function OfficerHome() {
  
  const [selectedService, setSelectedService] = useState([]);
  const [selectedDesk, setSelectedDesk] = useState(null);
  const [callMessage, setCallMessage] = useState('');
  
  const mockServices = [
          { id: "S1", name: "Service 1" },
          { id: "S2", name: "Service 2" },
          { id: "S3", name: "Service 3" },
          { id: null, name: "None" }
  ];

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
  const handleCall = () => {
    //Should be printed in a Totem
    console.log('Call', {selectedDesk, selectedService });

    // For now, if multiple services are selected, join their ids for the message.
    const serviceLabel = selectedService.length > 0
      ? selectedService.join(', ')
      : 'None';

    setCallMessage(`Called ticket ${serviceLabel} on Desk ${selectedDesk}`);

    //endpoint call here

    /**
     * 
     */
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
          {mockServices.map(s => (
            <Form.Check
              key={s.id ?? 'none'}
              type="checkbox"
              id={`service-${s.id ?? 'none'}`}
              label={s.name}
              checked={s.id ? selectedService.includes(s.id) : selectedService.length === 0}
              onChange={() => handleToggleService(s.id)}
            />
          ))}
        </div>

        
      </div>

      <div>
        <Button
          variant="primary"
          onClick={handleCall}
          disabled={!selectedDesk || selectedService.length === 0}
        >
          Call
        </Button>
      </div>


      {callMessage && <h4>{callMessage}</h4>}


    </>
  )
}

export default OfficerHome
