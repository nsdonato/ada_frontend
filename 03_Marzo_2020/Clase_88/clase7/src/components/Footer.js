import React from 'react';
import Button from './Button';

const Footer = () => {
  return(
    <div className="footer">
    <Button mensaje="registrate" estilo={"footerButton"}/>
      <div className="footer_icons">
        <i className="fa fa-facebook"></i>
        <i className="fa fa-google-plus"></i>
        <i className="fa fa-twitter"></i>
        <i className="fa fa-dribbble"></i>
      </div>
      <p>© 2020 | All Rights Reserved</p>
  </div>
  )
};

export default Footer;
