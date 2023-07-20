import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import EventForm from './Components/EventForm/EventForm';
import EventList from "./Components/EventList/EventList";
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
  console.log(`id: ${id}....ate: ${ate}`);
  // fetch(`http://localhost:5001/events/${id}`, {
  //     method: 'PATCH',
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(e),
  // })
  // .then(response => response.json())
  // .then((data) => setEvents(prevEvents => [...prevEvents, data]))
};


  //fetch existing records when component loads
  useEffect(() => {
    axios.get('http://localhost:5001/events')
      .then((response) => {
        setEvents(response.data)
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header justify-start stickyHeader">
        <h1 className="text-left pl-24 custom-text-color">puppee <PetsIcon /></h1>
      </header>
      <div className="App-content">
        <EventForm onAdd={addEvent} />
        <EventList events={events} onDelete={deleteEvent} onUpdate={handleUpdateAte}/>
      </div>
    </div>
  );  
}

export default App;
