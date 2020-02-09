
/**
 * Module dependencies.
 */

import './index.scss';
import React from 'react';

/**
 * `Footer`.
 */

const Footer = () => {

  return (
    <>
      made with
      <span role="img" aria-label="heart">💛</span>
      by itsnunolemos

      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.twitter.com/itsnunolemos/"
        >
          Twitter
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.medium.com/@itsnunolemos/"
        >
          Medium
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/nunorlemos/"
        >
          Linkedin
        </a>
      </div>
    </>
  );
};

/**
 * Export `Footer`.
 */

export default Footer;
