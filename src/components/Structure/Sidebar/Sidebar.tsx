import React, { useState } from 'react';
import './Sidebar.css'
import { Routes, Route, Link } from 'react-router-dom';

function Sidebar() {
    return (
    <div id = "pages">
        <Link to="/page1">
            <div><svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M42 21L10.5 39.1865L10.5 2.81347L42 21Z" fill="white"/>
                <line x1="5.54054" y1="2.27051" x2="5.54054" y2="39.73" stroke="#DEDEDE" stroke-width="2"/>
            </svg>
            </div>
        </Link>

        <Link to="/page2">
            <svg width="42" height="37" viewBox="0 0 42 37" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <circle cx="2.95238" cy="2.2381" r="2.2381" fill="white"/>
                <path d="M8.92063 2.23779L29.8095 2.23779" stroke="white" stroke-width="2" stroke-linecap="round"/>
                <circle cx="2.95238" cy="17.9046" r="2.2381" fill="white"/>
                <path d="M8.92063 17.9048L35.7778 17.9048" stroke="white" stroke-width="2" stroke-linecap="round"/>
                <circle cx="2.95238" cy="26.1111" r="2.2381" fill="white"/>
                <path d="M8.92063 26.1113L29.8095 26.1113" stroke="white" stroke-width="2" stroke-linecap="round"/>
                <circle cx="2.95238" cy="10.4446" r="2.2381" fill="white"/>
                <path d="M8.92063 10.4443L41 10.4443" stroke="white" stroke-width="2" stroke-linecap="round"/>
                <circle cx="2.95238" cy="34.3172" r="2.2381" fill="white"/>
                <path d="M8.92063 34.3174L24.5873 34.3174" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </Link>        
    </div>
  );
}

export default Sidebar;