import React from 'react';
import { useState, useEffect } from 'react';
import './Nav.css'

function NavBar() {
  const [date, setDate] = useState('');

  useEffect(() => {
    const options = { month: 'short', day: 'numeric' };
    const today = new Date();
    setDate(today.toLocaleDateString('en-US', options));
  }, []);

  const handleLogout = () => {
    // Implement logout functionality here
    console.log('User logged out');
  };

  return (
    <div className="flex div-container flex-container items-center">
    <div className="flex  navbar flex-container">

      <div className="items-center company-name">
        <h5 className="text-xs">Business Name</h5>
       </div>
       <div className="nav-date">
        <div className="div-date">
        <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 16 16" 
        id="calendar"><path d="M5 4.5a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5zM11 4.5a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5z"></path>
        <path d="M13 14.5H3c-.827 0-1.5-.673-1.5-1.5V4c0-.827.673-1.5 1.5-1.5h10c.827 0 1.5.673 1.5 1.5v9c0 .827-.673 1.5-1.5 1.5zM3 3.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H3z"></path>
        <path d="M14 6.5H2a.5.5 0 0 1 0-1h12a.5.5 0 0 1 0 1zM5.5 7.5h1v1h-1zM7.5 7.5h1v1h-1zM9.5 7.5h1v1h-1zM11.5 7.5h1v1h-1zM3.5 9.5h1v1h-1zM5.5 9.5h1v1h-1zM7.5 9.5h1v1h-1zM9.5 9.5h1v1h-1zM11.5 9.5h1v1h-1zM3.5 11.5h1v1h-1zM5.5 11.5h1v1h-1zM7.5 11.5h1v1h-1z"></path></svg>
        {date.toLocaleString()}
        </div>
      </div>
      <div className="log-out"><button
          className=" font-bold focus:outline-none focus:shadow-outline"
          onClick={handleLogout}
        >
          Log Out
        </button></div>
    </div>
    </div>
  );
}

export default NavBar;