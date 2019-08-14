import * as actionTypes from '../actions'

const initialState = {
    results:[]
}

const reducer = (state=initialState,action) =>{
    switch(action.type)
    {
        case actionTypes.ADD_RESULT:
            return {
                ...state,
                results:state.results.concat({val:action.counter,key:new Date()})
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