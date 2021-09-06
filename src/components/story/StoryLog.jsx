import React from 'react'

export default class StoryLog extends React.Component {
  
  state = {
    history: []
  }

  static getDerivedStateFromProps(prevProps, prevState){
    // prevSelection is added to the history
    if(prevProps.prevSelection !== "") {
      return {
        history:  [prevProps.prevSelection, ...prevState.history]
      }
    } else {
      return null
    }
  }

  render() {
    const { prevSelection } = this.props;

    return (
      <>
        <p>Selección anterior: {prevSelection}</p>
        <p>Historial de opciones elegidas:</p>
        <ul>
          {this.state.history.map((el, i) => <li key={i}>{el}</li>)}
        </ul>
      </>
    )
  }
}