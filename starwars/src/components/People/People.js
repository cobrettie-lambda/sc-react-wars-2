import React from 'react';
import '../StarWars.css';
import { Card } from 'reactstrap';

function People(props) {
    console.log(props);
    return (
        <div className="container">
            <Card>
                <h2 className="person-header">
                    {props.person}
                </h2>
                <p className="person-birth">
                    Born: {props.birthyear}
                </p>
                <p className="person-height">
                    Height: {props.height}cm
                </p>
                <p className="person-mass">
                    Weight: {props.mass}kg
                </p>
            </Card>
        </div>
    );
}

export default People;