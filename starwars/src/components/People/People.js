import React from 'react';

function People(props) {
    console.log(props);
    return (
        <div>
            <h2>{props.person}</h2>
            <p>{props.height}cm tall</p>
            <p>Born {props.birthyear}</p>
        </div>
    );
}

export default People;