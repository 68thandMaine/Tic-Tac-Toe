import c from './../constants';

export default(state={}, action) =>{
  let newState;
  const { squareValue } = action;
  switch(action.type) {
  case c.REMEMBER_MOVE:
    newState = Object.assign({}, state, {squareValue});
    
    return action.squareValue;
  default:
    return state;
  }
};
