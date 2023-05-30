import React, { useState } from 'react';
import { Container, Typography, Avatar, Grid, Button, TextField } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';


const Profile = () => {
  const user = {
    name: 'Tejas Choudhari',
    email: 'tejaschoudhari3419@gmail.com',
    mobile: '9373816801',
    imageUrl: 'https://example.com/profile-image.jpg',
  };
  
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [mobile, setMobile] = useState(user.mobile);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Update the user object with the edited values and save it
    const updatedUser = { ...user, name, email, mobile };
    console.log(updatedUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
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
              <Link className="nav-link" to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Typography variant="h4" align="center" gutterBottom>
        Profile
      </Typography>

      {isEditing ? (
        <>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Mobile"
            fullWidth
            margin="normal"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <Grid container justifyContent="center">
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
            <Button variant="contained" color="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          </Grid>
        </>
      ) : (
        <>
          <Grid container justifyContent="center" spacing={2} >
            <Grid item>
              <Avatar alt="Profile" src={user.imageUrl} sx={{ width: 150, height: 150 }} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" align="center">
                {name}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" align="center">
                Email: {email}
              </Typography>
              <Typography variant="body1" align="center">
                Mobile: {mobile}
              </Typography>
            </Grid>
            <Grid item xs={12} container justifyContent="center">
              <Button variant="contained" color="primary" onClick={handleEdit}>
                Edit
              </Button>
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
};

export default Profile;
