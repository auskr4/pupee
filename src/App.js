import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import EventForm from './Components/EventForm/EventForm';
import EventList from "./Components/EventList/EventList";
import Dashboard from "./Components/Dashboard/Dashboard";
import axios from 'axios';
import PetsIcon from '@mui/icons-material/Pets';

function App() {
  const [events, setEvents] = useState([]);

  // const addEvent = (event) => {
  //   //call the hook, but pass a function. the parameter is the current state.  
  //   //prevEvents is the current state of the events array
  //   setEvents((prevEvents) => [...prevEvents, event]);
  // };

const addEvent = (event) => {
  fetch('http://localhost:5001/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  })
  .then(response => response.json())
  .then((data) => setEvents(prevEvents => [...prevEvents, data]));
};

const deleteEvent = (id) => {
  fetch(`http://localhost:5001/events/${id}`, {
    method: 'DELETE',
  })
  .then(() => setEvents(prevEvents => prevEvents.filter(event => event.id !== id)));
};

const handleUpdateAte = (ate, id) => {
  //console.log(`id: ${id}....ate: ${ate}`);
  fetch(`http://localhost:5001/events/${id}`, {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ate}),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`)
    }
    return response.json();
  })
  .then((data) => setEvents(prevEvents => prevEvents.map(event => event.id === id ? {...event, ate} : event )))
  .catch(error => {
    console.log(`Fetch error: ${error.message}`)
  });
};


  //fetch existing records when component loads
  useEffect(() => {
    axios.get('http://localhost:5001/events')
      .then((response) => {
        setEvents(response.data)
        console.log(`events data: ${JSON.stringify(response.data, null, 2)}`);
      })
  }, []);

  return (
    <div className="App">
      <header className="App-header justify-start stickyHeader">
        <h1 className="text-left pl-24 custom-text-color">puppee <PetsIcon className="pawprint"/></h1>
      </header>
      <div className="App-content">
        <EventForm onAdd={addEvent} />
        <div className="content-row">
          <Dashboard />
          <EventList events={events} onDelete={deleteEvent} onUpdate={handleUpdateAte}/>
        </div>
      </div>
    </div>
  );  
}

export default App;
