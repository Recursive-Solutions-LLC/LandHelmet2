import React from 'react';
import { FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AppointmentItem({ day, time }) {
    return (
        <div className="appointment-time d-flex justify-content-between">
            <span >{day}</span>
            <span className=' d-flex justify-content-center flex-grow-1'>{time}</span>
            <Link to="/contact">
                <FaClock /> Book
            </Link>
        </div>
    );
}

export default AppointmentItem;
