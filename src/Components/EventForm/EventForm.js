import React, { useState } from "react";
import './EventForm.css';

function EventForm({ onAdd }) {
  const [eventType, setEventType] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventDate, setEventDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(`chosen date:`, eventDate)
    onAdd({ type: eventType, time: eventTime, date: eventDate });
    setEventType("");
    setEventTime("");
    setEventDate("");
  };

  return (
    <div className="eventFormContainer p-6 stickyForm">
      <form onSubmit={handleSubmit} className="eventForm">
        <div className="inline items-center">
          <label className="eventForm">Event Type:</label>
          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="border-gray-200 rounded p-1 text-black"
          >
            <option value="">Please select Feed or Potty</option>
            <option value="feed">Feed</option>
            <option value="Pee">Pee</option>
            <option value="Poo">Poo</option>
          </select>
        </div>
        <div className="inline ml-6 items-center">
          <label>Time:</label>
          <input
            type="time"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
            className="flex-grow border border-gray-200 rounded p-1 text-black"
          />
        </div>
        <div className="inline ml-6 items-center">
          <label>Date:</label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="flex-grow border border-gray-200 rounded p-1 text-black"
          />
        </div>
        <div className="inline items-start">
          <input
            type="submit"
            value="Add Event"
            className="submitEventButton ml-6 text-white rounded p-2 px-4 cursor-pointer hover:bg-blue-600"
          />
        </div>
      </form>
    </div>
  );
}

export default EventForm;
