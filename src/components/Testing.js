import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import increaseAction from '../actions/increaseAction';
// import decreaseAction from '../actions/decreaseAction';

const Testing = () => {

    const dispatch = useDispatch();

    const count = useSelector(state => state.count);

    

  return (
    <>
    <h1>Testing</h1>
    <h2>{count}</h2>

    {/* <button onClick={()=> dispatch(increaseAction())}>Increase</button>
    <button onClick={()=> dispatch(decreaseAction())}>Decrease</button> */}
    </>
  )
};

export default Testing
