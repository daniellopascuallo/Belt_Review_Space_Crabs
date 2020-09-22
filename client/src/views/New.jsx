import React, { useState } from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';
import CrabForm from '../components/CrabForm';

const New = props => {
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
    const [ crab, setCrab ] = useState(initialCrab);
    const [ errors, setErrors ] = useState(initialErrors);

    const handleForm = e => {
        setCrab({
            ...crab,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(initialErrors);
        Axios.post("http://localhost:8000/api/create/crab", crab)
            .then(response => {
                if(response.data.results){
                    setCrab(initialCrab);
                    navigate("/")
                }
                else{
                    console.log(response.data)
                    setErrors(response.data)
                }
            })
            .catch(err => console.log(err));
    }

    return(
        <div>
            <h2>Create a Crab</h2>
            <CrabForm 
            inputs={crab}
            handleInputs={handleForm}
            handleSubmit={handleSubmit}
            errors={errors}
            submitValue="Add Crab"
            />
        </div>
    ); 
}

export default New;