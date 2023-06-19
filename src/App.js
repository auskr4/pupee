import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import EventForm from './Components/EventForm/EventForm';
import EventList from "./Components/EventList/EventList";

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    //call the hook, but pass a function. the parameter is the current state.  
    //prevEvents is the current state of the events array
    setEvents((prevEvents) => [...prevEvents, event]);
  };

  useEffect(() => {
    console.log(events)
  }, [events]);

  return (
    <div className="App">
      <h1>puppee</h1>
      <EventForm onAdd={addEvent} />
      <EventList events={events} />
    </div>
  );
}

export default App;
