import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { Slide } from 'react-slideshow-image';

import JueJin from '../JueJin';

import { parseImgur } from '../../api/images';

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

const Slideshow = ({ slideImage1, slideImage2, slideImage3 }) => (
  <Slide {...properties}>
    <div className="each-slide">
      <div style={{ backgroundImage: `url(${slideImage1})` }}>
        <span>Slide 1</span>
      </div>
    </div>
    <div className="each-slide">
      <div style={{ backgroundImage: `url(${slideImage2})` }}>
        <span>Slide 2</span>
      </div>
    </div>
    <div className="each-slide">
      <div style={{ backgroundImage: `url(${slideImage3})` }}>
        <span>Slide 3</span>
      </div>
    </div>
  </Slide>
);

const Header = ({
  img,
  slideImage1,
  slideImage2,
  slideImage3,
  title,
  subTitle,
  authorImage,
  authorName,
  jueJinPostLink,
  jueJinLikeIconLink,
}) => (
  <div className="col-12 header" style={{ padding: 0 }} id="header">
    <div className="slide-container">
      <Slideshow
        slideImage1={`${slideImage1}`}
        slideImage2={`${slideImage2}`}
        slideImage3={`${slideImage3}`}
      />
    </div>
  </div>
);

Header.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  authorName: PropTypes.string,
  authorImage: PropTypes.string,
  jueJinPostLink: PropTypes.string,
  jueJinLikeIconLink: PropTypes.string,
};

Header.defaultProps = {
  title: '',
  subTitle: '',
  authorName: '',
  authorImage: '',
  jueJinPostLink: '',
  jueJinLikeIconLink: '',
};

export default Header;
