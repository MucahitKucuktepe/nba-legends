import { Col, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";
import { useState } from "react";
import FormComponenets from "./FormComponenets";

const CardContainer = () => {
  console.log(data);
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase().trim())
  );
  console.log(filteredData);
  return (
    <>
      {/* <Form.Control
        placeholder="Search a player"
        className="w-50 m-auto"
        onChange={handleChange}
        type="search"
      /> */}
      <FormComponenets handleChange={handleChange} />
      <Container className="rounded-4 my-4 p-3 border border-danger border-2 card-container">
        <Row className="justify-content-center g-3 ">
          {filteredData.map((player, i) => (
            <Col key={i} xl={3} lg={4} md={6}>
              <PlayerCard {...player} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
