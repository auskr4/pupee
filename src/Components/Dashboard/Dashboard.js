//Dashboard.js
import React, { useState } from "react";
import './Dashboard.css'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ClearIcon from '@mui/icons-material/Clear';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Button, Tabs, Tab } from "@mui/material";
import Coco from './Coco.jpg'

function Dashboard() {
    const [currentTab, setCurrentTab] = useState(0);

    const handleChange = (event, newValue) => {
      setCurrentTab(newValue);
    };

    return (
        <div className="dashboardContainer p-6 rounded-xl" > 
            <Tabs value={currentTab} onChange={handleChange} centered>
                <Tab label="Tab 1" className="tab-label" />
                <Tab label="Tab 2" className="tab-label" />
                <Tab label="Tab 3" className="tab-label" />
            </Tabs>
            {currentTab === 0 && <div className="tab-content">1</div>}
            {currentTab === 1 && <div className="tab-content">2</div>}
            {currentTab === 2 && <div className="tab-content">3</div>}
        </div>
    )
}

export default Dashboard;
