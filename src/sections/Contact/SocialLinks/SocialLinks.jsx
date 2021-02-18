import React from 'react';
import classes from './social.module.scss';

export default function SocialLinks() {
  return (
    <div className={classes.social}>
      <a href='mailto: mi.arvindmurugan@gmail.com' className='icon'>
        &#xe90c;
      </a>
      <a href='https://github.com/AravindMurgan' className='icon'>
        &#xe908;
      </a>
      <a href='https://www.linkedin.com/in/aravindmurgan/' className='icon'>
        &#xe907;
      </a>
    </div>
  );
}
