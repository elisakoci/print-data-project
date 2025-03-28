import { Row, Col, Typography } from "antd";

const { Title, Paragraph } = Typography;

const ShowData = ({ formData }) => {
  console.log(222, formData);
  return (
    <div style={{ textAlign: "center" }}>
      <Row justify="center">
        <Col span={24} xs={22} sm={18} md={12} lg={8}>
          <Title level={3}>Your Information</Title>
          <Paragraph>
            <strong>Preferred Contact Time:</strong> {formData.time}
          </Paragraph>
          <Paragraph>
            <strong>First Name:</strong> {formData.firstName}
          </Paragraph>
          <Paragraph>
            <strong>Last Name:</strong> {formData.lastName}
          </Paragraph>
          <Paragraph>
            <strong>Phone Number:</strong> {formData.phone}
          </Paragraph>
          <Paragraph>
            <strong>Email:</strong> {formData.email}
          </Paragraph>
          <Paragraph>
            <strong>Terms and Conditions:</strong>{" "}
            {formData.terms ? "Agreed" : "Not agreed"}
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default ShowData;
