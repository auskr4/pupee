import React, { useState } from "react";

function EventList({events, onDelete }) {

    //sort Events
    const sortedEvents = [...events].sort((a, b) => a.date.localeCompare(b.date));
    
    //group them
    const eventsByDate = sortedEvents.reduce((dateGroups, event) => {
        const date = new Date(event.date).toDateString();
        if (!dateGroups[date]) {
            dateGroups[date] = []
        }
        dateGroups[date].push(event);
        return dateGroups;
    }, {});

    return (
        <div className="eventListContainer">
            {Object.keys(eventsByDate).map(date => (
                <div key={date}>
                    <h2>{date}</h2>
                    {eventsByDate[date].map((event, index) => (
                        <p key={index}>
                            {event.type} at {event.time}
                            <button onClick={() => onDelete(event.id)}>Delete</button>
                        </p>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default EventList;