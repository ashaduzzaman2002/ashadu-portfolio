import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [certificates, setCertificates] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "certificates"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setCertificates(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & certificates</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => skill.icon && (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={index}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-certificate">
          {
            certificates.map((item, index) => item.title && (
              <motion.div
                key={index}
                className="app__skills-certificate-item"
              >
                <div className="app__skills-certificate-year">
                  <p className="bold-text">{item.year}</p>
                </div>
                <a className="certificate-link" href={item.link} rel="noreferrer" target="_blank">
                  <motion.div className="app__skills-certificate-works">
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-certificate-details"
                      data-tip
                      data-for="Full Stack Developer"
                    >
                      <h4 className="bold-text">{item.title}</h4>
                      <p className="p-text">{item.provider}</p>
                    </motion.div>
                  </motion.div>
                </a>
              </motion.div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
