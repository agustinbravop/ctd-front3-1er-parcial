import React from 'react'

export default class StoryLog extends React.Component {
  
  state = {
    history: []
  }

  static getDerivedStateFromProps(props, state){
    // prevSelection is added to the history

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

    return (
      <>
        <h3>Selección anterior: {prevSelection}</h3>
        <h4>Historial de opciones elegidas:</h4>
        <ul>
          {this.state.history.slice(0, -1).map((el, i) => <li key={i}>{el}</li>)}
        </ul>
      </>
    )
  }
}