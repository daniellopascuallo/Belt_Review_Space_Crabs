import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';
import '../Main.css';

const Main = props => {
    const [crabs, setCrabs] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8000/api/crabs")
            .then(response => setCrabs(response.data.results))
            .catch(err => console.log(err))
    }, [])

    return (
        <div >
            <table className="col-6 mx-auto">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Space Ship</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        crabs.map((c, i) => {
                            return <tr key={i}>
                                <td>{c.name}</td>
                                <td>{c.spaceShip}</td>
                                <td>
                                    <Link to={`/crab/${c._id}`} className="btn btn-info">Show</Link>
                                    <Link to={`/edit/${c._id}`} className="btn btn-secondary">Edit</Link>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Main;

