import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const DepartmentCard = ({ department }) => (
  <Card className="mb-3">
    <Card.Body>
      <Card.Title>{department.name}</Card.Title>
      <Card.Text>{department.description}</Card.Text>
      <Link to={`/departments/${department.id}`}>
        <Button variant="primary">View More</Button>
      </Link>
    </Card.Body>
  </Card>
);

export default DepartmentCard;
