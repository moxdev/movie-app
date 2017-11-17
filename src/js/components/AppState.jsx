import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AppState extends Component {
  state = {
    header: {
      text: 'Somewhere In Time'
    }
  };

  setAppState = (newState, callback) => {
    this.setState(newState, callback);
  };

  render() {
    return (
      <div className="AppState">
        {React.Children.map(this.props.children, child => {
          return React.cloneElement(child, {
            appState: this.state,
            setAppState: this.setAppState
          });
        })}
      </div>
    );
  }
}

export default AppState;

AppState.propTypes = {
  children: PropTypes.node
};
