import { useState } from "react";
import { Form, Input, Button, Checkbox, Row } from "antd";

const PersonalDetailsForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      terms: e.target.checked,
    }));
  };

  const handleSubmit = () => {
    if (formData.terms) {
      onSubmit(formData);
    } else {
      alert("You must agree to the terms and conditions.");
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
          marginTop: "40px",
          marginBottom: "40px",
        }}
      >
        <h2> Add Your Personal Details</h2>
        <Form onFinish={handleSubmit}>
          <Form.Item
            name="firstName"
            rules={[
              { required: true, message: "Please enter your first name!" },
            ]}
            value={formData.firstName}
            onChange={handleChange}
          >
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item
            name="lastName"
            rules={[
              { required: true, message: "Please enter your last name!" },
            ]}
            value={formData.lastName}
            onChange={handleChange}
          >
            <Input placeholder="Last Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
            value={formData.email}
            onChange={handleChange}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[
              { required: true, message: "Please enter your phone number!" },
            ]}
            value={formData.phone}
            onChange={handleChange}
          >
            <Input placeholder="Phone Number" />
          </Form.Item>
          <Form.Item
            name="agree"
            valuePropName="checked"
            rules={[
              { required: true, message: "You must agree to the terms!" },
            ]}
            checked={formData.terms}
            onChange={handleCheckboxChange}
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
