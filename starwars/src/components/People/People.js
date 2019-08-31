import React from 'react';
import '../StarWars.css';

function People(props) {
    console.log(props);
    return (
        <div className="container">
            <div className="">
                <h2 className="">                {props.person} 
                </h2>
                <p>Born {props.birthyear}</p>
                <p>{props.height}cm</p>
                <p>{props.mass}kg</p>
            </div>
        </div>
    );
}

export default People;