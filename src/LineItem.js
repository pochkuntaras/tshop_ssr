import React from 'react';
import PropTypes from 'prop-types';

const LineItem = ({id, name, price, deleteFunc}) => (
  <div className="line-item">
    <span className="line-item__id">{id}</span>
    &nbsp;|&nbsp;
    <span className="line-item__price">{price} USD</span>
    &nbsp;|&nbsp;
    <a href="#" title={`Delete ${name}`} onClick={deleteFunc}>
      Delete
    </a>
    &nbsp;|&nbsp;
    <span className="line-item__name">{name}</span>
  </div>
);

LineItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  deleteFunc: PropTypes.func.isRequired
};

export default LineItem;
