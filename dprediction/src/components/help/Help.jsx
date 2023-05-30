import React from 'react';
// import { Container, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { Container, Typography, TextField, Button } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';

const Help = () => {
  return (
    <Container maxWidth="md">
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
    <div className="help-page" >
      <h1 className="help-page__title">Help Page</h1>

      <div className="help-page__content">
        <h2>How to Use the Disease Prediction App</h2>
        <p>
          Welcome to the Disease Prediction App! Follow these steps to get started:
        </p>

        <ol>
          <li>Enter your personal details such as age, gender, and symptoms.</li>
          <li>Click the "Predict" button to generate a prediction.</li>
          <li>Review the predicted disease along with any additional information provided.</li>
        </ol>

        <h2>Frequently Asked Questions</h2>
        <h3>Q: How accurate are the predictions?</h3>
        <p>
          A: The predictions provided by the app are based on statistical models and should be taken as a general guideline. It's always recommended to consult a healthcare professional for accurate diagnosis and treatment.
        </p>

        <h3>Q: Can I save my prediction results?</h3>
        <p>
          A: Currently, the app doesn't support saving or exporting prediction results. You can take a screenshot or write down the information if needed.
        </p>

        <h3>Q: What if I have more questions or need support?</h3>
        <p>
          A: If you have any additional questions or need support, please reach out to our support team at support@example.com. We're here to help!
        </p>

        <p className="help-page__back-link">
          <Link to="/">Go back to the homepage</Link>
        </p>
      </div>
    </div>
    </Container>
  );
};

export default Help;
