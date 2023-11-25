'use client'

import { useState } from "react";


const Calendar = () => {
    // Initialize state for the current day
    const [currentDate, setCurrentDate] = useState(new Date());
  
    // Function to change the date to the next day
    const nextDay = () => {
      const newDate = new Date(currentDate);
      newDate.setDate(currentDate.getDate() + 1);
      setCurrentDate(newDate);
    };
  
    // Function to change the date to the previous day
    const prevDay = () => {
      const newDate = new Date(currentDate);
      newDate.setDate(currentDate.getDate() - 1);
      setCurrentDate(newDate);
    };
  
    // Function to get an array of dates for the current view
    const getCalendarDates = () => {
      const days = [];
  
      // Add two previous days
      for (let i = -2; i <= 2; i++) {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() + i);
        days.push(date);
      }
  
      return days;
    };
  
    return (
      <div className="calendar-container">
        {/* Month and year */}
        <div className="header">
          <button onClick={prevDay}>{'<< Prev'}</button>
          <span>{currentDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}</span>
          <button onClick={nextDay}>{'Next >>'}</button>
        </div>
  
        {/* Days */}
        <div className="days-container">
          {getCalendarDates().map((date, index) => (
            <div key={index} className={`day ${index === 2 ? 'current-day' : ''}`}>
              <div className="day-name">{date.toLocaleString('en-US', { weekday: 'short' })}</div>
              <div className="day-date">{date.getDate()}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Calendar;