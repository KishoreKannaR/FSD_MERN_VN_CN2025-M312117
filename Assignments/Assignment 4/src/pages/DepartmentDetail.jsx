import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import departmentsData from "../data/departments.json";

const DepartmentDetail = () => {
  const { id } = useParams();
  const [department, setDepartment] = useState(null);

  useEffect(() => {
    const dep = departmentsData.find((d) => d.id === id);
    setDepartment(dep);
  }, [id]);

  if (!department) return <p>Loading...</p>;

  return (
    <>
      <h1>{department.name}</h1>
      <p>{department.fullDescription}</p>

      <h4>Courses</h4>
      <ul>
        {department.courses.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>

      <h4>Faculty</h4>
      <ul>
        {department.faculty.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      <h4>Labs / Facilities</h4>
      <ul>
        {department.labs.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
    </>
  );
};

export default DepartmentDetail;
