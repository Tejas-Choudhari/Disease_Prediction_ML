import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
const ProfilePage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the form data (e.g., submit to a server)
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Email:', email);
    console.log('Mobile Number:', mobile);
    // Reset the form fields
    setName('');
    setAge('');
    setEmail('');
    setMobile('');
  };

  const handleCancel = () => {
    // Reset the form fields
    setName('');
    setAge('');
    setEmail('');
    setMobile('');
  };

  return (
    <Container maxWidth="sm">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <Link className="navbar-brand" to="/">Welcome, Digital Hospital</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">Profile</NavLink>
            </li>
            <li className="nav-item">
                        <NavLink className="nav-link" to="/diabetics">Dibetices Prediction</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/heart">Heart Disease Prediction</NavLink>
                        </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/help">Help</NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" >Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          fullWidth
          value={name}
          onChange={handleNameChange}
          margin="normal"
        />

        <TextField
          label="Age"
          type="number"
          fullWidth
          value={age}
          onChange={handleAgeChange}
          margin="normal"
        />

        <TextField
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={handleEmailChange}
          margin="normal"
        />

        <TextField
          label="Mobile Number"
          type="tel"
          fullWidth
          value={mobile}
          onChange={handleMobileChange}
          margin="normal"
        />

        <Grid container justifyContent="space-between" mt={3}>
          <Button variant="outlined" color="primary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Update
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

export default ProfilePage;
