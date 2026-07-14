import React from 'react';
import { images } from '../../assets';

const Team = () => {
  const teamMembers = [
    {
      image: images.team[0],
      name: 'John Maccman',
      position: 'Ceo',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        tumblr: '#',
      },
    },
    {
      image: images.team[1],
      name: 'Tore Flowian',
      position: 'Designer',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        tumblr: '#',
      },
    },
    {
      image: images.team[2],
      name: 'Graham Jarvis',
      position: 'Developer',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        tumblr: '#',
      },
    },
  ];

  return (
    <section className="team-section" id="team">
      <div className="section-title">
        <span>03</span>
        <h1>Team</h1>
      </div>
      <div className="container">
        <div className="title-box">
          <span>Team Members</span>
          <h2>Professional Staff</h2>
        </div>
        <div className="team-box">
          <div className="row">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-md-4">
                <div className="team-post">
                  <div className="image-holder">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="hover-team">
                    <ul className="social-team">
                      <li>
                        <a href={member.social.facebook}>
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href={member.social.twitter}>
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href={member.social.linkedin}>
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href={member.social.tumblr}>
                          <i className="fab fa-tumblr"></i>
                        </a>
                      </li>
                    </ul>
                    <h3>{member.name}</h3>
                    <span>{member.position}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
