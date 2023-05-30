import React, { useState } from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import { Container } from '@mui/material';

export default function HeartPrediction() {
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [cp, setCp] = useState('');
  const [trestbps, setTrestbps] = useState('');
  const [chol, setChol] = useState('');
  const [fbs, setFbs] = useState('');
  const [restecg, setRestecg] = useState('');
  const [thalach, setThalach] = useState('');
  const [exang, setExang] = useState('');
  const [oldpeak, setOldpeak] = useState('');
  const [slope, setSlope] = useState('');
  const [ca, setCa] = useState('');
  const [thal, setThal] = useState('');
  const [diabetesInd, setDiabetesInd] = useState('');
  const [heartpredict, setHeartPredict] = useState('');

  const handleClear = () => {
    setAge('');
    setSex('');
    setCp('');
    setTrestbps('');
    setChol('');
    setFbs('');
    setRestecg('');
    setThalach('');
    setExang('');
    setOldpeak('');
    setSlope('');
    setCa('');
    setThal('');
    setDiabetesInd('');
    setHeartPredict('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://127.0.0.1:5000/heart-predict', {
        age,
        sex,
        cp,
        trestbps,
        chol,
        fbs,
        restecg,
        thalach,
        exang,
        oldpeak,
        slope,
        ca,
        thal,
        diabetesInd,
        heartpredict,
      })
      .then((resp) => {
        console.log(resp);
        console.log(resp.data);
        setHeartPredict(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Container maxWidth="sm" style={{marginTop:"165px"}}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <Link className="navbar-brand" to="/">
            Welcome, Digital Hospital
          </Link>
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
                <NavLink className="nav-link" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/diabetics">
                  Diabetics Prediction
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/heart">
                  Heart Disease Prediction
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/help">
                  Help
                </NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <form onSubmit={handleSubmit}  className="mt-5 mb-4">
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="age" className="form-label">
                Age:
              </label>
              <input
                type="number"
                id="age"
                className="form-control"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="sex" className="form-label">
                Sex:
              </label>
              <input
                type="number"
                id="sex"
                className="form-control"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="cp" className="form-label">
                CP:
              </label>
              <input
                type="number"
                id="cp"
                className="form-control"
                value={cp}
                onChange={(e) => setCp(e.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="trestbps" className="form-label">
                Trestbps:
              </label>
              <input
                type="number"
                id="trestbps"
                className="form-control"
                value={trestbps}
                onChange={(e) => setTrestbps(e.target.value)}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="chol" className="form-label">
                Chol:
              </label>
              <input
                type="number"
                id="chol"
                className="form-control"
                value={chol}
                onChange={(e) => setChol(e.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="fbs" className="form-label">
                Fbs:
              </label>
              <input
                type="number"
                id="fbs"
                className="form-control"
                value={fbs}
                onChange={(e) => setFbs(e.target.value)}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="restecg" className="form-label">
                Restecg:
              </label>
              <input
                type="number"
                id="restecg"
                className="form-control"
                value={restecg}
                onChange={(e) => setRestecg(e.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="thalach" className="form-label">
                Thalach:
              </label>
              <input
                type="number"
                id="thalach"
                className="form-control"
                value={thalach}
                onChange={(e) => setThalach(e.target.value)}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="exang" className="form-label">
                Exang:
              </label>
              <input
                type="number"
                id="exang"
                className="form-control"
                value={exang}
                onChange={(e) => setExang(e.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="oldpeak" className="form-label">
                Oldpeak:
              </label>
              <input
                type="number"
                id="oldpeak"
                className="form-control"
                value={oldpeak}
                onChange={(e) => setOldpeak(e.target.value)}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="slope" className="form-label">
                Slope:
              </label>
              <input
                type="number"
                id="slope"
                className="form-control"
                value={slope}
                onChange={(e) => setSlope(e.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="ca" className="form-label">
                CA:
              </label>
              <input
                type="number"
                id="ca"
                className="form-control"
                value={ca}
                onChange={(e) => setCa(e.target.value)}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="thal" className="form-label">
                Thal:
              </label>
              <input
                type="number"
                id="thal"
                className="form-control"
                value={thal}
                onChange={(e) => setThal(e.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="diabeticsInd" className="form-label">
                Diabetics Indicator:
              </label>
              <input
                type="text"
                id="diabeticsInd"
                className="form-control"
                value={diabetesInd}
                onChange={(e) => setDiabetesInd(e.target.value)}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-12">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button
                className="btn btn-danger"
                onClick={handleClear}
                style={{ marginLeft: '20px' }}
              >
                Clear
              </button>
            </div>
          </div>
        </form>

        
        {heartpredict && (
        <div className={`alert ${heartpredict === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
          <h2>
            {heartpredict === 'success' ? 'The person has a Heart Problem' : 'The person does not have a Heart Problem'}
          </h2>
        </div>
      )}
      </Container>
    </div>
  );
}

// export default HeartPrediction;
