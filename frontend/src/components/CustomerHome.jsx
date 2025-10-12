import { useState } from 'react'
import { Dropdown } from 'react-bootstrap'

function CustomerHome() {
    const [selectedService, setSelectedService] = useState(null);

    const mockServices = [
        { id: "S1", name: "Service 1" },
        { id: "S2", name: "Service 2" },
        { id: "S3", name: "Service 3" },
        { id: null, name: "None" }
    ];
    
    const handleSelect = (eventKey) => {
        setSelectedService(eventKey);
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
        </>
    )
}

export default CustomerHome;