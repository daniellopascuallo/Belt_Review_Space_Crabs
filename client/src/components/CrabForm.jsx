import React from 'react';

const CrabForm = props => {

    const { inputs, handleInputs, handleSubmit, errors, submitValue } = props;
    const { name, spaceShip, weaponOne, weaponTwo, weaponThree } = inputs;

    return (
        <div>
            <form className="col-5 mx-auto bg-light p-4 rounded" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input className="form-control" type="text" name="name" id="name" onChange={handleInputs} value={name}/>
                    <span className="text-danger">{errors.name ? errors.name.message : ""}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="spaceShip">Space Ship:</label>
                    <input className="form-control" type="text" name="spaceShip" id="spaceShip" onChange={handleInputs} value={spaceShip}/>
                    <span className="text-danger">{errors.spaceShip ? errors.spaceShip.message : ""}</span>
                </div>
                <h6>(Optional):</h6>
                <div className="form-group">
                    <label htmlFor="weaponOne">Weapon One:</label>
                    <input className="form-control" type="text" name="weaponOne" id="weaponOne" onChange={handleInputs} value={weaponOne}/>
                </div>
                <div className="form-group">
                    <label htmlFor="weaponTwo">Weapon Two:</label>
                    <input className="form-control" type="text" name="weaponTwo" id="weaponTwo" onChange={handleInputs} value={weaponTwo}/>
                </div>
                <div className="form-group">
                    <label htmlFor="weaponThree">Weapon Three:</label>
                    <input className="form-control" type="text" name="weaponThree" id="weaponThree" onChange={handleInputs} value={weaponThree}/>
                </div>
                <input className="btn btn-success" type="submit" value={submitValue}/>
            </form>
        </div>
    );
}

export default CrabForm;