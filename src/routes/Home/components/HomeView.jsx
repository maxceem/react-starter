import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './HomeView.scss';

export const HomeView = () => (
  <div styleName="home-view">
    HomeView
  </div>
);

HomeView.propTypes = {
  foo: PropTypes.string,
};

export default CSSModules(HomeView, styles);
