import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeForm from './EmployeeForm';
import UpdateForm from './UpdateForm';
import EmployeeDetails from './ViewForm';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const EmployeeManagement = ({ onViewForm }) => {
  const [isRegistering, setIsRegistering] = useState(true);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

  const handleRegistrationSuccess = (employeeId) => {
    setIsRegistering(false);
    setSelectedEmployeeId(employeeId);
  };

  const handleUpdateSuccess = (employeeId) => {
    setSelectedEmployeeId(employeeId);
  };

  const handleSwitchToViewForm = () => {
    setIsRegistering(false);
    setSelectedEmployeeId(null); // Reset the selected employee ID
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {isRegistering ? (
          <EmployeeForm onSuccess={handleRegistrationSuccess} />
        ) : (
          <>
            <UpdateForm onSuccess={handleUpdateSuccess} />
            <EmployeeDetails employeeId={selectedEmployeeId} isUpdateMode={!isRegistering} />
          </>
        )}

        <div style={{ marginTop: '16px' }}>
          <Button onClick={() => setIsRegistering(true)}>Switch to Registration</Button>
          <Button onClick={() => setIsRegistering(false)}>Switch to Update</Button>
          <Button onClick={() => onViewForm(selectedEmployeeId)}>Switch to ViewForm</Button>       
        </div>
      </Paper>
    </Container>
  );
};

export default EmployeeManagement;
