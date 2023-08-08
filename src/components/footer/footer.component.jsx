import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './footer.styles.scss';

const Footer = () => (
  <div className='footer'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <span>from</span>
    <a className='nolancode' href='http://www.nolancode.com'>
      Nolancode
    </a>
    <span> - {new Date().getFullYear()}</span>
  </div>
);

export default Footer;
