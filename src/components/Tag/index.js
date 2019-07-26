import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ name, count }) => (
  <div className="seperator">
    <a href={`/tag/${name}`} className="header-tag">
      {name}
      &nbsp;
      {count}
      <span> &#9679; </span>
    </a>
  </div>
);

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Tag.defaultProps = {
  count: '',
};

export default Tag;
