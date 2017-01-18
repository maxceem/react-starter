import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import Test from 'components/Test';
import styles from './HomeView.scss';

export const HomeView = () => (
  <div styleName="home-view">
    <Test />
  </div>
);

HomeView.propTypes = {
  foo: PropTypes.string,
};

export default CSSModules(HomeView, styles);
