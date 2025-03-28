import { useState } from "react";
import { Form, Input, Button, Checkbox, Row } from "antd";

const PersonalDetailsForm = ({ onSubmit, formData }) => {
  const [firstName, setFirstName] = useState(formData.firstName);
  const [lastName, setLastName] = useState(formData.lastName);
  const [phone, setPhone] = useState(formData.phone);
  const [email, setEmail] = useState(formData.email);
  const [terms, setTerms] = useState(formData.terms);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const handleCheckboxChange = (e) => {
    setTerms(e.target.checked);
  };

  const handleSubmit = () => {
    if (terms) {
      onSubmit({
        ...formData,
        firstName,
        lastName,
        phone,
        email,
        terms,
      });
    } else {
      alert("You must agree to the terms and conditions.");
    }
  };

  console.log(44, formData);

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
            initialValue={formData.firstName}
            rules={[
              { required: true, message: "Please enter your first name!" },
            ]}
          >
            <Input
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            name="lastName"
            initialValue={formData.lastName}
            rules={[
              { required: true, message: "Please enter your last name!" },
            ]}
          >
            <Input
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            name="email"
            initialValue={formData.email}
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            name="phone"
            initialValue={formData.phone}
            rules={[
              { required: true, message: "Please enter your phone number!" },
            ]}
          >
            <Input
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            name="terms"
            valuePropName="checked"
            initialValue={formData.terms}
            rules={[
              { required: true, message: "You must agree to the terms!" },
            ]}
          >
            <Checkbox checked={formData.terms} onChange={handleCheckboxChange}>
              I agree to the terms and conditions
            </Checkbox>
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
