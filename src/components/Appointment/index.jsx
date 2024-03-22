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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.7974090731714!2d-118.02898198844616!3d33.8175408299748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd2f55a1453e31%3A0x5071f95e3a357f2d!2sLand%20Helmets%20%2F%20GTC%20Land%20Sports%20INC!5e0!3m2!1ses-419!2sus!4v1711026326727!5m2!1ses-419!2sus"
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
