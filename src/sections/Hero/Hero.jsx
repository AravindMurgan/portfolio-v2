import React from 'react';
import classes from './hero.module.scss';
import { Link } from '../../Components';

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.container}>
        <h5 className={classes.intro}>Hello, Im</h5>
        <h1 className={classes.hero__name}>
          <span className={classes.emphasize}>Aravind</span>
          <span> Murugan</span>
        </h1>
        <h2 className={classes.info}>UI Developer</h2>
      </div>

      <div role='img' className={classes.waterMark}>
        DEV
      </div>

      <div className={classes.quickContact}>
        <Link to='mailto: mi.arvindmurugan@gmail.com' lone>
        mi.arvindmurugan@gmail.com
        </Link>
        <Link to='https://www.linkedin.com/in/aravindmurgan/' lone>
          linkedin@aravindmurugan
        </Link>
      </div>
    </section>
  );
}
