import React from 'react';
import teamData from './teamData';
import TeamItem from './TeamItem';

function TeamMembers(selected) {
   const  teamDataValue = [...teamData.filter(value => value.position ===selected.type)];

    return (
        <section className="team-section section-padding">
            <div className="container">
                <div className="row mtm-30">
                <div className="section-title-3">      <h1>Accsessories</h1>
                </div>
                    {teamDataValue.map((data) => (
                        <TeamItem 
                            property="accsessories"
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
