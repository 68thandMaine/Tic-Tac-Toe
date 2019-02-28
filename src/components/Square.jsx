import React from 'react';
import './../../styles.css';
import PropTypes from 'prop-types';
import c from './../constants';
import { connect } from 'react-redux';



class Square extends React.Component{

  componentDidMount(){
    this.handleRememberingMove()
  }

 handleRememberingMove(squareValue){
    console.log("id " + this.props.id)
    const { dispatch } = this.props;
    const newValue = 'x';
    const action = {
      type: c.REMEMBER_MOVE,
      squareValue: newValue
    };
    console.log("handleRememberingMove | " + action)
    dispatch(action);
  }

  render(){
    return (
      <button className='square' onClick={() => {this.handleRememberingMove(this.props.value);}}>
        {this.props.value}
      </button>
    );
  }

  }


export default connect()(Square)
