import { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import departmentsData from "../data/departments.json";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(null);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    setDepartments(departmentsData); // ✅ Load departments from JSON
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(formData);
    setFormData({ name: "", email: "", department: "", message: "" });
  };

  return (
    <>
      <h1>Contact Us</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Department</Form.Label>
          <Form.Select
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            {departments.map((d) => (
              <option key={d.id} value={d.name}>
                {d.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>

      {submitted && (
        <Card className="mt-4 p-3">
          <h5>Submitted Data:</h5>
          <p><strong>Name:</strong> {submitted.name}</p>
          <p><strong>Email:</strong> {submitted.email}</p>
          <p><strong>Department:</strong> {submitted.department}</p>
          <p><strong>Message:</strong> {submitted.message}</p>
        </Card>
      )}
    </>
  );
};

export default Contact;
