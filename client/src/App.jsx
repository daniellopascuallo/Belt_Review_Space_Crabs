import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Link } from '@reach/router';
import Main from './views/Main';
import New from './views/New';
import Show from './views/Show';
import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
      <h1 className="col-3 mx-auto bg-dark text-warning rounded">SPACE CRABS</h1>
      <div className="d-flex justify-content-around col-6 mx-auto my-4">
        <Link to="/" className="btn btn-info btn-outline-dark">Home</Link>
        <Link to="/new" className="btn btn-info btn-outline-dark">Add Crab</Link>
      </div>
      <Router>
        <Main path="/" />
        <New path="/new" />
        <Show path="/crab/:id" />
        <Edit path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
