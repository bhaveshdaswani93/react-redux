import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'


import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrmentCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter}  />
                <button onClick={()=>this.props.storeResult(this.props.ctr)}> Save Result </button>
                <ol>
                    {this.props.results.map(result=>{return <li key={result.key} onClick={()=>this.props.deleteResult(result.key)} >{result.val}</li>})}
                </ol>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        results:state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter : () => { return dispatch({type:actionTypes.INCREMENT}) },
        onDecrmentCounter : () => { return dispatch({type:actionTypes.DECREMENT}) },
        onAddCounter : () => { return dispatch({type:actionTypes.ADD,val:5}) },
        onSubCounter : () => { return dispatch({type:actionTypes.SUB,val:5}) },
        storeResult : (counter) => { return dispatch({type:actionTypes.ADD_RESULT,counter:counter}) },
        deleteResult: (id) => { return dispatch({type:actionTypes.DEL_RESULT,id:id}) }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Counter);