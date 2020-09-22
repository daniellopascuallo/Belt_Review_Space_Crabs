import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';

const Show = props => {
    const [crab, setCrab] = useState({
        name: "",
        spaceShip: "",
        weaponOne: "",
        weaponTwo: "",
        weaponThree: ""
    })

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/crab/${props.id}`)
            .then(response => setCrab(response.data.results))
            .catch(err => console.log(err));
    }, [props])

    const handleDelete = () => {
        Axios.delete(`http://localhost:8000/api/delete/crab/${props.id}`)
            .then(response => navigate("/"))
            .catch(err => console.log(err));
    }

    return (
        <div className="col-4 mx-auto p-5 bg-dark text-warning">
            <h2>{crab.name}</h2>
            <h4>Space Ship: {crab.spaceShip}</h4>
            <h3>Weapons:</h3>
            <ul className="list-group text-danger">
                <li className="list-group-item">{crab.weaponOne}</li>
                <li className="list-group-item">{crab.weaponTwo}</li>
                <li className="list-group-item">{crab.weaponThree}</li>
            </ul>
            <br/>
            <button className="btn btn-danger btn-outline-warning" onClick={handleDelete}>Delete {crab.name}</button>
        </div>
    );
}

export default Show;

