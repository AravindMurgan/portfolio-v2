import React from 'react';
import classes from './about.module.scss';
import Fade from 'react-reveal/Fade';

import { KrishSmall, KrishMedium, KrishLarge } from '../../images/Krish';
import Skills from './Skills';
import { Link } from '../../Components';
import SocialLinks from '../Contact/SocialLinks';

export default function About() {
  return (
    <section className={classes.about} id='about'>
      <div className={classes.container}>
        <h3 className={classes.heading}>About me</h3>
        <Fade bottom distance={'4rem'}>
          <div className={classes.about__content}>
            <div className={classes.about__text}>
              <p className={classes.description}>
                <span role='img' aria-label='wave emoji'>
                  👋
                </span>{' '}
                Hi Im Aravind
              </p>
              <p className={classes.description}>
                A passionate ui developer who loves to build breathtaking UI{' '}
                <span role='img' aria-label='code emoji'>
                  👨🏼‍💻
                </span>
                . A Full Stack Developer,2 years experienced at building responsive websites
                  with maintainable, reusable and clean code using latest technology.{' '}

              </p>
              <p className={classes.description}>
              Feel free to connect with me! Let's talk about web dev, tech, sports, photography, video games, or how I can be of help to your team or business!
               I'd love to get to know more developers and expand my network.
              </p>
            </div>

           
          </div>

          <Skills />
        </Fade>

        <Fade bottom>
          <div className={classes.socialLinks}>
            <SocialLinks />
          </div>
        </Fade>
      </div>
    </section>
  );
}
