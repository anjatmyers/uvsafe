import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {increment} from '../actions/templateActions';
import {DivSC, Paper} from './Styles';

const Hooks = () => {

    const count = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return (
        <body>
            <div className="col-5 ml-5">
            <h3>Safe exposure level for skin tone?</h3>
            <div><img className="skintone" src="images/skintonescale.png"></img></div>
            </div>

            <h1>I am hooks</h1>
            <h2>{count}</h2>
            <button onClick={()=> dispatch(increment(2))}>Click Me</button>
            <h1>I am hooks</h1>
            <h2>{count}</h2>
            <button onClick={()=> dispatch(increment(2))}>Click Me</button>
            <h1>I am hooks</h1>
            <h2>{count}</h2>
            <button onClick={()=> dispatch(increment(2))}>Click Me</button>

            {/* <DivSC bgc="red">I am a styled div</DivSC>
            <DivSC bgc="">I am a styled div</DivSC>
            <Paper>this is paper div</Paper>
        */}
        </body>
    )
}

export default Hooks
