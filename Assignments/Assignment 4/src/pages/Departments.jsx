import { useEffect, useState } from "react";
import DepartmentCard from "../components/DepartmentCard";
import departmentsData from "../data/departments.json";

const Departments = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    setDepartments(departmentsData); 
  }, []);

  return (
    <div className="container my-4" style={{ minHeight: "72vh" }}> 
      {/* minHeight ensures footer appears after content */}
      <h1>Departments</h1>
      <div className="row">
        {departments.map((dep) => (
          <div key={dep.id} className="col-md-4">
            <DepartmentCard department={dep} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
