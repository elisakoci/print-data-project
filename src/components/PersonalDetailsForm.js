import { Form, Input, Button, Checkbox, Row } from "antd";

const PersonalDetailsForm = () => {
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
          marginTop: "40px",
          marginBottom: "40px",
        }}
      >
        <h2> Add Your Personal Details</h2>
        <p>Selected Time: </p>
        <Form>
          <Form.Item
            name="firstName"
            rules={[
              { required: true, message: "Please enter your first name!" },
            ]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item
            name="lastName"
            rules={[
              { required: true, message: "Please enter your last name!" },
            ]}
          >
            <Input placeholder="Last Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[
              { required: true, message: "Please enter your phone number!" },
            ]}
          >
            <Input placeholder="Phone Number" />
          </Form.Item>
          <Form.Item
            name="agree"
            valuePropName="checked"
            rules={[
              { required: true, message: "You must agree to the terms!" },
            ]}
          >
            <Checkbox>I agree to the terms and conditions</Checkbox>
          </Form.Item>
          <Button type="primary" htmlType="submit">
            SUBMIT YOUR DETAILS
          </Button>
        </Form>
      </Row>
    </>
  );
};

export default PersonalDetailsForm;
