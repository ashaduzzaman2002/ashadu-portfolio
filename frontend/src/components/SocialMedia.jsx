import React, { useState, useEffect } from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';

import { client } from '../client';

const SocialMedia = () => {
  const [social, setSocial] = useState([]);

  useEffect(() => {
    const query = '*[_type == "social"]';

    client.fetch(query).then((data) => {
      setSocial(data);
    });
  }, []);

  let links = {
    git: '',
    fb: '',
    insta: '',
  };

  social.map((item) => {
    links = {
      git: item.git,
      fb: item.fb,
      insta: item.insta,
    };
    return links;
  });

  return (
    <div className="app__social">
      <div>
        <a style={{ display: 'flex' }} href={links.git ? links.git : 'https://github.com/ashaduzzaman2002'} rel="noreferrer" target="_blank">
          <AiFillGithub />
        </a>
      </div>
      <div>
        <a style={{ display: 'flex' }} href={links.fb ? links.fb : 'https://www.facebook.com/ashadu.zaman.902'} rel="noreferrer" target="_blank">
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a style={{ display: 'flex' }} href={links.insta ? links.insta : 'https://www.instagram.com/ashaduz404/'} rel="noreferrer" target="_blank">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
