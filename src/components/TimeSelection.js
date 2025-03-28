import { useState } from "react";
import { Select, Button, Row, Col, Form } from "antd";

const TimeSelection = ({ onContinue }) => {
  const [selectedTime, setSelectedTime] = useState("");

  const times = [
    "8 AM CST",
    "9 AM CST",
    "10 AM CST",
    "11 AM CST",
    "12 PM CST",
    "1 PM CST",
    "2 PM CST",
    "3 PM CST",
    "4 PM CST",
    "5 PM CST",
  ];

  const handleTimeChange = (value) => {
    setSelectedTime(value);
  };

  const handleContinue = () => {
    if (selectedTime) {
      onContinue({ time: selectedTime });
    }
  };

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
            <Form >
              <Form.Item
                name="time"
                rules={[{ required: true, message: "Please choose a time!" }]}
              >
                <Select
                  placeholder="Choose your time"
                  onChange={handleTimeChange}
                  value={selectedTime}
                >
                  {times.map((time, index) => (
                    <Select.Option key={index} value={time}>
                      {time}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Form>
          </Row>
          <Row>
            <Button
              type="primary"
              style={{ width: "100%" }}
              onClick={handleContinue}
              disabled={!selectedTime}
            >
              Continue
            </Button>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default TimeSelection;
