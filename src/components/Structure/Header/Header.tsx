import React, { useState } from 'react';
import './Header.css'

function Header() {

    return (
    <header >
        <span className = "logo">VACUUM</span>
        <div className='at'>
          <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.5 53.375C43.1335 53.375 53.375 43.1335 53.375 30.5C53.375 17.8665 43.1335 7.625 30.5 7.625C17.8665 7.625 7.625 17.8665 7.625 30.5C7.625 43.1335 17.8665 53.375 30.5 53.375Z" stroke="#5DA951" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M43.0588 30.5002L24.2206 41.3765L24.2206 19.624L43.0588 30.5002Z" fill="#5DA951"/>
          </svg> 
          <span className = 'two'>Running</span>
        </div>
    </header>
  );
  
}

export default Header;
