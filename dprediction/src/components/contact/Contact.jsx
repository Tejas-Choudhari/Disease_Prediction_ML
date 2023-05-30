import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';


const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    // Reset the form fields
    e.target.reset();
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
              <NavLink className="nav-link" to="/diabetics">Diabetes Prediction</NavLink>
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
              <Link className="nav-link" to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="contactUsPage mt-5" >
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            required
            className="form-control"
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            required
            className="form-control"
          />
          <TextField
            label="Message"
            multiline
            rows={4}
            fullWidth
            margin="normal"
            required
            className="form-control"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth className="mt-3">
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
