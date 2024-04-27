import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import UserCard from './UserCard';
import Pagination from './Pagination'; // Import the Pagination component

const App: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      console.log("data", data);
      setUsers(data.users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <Container>
      <Grid container spacing={3}>
        {currentUsers.map((user: any) => (
          <Grid item xs={12} sm={6} md={4} lg={2} xl={2} key={user.id}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </Container>
  );
};

export default App;
