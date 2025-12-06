import { Link } from "react-router-dom";
import DepartmentCard from "../components/DepartmentCard";
import Hero from "../components/Hero";
import { useEffect, useState } from "react";
import departmentsData from "../data/departments.json"; // ✅ Direct import

const Home = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    setDepartments(departmentsData); // ✅ Set from imported JSON
  }, []);

  return (
    <>
      <Hero />

      <h2 className="mt-5">Top Departments</h2>
      <div className="row">
        {departments.slice(0, 3).map((dep) => (
          <div key={dep.id} className="col-md-4">
            <DepartmentCard department={dep} />
          </div>
        ))}
      </div>

      <div className="mt-5 text-center">
        <Link to="/about" className="btn btn-outline-primary mx-2">
          About Us
        </Link>
        <Link to="/contact" className="btn btn-outline-secondary mx-2">
          Contact
        </Link>
      </div>
    </>
  );
};

export default Home;
