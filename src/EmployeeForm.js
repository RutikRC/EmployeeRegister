// Employee Registration.js
import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const EmployeeForm = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [aadhar_number, setAadhar_Number] = useState('');
    const [pan_number, setPan_Number] = useState('');
    const [bank_name, setBank_Name] = useState('');
    const [account_number, setAccount_Number] = useState('');
    const [ifsc_code, setIFSC_Code] = useState('');
    const [upi_details, setUPI_Details] = useState('');
    const [local_address, setLocal_Address] = useState('');
    const [permanent_address, setPermanent_Address] = useState('');
    const [field_experience, setField_Experience] = useState('');
    const [services_provided, setServices_Provided] = useState('');
    const [user, setUser] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Prepare data for POST request
        //write data as per models here
        const employeeData = {
            id:id,
            name: name,
            contact: contact,
            email: email,
            aadhar_number:aadhar_number,
            pan_number:pan_number,
            bank_name:bank_name,
            account_number:account_number,
            ifsc_code:ifsc_code,
            upi_details:upi_details,
            local_address: local_address,
            permanent_address: permanent_address,
            field_experience:field_experience,
            services_provided:services_provided,
            user:user,

        };


       axios.post('http://127.0.0.1:8000/employee-register/', employeeData, {
            headers: {
                'Authorization': 'Basic ' + btoa('rutik:1809'),
                //'X-CSRFToken': getCookie('csrftoken'),
                //'Content-Type': 'application/json',  // Specify the content type
            },
       })
        .then((response) => {
            console.log('Employee registered:', response.data);
            console.log(response.data.id); // Call the onSuccess callback with the employee ID
        })
        .catch((error) => {
            console.error('Error registering Employee:', error);
        });
    };



     return (
        <Container component="main" maxWidth="md">
            <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography
                component="h1"
                variant="h5"
                sx={{
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: 2,
                }}
            >
                    Employee Registeration Information
            </Typography>

                <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField fullWidth type="number" label="ID" value={id} disabled margin="normal" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth type="text" label="Name" value={name} onChange={(e) => setName(e.target.value)} margin="normal" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth type="text" label="Contact" value={contact} onChange={(e) => setContact(e.target.value)} margin="normal" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth type="text" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} margin="normal" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth type="text" label="Aadhar Number" value={aadhar_number} onChange={(e) => setAadhar_Number(e.target.value)} margin="normal" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth type="text" label="Pan Number" value={pan_number} onChange={(e) => setPan_Number(e.target.value)} margin="normal" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth type="text" label="Bank Name" value={bank_name} onChange={(e) => setBank_Name(e.target.value)} margin="normal" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth type="text" label="Account Number" value={account_number} onChange={(e) => setAccount_Number(e.target.value)} margin="normal" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth type="text" label="IFSC Code" value={ifsc_code} onChange={(e) => setIFSC_Code(e.target.value)} margin="normal" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth type="text" label="UPI Details" value={upi_details} onChange={(e) => setUPI_Details(e.target.value)} margin="normal" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth type="text" label="Local Address" value={local_address} onChange={(e) => setLocal_Address(e.target.value)} margin="normal" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth type="text" label="Permanent Address" value={permanent_address} onChange={(e) => setPermanent_Address(e.target.value)} margin="normal" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth type="text" label="Field Experience" value={field_experience} onChange={(e) => setField_Experience(e.target.value)} margin="normal" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth type="text" label="Services Provided" value={services_provided} onChange={(e) => setServices_Provided(e.target.value)} margin="normal" />
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
                            <TextField fullWidth type="text" label="User" value={user} onChange={(e) => setUser(e.target.value)} margin="normal" />
                        </Grid>
                        {/* Add other fields using a similar pattern */}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" sx={{ marginTop: 2 }}>
                        Register
                    </Button>
                </form>
            </Paper>
        </Container>
     );
};


export default EmployeeForm;