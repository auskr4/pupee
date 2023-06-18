import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import EventForm from './Components/EventForm/EventForm';

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    //callthe hook, but pass a function.  prevEvents is the current state of events
    setEvents((prevEvents) => [...prevEvents, event]);
    console.log({events});
  };

  return (
    <div className="App">
      <h1>puppee</h1>
      <EventForm onAdd={addEvent} />
    </div>
  );
}

export default App;
