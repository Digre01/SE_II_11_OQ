import { Outlet } from "react-router";
import NavHeader from "./NavHeader";
import { Col, Container, Row } from "react-bootstrap";

function DefaultLayout() {
    return(
        <>
        <NavHeader/>
        <Container fluid className="mt-4">
            <Row className="d-flex align-items-center text-center">
                <Col><Outlet/></Col>
            </Row>
        </Container>
        </>
    )
}

export default DefaultLayout