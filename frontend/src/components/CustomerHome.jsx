import { Dropdown } from 'react-bootstrap'

function CustomerHome() {
    return (
        <>
        <Dropdown>
            <Dropdown.Toggle variant='dark' id="dropdown-basic">
                Select a service
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item>Service 1</Dropdown.Item>
                <Dropdown.Item>Service 2</Dropdown.Item>
                <Dropdown.Item>Service 3</Dropdown.Item>
                <Dropdown.Item>None</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </>
    )
}

export default CustomerHome;