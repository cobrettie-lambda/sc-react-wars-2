import React, { useState, useEffect } from 'react';
import axios from 'axios';
import People from './components/People/People';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people, setPeople] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    // implement axios allowing to retrieve data from API
    axios
      .get("https://swapi.co/api/people/")
      .then(res => {
        console.log(res.data.results);
        setPeople(res.data.results);
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <h2 className="sub-header">Key Star Wars Personel</h2>
      <div className="container">
      {
        people.map((person, index) => {
          return (
            <People 
              key={index} 
              person={person.name} 
              height={person.height} 
              mass={person.mass}
              birthyear={person.birth_year} 
            />
          );
        })
      }
      </div>
    </div>
  );
}

export default App;
