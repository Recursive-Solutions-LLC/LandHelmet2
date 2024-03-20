import React from 'react';
import bgImg from '../../assets/img/appointment.jpg';
import appointmentData from './appointmentData';
import AppointmentItem from './AppointmentItem';

function Apointment() {
    return (
        <section className="make-appointment-wrapper section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-12 col-lg-5">
                        <div className="appointment-notice-board">
                            <div
                                className="notice-board-banner bg-cover"
                                style={{ backgroundImage: `url(${bgImg})` }}
                            />
                            <div className="appointment-list">
                                <h2>Make Appointment</h2>

                                {appointmentData.map((data) => (
                                    <AppointmentItem
                                        key={data.id}
                                        day={data.day}
                                        time={data.time}
                                    />
                                ))}
                                <div className="appointment-time d-flex justify-content-between">
                                    <span>Saturday / Sunday</span>
                                    <span>Off Day</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-8 col-lg-7 col-12 mt-5 mt-lg-0 px-lg-4">
                        <div
                            className="map-wrapper map-iframe"
                            style={{ width: '100%', height: '100%' }}
                        >
                            <iframe
                                title="map"
                                src="https://maps.app.goo.gl/UPajkHEcYwouuARi7"
                                style={{ border: '0', height: '100%', width: '100%' }}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Apointment;
