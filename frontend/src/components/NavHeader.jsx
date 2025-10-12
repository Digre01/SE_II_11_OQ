import { Navbar } from "react-bootstrap";

function NavHeader() {

    return(
        <Navbar expand="lg" bg="info" className="d-flex justify-content-center align-items-center">
            <h1 className="fw-bold display-4 text-center">Office Queue Management System</h1>
        </Navbar>
    )
}

export default NavHeader;