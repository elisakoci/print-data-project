import { Select, Button, Row, Col } from "antd";

const TimeSelection = () => {
  return (
    <>
      <Row
        justify="center"
        align="middle"
        style={{
          textAlign: "center",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Col
          xs={24}
          sm={20}
          md={16}
          lg={10}
          xl={15}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Row justify="center">
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              What is the best time to reach you?
            </h2>
          </Row>

          <Row>
            <Select placeholder="Select a time">time</Select>
          </Row>
          <Row>
            <Button type="primary" style={{ width: "100%" }}>
              Continue
            </Button>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default TimeSelection;
