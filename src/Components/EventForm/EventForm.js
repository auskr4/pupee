import React, { useState } from "react";

function EventForm({ onAdd }) {
  const [eventType, setEventType] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventDate, setEventDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`chosen date:`, eventDate)
    onAdd({ type: eventType, time: eventTime, date: eventDate });
    setEventType("");
    setEventTime("");
    setEventDate("");
  };

  return (
    <div className="border custom-border-color p-6 rounded">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center space-x-4">
          <label>Event Type:</label>
          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="flex-grow border border-gray-200 rounded p-1 text-black"
          >
            <option value="">Please select Feed or Potty</option>
            <option value="feed">Feed</option>
            <option value="potty">Potty</option>
          </select>
        </div>
        <div className="flex items-center space-x-4">
          <label>Time:</label>
          <input
            type="time"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
            className="flex-grow border border-gray-200 rounded p-1 text-black"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label>Date:</label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="flex-grow border border-gray-200 rounded p-1 text-black"
          />
        </div>
        <div className="flex items-start">
          <input
            type="submit"
            value="Add Event"
            className="bg-teal-600 text-white rounded p-2 px-4 cursor-pointer hover:bg-blue-600"
          />
        </div>
      </form>
    </div>
  );
}

export default EventForm;
