import { Navbar, Button} from "react-bootstrap";
import { useNavigate } from 'react-router';

function NavHeader() {
    const navigate = useNavigate();

    return(
        <Navbar expand="lg" bg="info" className="d-flex justify-content-center align-items-center">
            
        <Button
            variant="light"
            className="position-absolute end-0 me-3"
            onClick={() => navigate('/')}
            >
            Home
        </Button>
        
        <h1 className="fw-bold display-4 text-center">Office Queue Management System</h1>
    
        
        </Navbar>
        
    )
}

export default NavHeader;