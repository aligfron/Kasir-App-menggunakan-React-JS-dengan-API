import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Hasil, ListCategories, NavbarComponents } from "./components";

function App() {
  return (
    <div className="App">
      <NavbarComponents />
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategories />
            <Col>
              <h4>Daftar Produk</h4>
              <hr />
            </Col>
            <Hasil />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
