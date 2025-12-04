import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Question18 = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    axios.get('https://dummyjson.com/users?limit=20')
      .then(res => setUsers(res.data.users))
      .catch(err => console.log(err));
  }, []);

  const indexOfLast = currentPage * usersPerPage;
  const indexOfFirst = indexOfLast - usersPerPage;
  const currentUsers = users.slice(indexOfFirst, indexOfLast);

  const nextPage = () => {
    if (currentPage < Math.ceil(users.length / usersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {currentUsers.map(user => (
          <li key={user.id}>{user.firstName} {user.lastName} - {user.email}</li>
        ))}
      </ul>
      <button onClick={prevPage} disabled={currentPage === 1}>Prev</button>
      <button onClick={nextPage} disabled={currentPage === Math.ceil(users.length / usersPerPage)}>Next</button>
      <hr/>
    </div>
  );
};

export default Question18;