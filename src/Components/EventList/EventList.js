import React, { useState } from "react";

function EventList({events}) {

    //sort Events
    const sortedEvents = [...events].sort((a, b) => a.date.localCompare(b.date));
    
    //group them
    const eventsByDate = sortedEvents.reduce((dateGroups, event) => {
        const date = event.date
        if (!dateGroups[date]) {
            dateGroups[date] = []
        }
        dateGroups[date].push(event);
        return dateGroups;
    }, {});

    return (
        <div>
            {Object.keys(eventsByDate).map(date => (
                <div key={date}>
                    <h2>{date}</h2>
                    {eventsByDate[date].map((event, index) => (
                        <p key={index}>
                            {event.type} at {event.time}
                        </p>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default EventList;