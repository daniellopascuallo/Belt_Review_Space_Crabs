import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';
import CrabForm from '../components/CrabForm';

const Edit = props => {
    const initialCrab = {
        name: "",
        spaceShip: "",
        weaponOne: "",
        weaponTwo: "",
        weaponThree: ""
    }
    const initialErrors = {
        name: "",
        spaceShip: "",
        weaponOne: "",
        weaponTwo: "",
        weaponThree: ""
    }
    const [ editCrab, setEditCrab ] = useState(initialCrab);
    const [ errors, setErrors ] = useState(initialErrors);

    const handleForm = e => {
        setEditCrab({
            ...editCrab,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(initialErrors);
        Axios.put(`http://localhost:8000/api/update/crab/${props.id}`, editCrab)
            .then(response => {
                if(response.data.results){
                    setEditCrab(initialCrab);
                    navigate(`/crab/${props.id}`);
                }
                else{
                    console.log(response.data)
                    setErrors(response.data)
                }
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/crab/${props.id}`)
            .then(response => setEditCrab(response.data.results))
            .catch(err => console.log(err));
    }, [props])

    return(
        <div>
            <h2>Edit {editCrab.name}</h2>
            <CrabForm 
            inputs={editCrab}
            handleInputs={handleForm}
            handleSubmit={handleSubmit}
            errors={errors}
            submitValue="Edit Crab"
            />
        </div>
    ); 
}

export default Edit;