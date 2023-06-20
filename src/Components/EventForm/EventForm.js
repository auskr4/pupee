import React, { useState } from "react";
import TimePicker from "react-time-picker";
import './EventForm.css';


function EventForm( {onAdd} ) {
    const [eventType, setEventType] = useState("");
    const [eventTime, setEventTime] = useState("");
    const [eventDate, setEventDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(`type: ${eventType}, time: ${eventTime}`)
        onAdd({ type: eventType, time: eventTime, date: eventDate});
        setEventType("");
        setEventTime("");
        setEventDate("");
    }

    return (
        <form onSubmit={handleSubmit} className="EventForm">
            <label>
                Event Type: 
                <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
                    <option value="">Please select Feed or Potty</option>
                    <option value="feed">Feed</option>
                    <option value="potty">Potty</option>
                </select>
            </label>
            <label className="dateTimePicker">
                Please log the time: 
                <input type="time" value={eventTime} onChange={(e) => setEventTime(e.target.value)}/>
                <input type="date"value={eventDate} onChange={(e) => setEventDate(e.target.value)}/>
            </label>
            <input type="submit" value="Add Event"/>
        </form>
    );
}

export default EventForm;
