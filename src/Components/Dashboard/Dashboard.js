//Dashboard.js
import React, { useState } from "react";
import './Dashboard.css'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ClearIcon from '@mui/icons-material/Clear';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Button, Tabs, Tab } from "@mui/material";
import Coco from './Coco.jpg'
import { formatTime } from '../../utils/utils';

const minutesToTimeString = (minutesPastMidnight) => {
    const totalHours = Math.floor(minutesPastMidnight / 60);
    const remainingMinutes = Math.floor(minutesPastMidnight % 60);
    const hours = totalHours % 24; // This ensures the time wraps around if it's past 24 hours
    const amPm = hours < 12 ? 'AM' : 'PM';

    let adjustedHours = hours % 12;
    if (adjustedHours === 0) adjustedHours = 12; // Convert 0 hours to 12 for display

    return `${String(adjustedHours).padStart(2, '0')}:${String(remainingMinutes).padStart(2, '0')} ${amPm}`;
};
  
function Dashboard({medianFeedTime}) {
    const [currentTab, setCurrentTab] = useState(0);

    const handleChange = (event, newValue) => {
      setCurrentTab(newValue);
    };

    return (
        <div className="dashboardContainer p-6 rounded-xl" > 
            <Tabs value={currentTab} onChange={handleChange} centered>
                <Tab label="Feed Stats" className="tab-label" />
                <Tab label="BESTS" className="tab-label" />
                <Tab label="THREE" className="tab-label" />
            </Tabs>
            {currentTab === 0 && <div className="tab-content">Median Feed Time: {minutesToTimeString(medianFeedTime)}</div>}
            {currentTab === 1 && <div className="tab-content">2</div>}
            {currentTab === 2 && <div className="tab-content">3</div>}
        </div>
    )
}

export default Dashboard;
