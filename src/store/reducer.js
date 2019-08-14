import * as actionTypes from './actions'

const initialState = {
    counter:0,
    results:[]
}

const reducer = (state=initialState,action) =>{
    switch(action.type)
    {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter : state.counter + 1
            }
        case  actionTypes.DECREMENT:
            return {
                ...state,
                counter : state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter : state.counter + action.val
            }
        case actionTypes.SUB:
            return {
                ...state,
                counter : state.counter - action.val
            }
        case actionTypes.ADD_RESULT:
            return {
                ...state,
                results:state.results.concat({val:state.counter,key:new Date()})
            }
        case actionTypes.DEL_RESULT:
            const newResult = state.results.filter(result=>result.key !== action.id )
            return {
                ...state,
                results:newResult
            }
        default:
            return state
    }

}

export default reducer