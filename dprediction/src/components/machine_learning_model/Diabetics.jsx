import React, { useState } from 'react';
import axios from 'axios'
import { Link, NavLink } from 'react-router-dom';
import { Container } from '@mui/material';


export default function Diabetics() {
  const [pregnancies, setPregnancies] = useState('');
  const [glucose, setGlucose] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [skinThickness, setSkinThickness] = useState('');
  const [insulin, setInsulin] = useState('');
  const [bmi, setBMI] = useState('');
  const [pedigreeFunction, setPedigreeFunction] = useState('');
  const [age, setAge] = useState('');
  const [diabetesInd, setDiabetesInd] = useState('');

  const handleClear = () => {
    setPregnancies('');
    setGlucose('');
    setBloodPressure('');
    setSkinThickness('');
    setInsulin('');
    setBMI('');
    setPedigreeFunction('');
    setAge('');
    setDiabetesInd('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Accept'] = 'application/json';

    const formData = {
      pregnancies,
      glucose,
      bloodPressure,
      skinThickness,
      insulin,
      bmi,
      pedigreeFunction,
      age
    };

    axios.post('http://127.0.0.1:5000/predict', formData)
      .then((resp) => {
        console.log(resp);
        console.log(resp.data);
        setDiabetesInd(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Container maxWidth="sm">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <Link className="navbar-brand" to="/">Welcome, Digital Hospital</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
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

        <form onSubmit={handleSubmit}  className="mt-5">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="pregnancies" className="form-label">Pregnancies:</label>
                <input
                  type="number"
                  id="pregnancies"
                  className="form-control"
                  value={pregnancies}
                  onChange={(e) => setPregnancies(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="glucose" className="form-label">Glucose:</label>
                <input
                  type="number"
                  id="glucose"
                  className="form-control"
                  value={glucose}
                  onChange={(e) => setGlucose(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="bloodPressure" className="form-label">Blood Pressure:</label>
                <input
                  type="number"
                  id="bloodPressure"
                  className="form-control"
                  value={bloodPressure}
                  onChange={(e) => setBloodPressure(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="skinThickness" className="form-label">Skin Thickness:</label>
                <input
                  type="number"
                  id="skinThickness"
                  className="form-control"
                  value={skinThickness}
                  onChange={(e) => setSkinThickness(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="insulin" className="form-label">Insulin:</label>
                <input
                  type="number"
                  id="insulin"
                  className="form-control"
                  value={insulin}
                  onChange={(e) => setInsulin(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="bmi" className="form-label">BMI:</label>
                <input
                  type="number"
                  id="bmi"
                  className="form-control"
                  value={bmi}
                  onChange={(e) => setBMI(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="pedigreeFunction" className="form-label">Pedigree Function:</label>
                <input
                  type="number"
                  id="pedigreeFunction"
                  className="form-control"
                  value={pedigreeFunction}
                  onChange={(e) => setPedigreeFunction(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="age" className="form-label">Age:</label>
                <input
                  type="number"
                  id="age"
                  className="form-control"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
          <button className="btn btn-danger" onClick={handleClear}>Clear</button>
        </form>

        {diabetesInd && (
        <div className={`alert ${diabetesInd === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
          <h2>
            {diabetesInd === 'success' ? 'The person have Diabetes' : 'The person do not have Diabetes'}
          </h2>
        </div>
      )}
      </Container>
    </>
  );
}
