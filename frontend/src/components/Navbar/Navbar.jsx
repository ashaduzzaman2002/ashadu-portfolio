import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss';
import { urlFor, client } from '../../client';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [navbar, setNavbar] = useState([]);

  useEffect(() => {
    const query = '*[_type == "navbar"]';

    client.fetch(query).then((data) => {
      setNavbar(data);
    });
  }, []);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {
          navbar.map((item, index) => (
            <img key={index} src={urlFor(item.logo)} alt="logo" />
          ))
      }
      </div>
      <ul className="app__navbar-links">
        {['home', 'skills', 'work', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [200, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'skills', 'work', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
