import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Game from './Game'

class App extends React.Component {


  render(){
    return (
      <div>
        app works
        <Switch>
          <Game/>
        </Switch>
      </div>
    );
  }
}

App.propTypes = {

};

const mapStateToProps = state => {
  return {
    rememberMove: state.rememberMove
  };
};

export default App
