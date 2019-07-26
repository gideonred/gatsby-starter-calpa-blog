import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { Slide } from 'react-slideshow-image';
import Tag from '../Tag';
import slide from 'react-slideshow-image/lib/components/slideshow/slide';

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

const Slideshow = ({ slideImage1, slideImage2, slideImage3, slidecaption1, slidecaption2, slidecaption3 }) => (
  <Slide {...properties}>
    <div className="each-slide">
      <div style={{ backgroundImage: `url(${slideImage1})` }}>
        <span>{slidecaption1}</span>
      </div>
    </div>
    <div className="each-slide">
      <div style={{ backgroundImage: `url(${slideImage2})` }}>
        <span>
          { slidecaption2 }
        </span>
      </div>
    </div>
    <div className="each-slide">
      <div style={{ backgroundImage: `url(${slideImage3})` }}>
        <span>{slidecaption3}</span>
      </div>
    </div>
  </Slide>
);

const Header = ({
  img,
  slideImage1,
  slideImage2,
  slideImage3,
  slidecaption1,
  slidecaption2,
  slidecaption3,
  title,
  subTitle,
  authorImage,
  authorName,
  jueJinPostLink,
  jueJinLikeIconLink,
  tags = [],
}) => (
  <div className="col-12 header" style={{ padding: 0 }} id="header">
    <div className="slide-container">
      <Slideshow
        slideImage1={`${slideImage1}`}
        slideImage2={`${slideImage2}`}
        slideImage3={`${slideImage3}`}
        slidecaption1={`${slidecaption1}`}
        slidecaption2={`${slidecaption2}`}
        slidecaption3={`${slidecaption3}`}
      />
    </div>
    <div className="title">
      { title }
    </div>
    <div className="stats">
      {tags.map(name => (
        <Tag name={name} key={name} />
      ))}
      
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
  tags: PropTypes.arrayOf(PropTypes.string),
};

Header.defaultProps = {
  title: '',
  subTitle: '',
  authorName: '',
  authorImage: '',
  jueJinPostLink: '',
  jueJinLikeIconLink: '',
  tags: [],
};

export default Header;
