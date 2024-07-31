//종합
import ComponentList from "./ComponentList";
import ComponentUpdate from "./BExe02_ComponentUpdate";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container, Card } from "react-bootstrap";

export default function Customer() {
  let [id, setID] = useState();

  return (
    <Container>
      <Row>
        <Col>
          <ComponentList
            onClick={(_id) => {
              setID(_id);
            }}
          />
        </Col>
        <Col>
          <Card>
            <ComponentUpdate id={id} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
