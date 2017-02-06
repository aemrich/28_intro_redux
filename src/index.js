import React from 'react'
import ReactDOM from 'react-dom'

import  { createStore }  from 'redux'
import countReducer from './countReducer'
import notesReducer from './notesReducer'

const store = createStore( countReducer )
const noteStore = createStore( notesReducer )

noteStore.dispatch({type: 'ADD_NOTE', note: 'Buy Milk'})
noteStore.dispatch({type: 'ADD_NOTE', note: 'DONT Buy Milk'})

// DEMO PURPOSES ONLY - WE'RE SUBSCRIBING TO AN EVENT RIGHT AWAY
store.subscribe(function(){
  console.log('Beef')
})

store.subscribe(() => console.log('Yay!'))

function App (props) {
  return (
    <div>
    <h1>My Cool App!</h1>
    < Counter store={props.store} />
    < Note store={props.noteStore} />
  </div>)
}

class Note extends React.Component {

  componentDidMount(){
    this.props.store.subscribe( this.forceUpdate.bind(this) )
  }

  noteSubmit (event) {
    event.preventDefault()
    this.props.store.dispatch({type: 'ADD_NOTE', note: event.target[0].value})
  }

  render() {
    const notes = this.props.store.getState().map((note, index) => <h1>{note}</h1>)
    return (
      <div>
        <form onSubmit={this.noteSubmit.bind(this)}>
          <input type = 'text'/>
          <input type = 'submit'/>
        </form>
        {notes}
      </div>
    )
  }
}




class Counter extends React.Component {


  componentDidMount(){
    console.log("Component Mounted!!!")
    this.props.store.subscribe( this.forceUpdate.bind(this) )
  }

  handleIncrement(){
    this.props.store.dispatch({type: 'INCREMENT_COUNT' })
    console.log(this.props.store.getState())
  }

  handleDecrement(){
    this.props.store.dispatch({type: 'DECREMENT_COUNT' })
    console.log(this.props.store.getState())
  }

  handleReset(){
    this.props.store.dispatch({type: 'RESET_COUNT' })
    console.log(this.props.store.getState())
  }


  render(){
    return (
      <div>
        <h1>{ this.props.store.getState() }</h1>
        <button onClick={this.handleIncrement.bind(this)}>Increment Count</button>
        <button onClick={this.handleDecrement.bind(this)}>Decrement Count</button>
        <button onClick={this.handleReset.bind(this)}>Reset Count</button>
      </div>
    )
  }
}

ReactDOM.render(< App store={store} noteStore={noteStore} />, document.getElementById('container'))
