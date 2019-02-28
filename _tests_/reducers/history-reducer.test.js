import historyReducer from './../../src/reducers/history-reducer';
import c from '../../src/constants';


describe('historyReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(historyReducer({}, {type: null})).toEqual({});
  });

  test('Should record the square that got clicked', () => {
    expect(historyReducer({}, {type: c.REMEMBER_MOVE, squareValue: 1})).toEqual(1);
  });

})
