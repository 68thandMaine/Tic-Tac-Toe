import React from 'react';
import './../../styles.css';
import PropTypes from 'prop-types';
import c from './../constants';
import {connect} from 'react-redux';

class Square extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: null,
    }
  }

  render() {
    return (
      <button 
      className='square' 
      onClick={() => this.setState({value: 'x'})}
      >
        {this.state.value}
      </button>
    );
  }

}

export default connect()(Square);
