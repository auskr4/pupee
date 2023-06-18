import React, { useState } from "react";
import './EventForm.css';

function EventForm() {
    const [eventType, setEventType] = useState("");
    const [eventTime, setEventTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`type: ${eventType}, time: ${eventTime}`)
        //onAdd({ type: eventType, time: eventTime})
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
            <label>
                Please log the time: 
                <input 
                type="time" 
                value={eventTime}
                onChange={(e) => setEventTime(e.target.value)}
                />
            </label>
            <input type="submit" />
        </form>
    );
}

export default EventForm
