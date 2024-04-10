import React from 'react';
import teamData from './teamData';
import TeamItem from './TeamItem';

function TeamMembers() {
    return (
        <section className="team-section pt-5">
            <div className="container">
                <div className="row ">
                    <h1>Custom Capability</h1>
                    {teamData.map((data) => (
                        <TeamItem
                            key={data.id}
                            img={data.img}
                            name={data.name}
                            position={data.position}
                            fbLink={data.fbLink}
                            twitterLink={data.twitterLink}
                            behanceLink={data.behanceLink}
                            youtubeLink={data.youtubeLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeamMembers;
