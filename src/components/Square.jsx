import React from 'react';
import './../../styles.css';
import PropTypes from 'prop-types';
import c from './../constants';
import {connect} from 'react-redux';

 function Square(props){

  
    return (
      <button className='square' 
      onClick={props.onClick}>
        {props.value}
      </button>
    );
  
}

export default connect()(Square);
