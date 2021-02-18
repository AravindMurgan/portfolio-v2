import React from 'react';
import classes from './footer.module.scss';

import SocialLinks from '../Contact/SocialLinks';

export default function Footer() {
  return (
    <div className={classes.footer}>
      <div>
        <SocialLinks />
      </div>
      <span className={classes.colorize}>Copyright-</span><span className={classes.colorize}>2021 Aravind Murugan</span> <br />
      All Right Reserved
    </div>
  );
}
