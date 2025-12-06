import { Card } from "react-bootstrap";

const achievements = [
  { year: "1990", title: "College Founded" },
  { year: "2000", title: "First Accreditation" },
  { year: "2010", title: "National Awards in Research" },
  { year: "2020", title: "New Campus Inauguration" }
];

const About = () => (
  <div
    className="container d-flex flex-column justify-content-between"
    style={{ minHeight: "72vh" }} 
  >
    <div>
      <h1>About Our College</h1>
      <p>Founded in 1990, our college is committed to academic excellence.</p>

      <h3>Mission & Vision</h3>
      <p>Our mission is to provide quality education and foster innovation.</p>
      <p>Our vision is to create leaders in technology, management, and research.</p>

      <h3>Achievements</h3>
      <div className="row">
        {achievements.map((ach, i) => (
          <div key={i} className="col-md-3">
            <Card className="mb-3 text-center">
              <Card.Body>
                <Card.Title>{ach.year}</Card.Title>
                <Card.Text>{ach.title}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default About;
