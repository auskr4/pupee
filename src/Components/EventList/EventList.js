import React, { useState } from "react";
import './EventList.css'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Button } from "@mui/material";



function EventList({events, onDelete }) {

    //sort Events
    const sortedEvents = [...events].sort((a, b) => b.date.localeCompare(a.date));
    
    //group them
    const eventsByDate = sortedEvents.reduce((dateGroups, event) => {
        console.log(event.date)
        const date = new Date(event.date).toISOString().split('T')[0];
        console.log("new date: ", date);
        if (!dateGroups[date]) {
            dateGroups[date] = []
        }
        dateGroups[date].push(event);
        return dateGroups;
    }, {});

    const hasEvents = events.length > 0;

    const formatTime = (timeString) => {
        const options = { hour: 'numeric', minute: '2-digit', hour12: true };
        return new Date(`2000-01-01T${timeString}`).toLocaleTimeString([], options);
    };

    return (
        <div className={hasEvents ? "border custom-border-color p-6 rounded eventListContainer" : "eventListContainerEmpty"}>
            {Object.keys(eventsByDate).map(date => (
                <div key={date} className="dateHeader">
                    <h2>{date}</h2>
                    {eventsByDate[date].map((event, index) => (
                        <p key={index}>
                            {event.type === 'feed' ? <FastfoodIcon /> : <CheckCircleOutlineIcon className="peeCheck"/> } {event.type === 'feed' ? 'fed' : event.type} at {formatTime(event.time)}
                            {/* show checkbox if event.type === 'feed' */}
                            {event.type === 'feed' &&
                                <>
                                    <label className="ateLabel">Ate?</label>
                                    <input type="checkbox" className="ateCheckBox" checked={event.ate || false }></input>
                                </>
                            }
                            <button className="deleteButton bg-red-400 hover:bg-red-500 text-white font-bold py-1 px-1 rounded text-xs ml-2" onClick={() => onDelete(event.id)}>Delete</button>
                        </p>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default EventList;