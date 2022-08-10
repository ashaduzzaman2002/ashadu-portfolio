import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';
import { urlFor, client } from '../../client';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  const [home, setHome] = useState([]);

  useEffect(() => {
    const query = '*[_type == "home"]';

    client.fetch(query).then((data) => {
      setHome(data);
    });
  }, []);

  return (
    <>
      {home.map((item, index) => (
        <div key={index} className="app__header app__flex">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__header-info"
          >
            <div className="app__header-badge">
              <div className="badge-cmp app__flex">
                <span>👋</span>
                <div style={{ marginLeft: 20 }}>
                  <p className="p-text">Hello, I am</p>
                  <h1 className="head-text">{item.title}</h1>
                </div>
              </div>

              <div className="tag-cmp app__flex">
                <p className="p-text">Web Developer</p>
                <p className="p-text">Freelancer</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__header-img"
          >
            <img src={urlFor(item.imageurl)} alt="profile_bg" />
            <motion.img
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              src={images.circle}
              alt="profile_circle"
              className="overlay_circle"
            />
          </motion.div>

          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="app__header-circles"
          >
            {[urlFor(item.icon1url), urlFor(item.icon2url), urlFor(item.icon3url)].map((circle, i) => (
              <div className="circle-cmp app__flex" key={`circle-${i}`}>
                <img src={circle} alt="profile_bg" />
              </div>
            ))}
          </motion.div>
        </div>
      ))}
    </>
  );
};

export default AppWrap(Header, 'home');
