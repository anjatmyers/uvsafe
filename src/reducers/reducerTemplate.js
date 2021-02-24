
let initalState = {
    counter: 0
}

// purpose of reducer is to return a new global state
// reducer must be passed into store
const reducerTemplate = (state = initalState, action) => {
    
    switch(action.type){
        case "INCREMENT":
            return{
                ...state, 
                counter: state.counter + action.data
            }
        
        default: 
            return state;

    }

}

export default reducerTemplate
