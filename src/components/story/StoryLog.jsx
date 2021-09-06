import React from 'react'

export default class StoryLog extends React.Component {
  
  state = {
    history: []
  }

  static getDerivedStateFromProps(props, state){
    // prevSelection is added to the history
    console.log("getDerivedStateFromProps: ")
    console.log(props)
    console.log(state)

    if(props.prevSelection !== "") {
      return {
        history:  [...state.history, props.prevSelection]
      }
    } else {
      return null;
    }
  }

  render() {
    const { prevSelection } = this.props;
    console.log("render: ");
    /*
    console.log(this.props)
    console.log(this.state)
    */

    return (
      <>
        <p>Selección anterior: {prevSelection}</p>
        <p>Historial de opciones elegidas:</p>
        <ul>
          {this.state.history.slice(0, -1).map((el, i) => <li key={i}>{el}</li>)}
        </ul>
      </>
    )
  }
}