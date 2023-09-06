import { useRouteError } from "react-router-dom";
import { Container } from "react-bootstrap";

const ErrorPage = () => {

    return (
        <section className="bg-cyan-50">
            <Container fluid className={"no-gutters mx-0 px-0 pt-28"}>
                <h1 className="">
                    Error 404
                </h1>
                <p>Sorry, an unexpected error has occurred.</p>
            </Container>
        </section>
    );
}

export default ErrorPage