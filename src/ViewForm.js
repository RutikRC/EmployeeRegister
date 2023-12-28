import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    Typography,
    Button,
  } from '@mui/material';
  

  const ViewForm = ({ isUpdateMode }) => {
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState(null);
  
    const handleDelete = (id) => {
      // Make a DELETE request to your backend to delete the employee with the given id
      axios.delete(`http://127.0.0.1:8000/employee-detail/${id}/`, {
        headers: {
          'Authorization': 'Basic ' + btoa('rutik:1809'),
        },
      })
        .then(response => {
          // Remove the deleted employee from the state
          setEmployees(prevEmployees => prevEmployees.filter(employee => employee.id !== id));
        })
        .catch(error => {
          console.error('Error deleting employee:', error);
          setError('Error deleting employee');
        });
    };
  
    useEffect(() => {
      // Fetch employee details when the component mounts
      axios.get(`http://127.0.0.1:8000/employee-register/`, {
        headers: {
          'Authorization': 'Basic ' + btoa('rutik:1809'),
        },
      })
        .then(response => {
          setEmployees(response.data);
        })
        .catch(error => {
          console.error('Error retrieving data:', error);
          setError('Error retrieving data');
        });
    }, []); // Include id in the dependency array
  



  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Typography
                component="h1"
                variant="h5"
                sx={{
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: 2,
                    fontSize: '2em',
                }}
      >
                    Employee List Details
            </Typography>
      {error && <p>{error}</p>}
      <Paper elevation={3} style={{ overflowX: 'auto' }}>
        <Table>
          <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold', color: 'dark', fontSize: '1.2em' }}>ID</TableCell>
            <TableCell style={{ fontWeight: 'bold', color: 'dark', fontSize: '1.2em' }}>Name</TableCell>
            <TableCell style={{ fontWeight: 'bold', color: 'dark', fontSize: '1.2em' }}>Contact</TableCell>
            <TableCell style={{ fontWeight: 'bold', color: 'dark', fontSize: '1.2em' }}>Email</TableCell>
            <TableCell style={{ fontWeight: 'bold', color: 'dark', fontSize: '1.2em' }}>Aadhar Number</TableCell>
            <TableCell style={{ fontWeight: 'bold', color: 'dark', fontSize: '1.2em' }}>Pan Number</TableCell>
            <TableCell style={{ fontWeight: 'bold', color: 'dark', fontSize: '1.2em' }}>Bank Name</TableCell>
            <TableCell style={{ fontWeight: 'bold', color: 'dark', fontSize: '1.2em' }}>Account Number</TableCell>
            <TableCell style={{ fontWeight: 'bold', color: 'dark', fontSize: '1.2em' }}>IFSC Code</TableCell>
            <TableCell style={{ fontWeight: 'bold', color: 'dark', fontSize: '1.2em' }}>UPI Details</TableCell>
            <TableCell style={{ fontWeight: 'bold', color: 'dark', fontSize: '1.2em' }}>Local Address</TableCell>
            <TableCell style={{ fontWeight: 'bold', color: 'dark', fontSize: '1.2em' }}>Permanent Address</TableCell>
            <TableCell style={{ fontWeight: 'bold', color: 'dark', fontSize: '1.2em' }}>Field Experience</TableCell>
            <TableCell style={{ fontWeight: 'bold', color: 'dark', fontSize: '1.2em' }}>Services Provided</TableCell>
            <TableCell style={{ fontWeight: 'bold', color: 'dark', fontSize: '1.2em' }}>Auto Created</TableCell>
            <TableCell style={{ fontWeight: 'bold', color: 'dark', fontSize: '1.2em' }}>Auto Updated</TableCell>
            <TableCell style={{ fontWeight: 'bold', color: 'dark', fontSize: '1.2em' }}>User</TableCell>
            {isUpdateMode ? null : (
            <TableCell style={{ fontWeight: 'bold', color: 'dark', fontSize: '1.2em' }}>Actions</TableCell>
            )}
        </TableRow>
        </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.id}</TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.contact}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.aadhar_number}</TableCell>
                <TableCell>{employee.pan_number}</TableCell>
                <TableCell>{employee.bank_name}</TableCell>
                <TableCell>{employee.account_number}</TableCell>
                <TableCell>{employee.ifsc_code}</TableCell>
                <TableCell>{employee.upi_details}</TableCell>
                <TableCell>{employee.local_address}</TableCell>
                <TableCell>{employee.permanent_address}</TableCell>
                <TableCell>{employee.field_experience}</TableCell>
                <TableCell>{employee.services_provided}</TableCell>
                <TableCell>{new Date(employee.auto_created).toLocaleString()}</TableCell>
                <TableCell>{new Date(employee.auto_updated).toLocaleString()}</TableCell>
                <TableCell>{employee.user}</TableCell>
                <TableCell>
                {isUpdateMode ? null : (
                <Button
                    variant="contained"
                    style={{ backgroundColor: 'red', color: 'white' }}
                    onClick={() => handleDelete(employee.id)}
                >
                  Delete
                </Button>
                )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default ViewForm;
