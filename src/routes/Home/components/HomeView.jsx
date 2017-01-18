import React, { PropTypes } from 'react';
import classes from './HomeView.scss';

export const HomeView = () => (
  <div className={classes.homeView}>
    home
  </div>
);

HomeView.propTypes = {
  foo: PropTypes.string,
};

export default HomeView;
