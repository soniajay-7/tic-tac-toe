import React, { useState } from "react";
import Icon from "./Icon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody, Container, Col, Row, Button } from "reactstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./style.css";

const Iteams = new Array(9).fill("empty");
const App1 = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setwinMessage] = useState("");

  const reload = () => {
    setIsCross(false);
    setwinMessage("");
    Iteams.fill("empty", 0, 9);
  };

  const checkWinner = () => {
    if (
      Iteams[0] === Iteams[1] &&
      Iteams[0] === Iteams[2] &&
      Iteams[0] !== "empty"
    ) {
      setwinMessage(`${Iteams[0]} wins`);
    } else if (
      Iteams[3] === Iteams[4] &&
      Iteams[3] === Iteams[5] &&
      Iteams[3] !== "empty"
    ) {
      setwinMessage(`${Iteams[3]} wins`);
    } else if (
      Iteams[6] === Iteams[7] &&
      Iteams[6] === Iteams[8] &&
      Iteams[6] !== "empty"
    ) {
      setwinMessage(`${Iteams[6]} wins`);
    } else if (
      Iteams[0] === Iteams[3] &&
      Iteams[0] === Iteams[6] &&
      Iteams[0] !== "empty"
    ) {
      setwinMessage(`${Iteams[0]} wins`);
    } else if (
      Iteams[1] === Iteams[4] &&
      Iteams[1] === Iteams[7] &&
      Iteams[1] !== "empty"
    ) {
      setwinMessage(`${Iteams[1]} wins`);
    } else if (
      Iteams[2] === Iteams[5] &&
      Iteams[2] === Iteams[8] &&
      Iteams[2] !== "empty"
    ) {
      setwinMessage(`${Iteams[2]} wins`);
    } else if (
      Iteams[0] === Iteams[4] &&
      Iteams[0] === Iteams[8] &&
      Iteams[0] !== "empty"
    ) {
      setwinMessage(`${Iteams[0]} wins`);
    } else if (
      Iteams[2] === Iteams[4] &&
      Iteams[2] === Iteams[6] &&
      Iteams[2] !== "empty"
    ) {
      setwinMessage(`${Iteams[2]} wins`);
    }
  };
  const changeItem = (ItemNumber) => {
    if (winMessage) {
      return toast(winMessage, {
        type: "success",
      });
    }
    if (Iteams[ItemNumber] === "empty") {
      Iteams[ItemNumber] = isCross ? "Cross" : "Circle";
      setIsCross(!isCross);
    } else {
      return toast("Already Filled", {
        type: "error",
      });
    }

    checkWinner();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-primary text-uppercase text-center">
                {winMessage}
              </h1>
            </div>
          ) : (
            <h1 className="text-center text-warning">
              {isCross ? "Cross" : "Circle"}
              &nbsp; turns
            </h1>
          )}
          <div className="grid">
            {Iteams.map((Item, index) => (
              <Card className="raise" onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icon name={Item} />
                </CardBody>
              </Card>
            ))}
          </div>
          <Button className="setbtn" color="primary" block onClick={reload}>
            Reload Game
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default App1;
