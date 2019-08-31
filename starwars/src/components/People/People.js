import React from 'react';
import '../StarWars.css';

function People(props) {
    console.log(props);
    return (
        <div className="container">
            <div className="ui card">
                <h2 className="ui header">{props.person}</h2>
                <p>{props.height}cm tall</p>
                <p>Born {props.birthyear}</p>
            </div>
        </div>
    );
}

export default People;