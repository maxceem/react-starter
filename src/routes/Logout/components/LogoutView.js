import React, { PropTypes } from 'react';

export class LogoutView extends React.Component {
  componentWillMount() {
    this.props.handleLogout();
  }

  render() {
    return null;
  }
}

LogoutView.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default LogoutView;
