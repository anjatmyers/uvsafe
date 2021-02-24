import React, { Component } from 'react'
import {connect} from 'react-redux';
import {increment} from '../actions/templateActions'

export class Classes extends Component {
    render() {
        return (
            <div>
                <h2>Classes</h2>
        <h3>{this.props.count}</h3>
                <button onClick={()=> this.props.increment(1)}>Click Me</button>
            </div>
        )
    }
}

// maps global state to a prop
// count is our prop: use this.props.count to access it
const mapStateToProps = (state) => {
    return{
        count: state.counter
    }
}

// increment is a pops: this.props.increment(n)
const mapDispatchToProps = (dispatch) => {
    return{
        increment: (n)=> dispatch(increment(n))
    }
}



// connect takes two functions:
// 1 for pulling down state
// 2 for updating state
export default connect(mapStateToProps, mapDispatchToProps)(Classes)
