// App.js
import React, { useState } from 'react';
import EmployeeManagement from './EmployeeManagement';
import ViewForm from './ViewForm';  // Import your ViewForm component here
import { Container, Typography } from '@mui/material';

const App = () => {
  const [isViewFormVisible, setIsViewFormVisible] = useState(false);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

  const showViewForm = (employeeId) => {
    setIsViewFormVisible(true);
    setSelectedEmployeeId(employeeId);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '20px', textAlign: 'center' }}>
      {isViewFormVisible ? (
        <ViewForm employeeId={selectedEmployeeId} onClose={() => setIsViewFormVisible(false)} />
      ) : (
        <EmployeeManagement onViewForm={showViewForm} />
      )}
    </Container>
  );
};

export default App;
