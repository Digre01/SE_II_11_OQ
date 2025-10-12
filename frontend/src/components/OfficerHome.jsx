import { useState } from 'react'
import { Dropdown, Button } from 'react-bootstrap'
import { generateTicket } from '../utils';


function OfficerHome() {
  
  const [selectedService, setSelectedService] = useState(null);
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
  const handleSelectService = (eventKey) => setSelectedService(eventKey);
  const handleCall = () => {
    //Should be printed in a Totem
    console.log('Call', {selectedDesk, selectedService });
    
    //how should be
    // setCallMessage(`Called ticket ${ generateTicket()} on Desk ${selectedDesk}`);
    
    setCallMessage(`Called ticket ${selectedService} on Desk ${selectedDesk}`);

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

        <Dropdown onSelect={handleSelectService}>
          <Dropdown.Toggle variant="success" id="dropdown-service">
            {selectedService
              ? (mockServices.find(s => s.id === selectedService)?.name ?? "Select a service")
              : "Select a service"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {mockServices.map(s => (
              <Dropdown.Item key={s.id ?? 'none'} eventKey={s.id}>
                {s.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Button
          variant="primary"
          onClick={handleCall}
          disabled={!selectedDesk || !selectedService}
        >
          Call
        </Button>
      </div>


      {callMessage && <h4>{callMessage}</h4>}


    </>
  )
}

export default OfficerHome
