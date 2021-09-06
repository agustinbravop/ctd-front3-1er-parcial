import React from 'react'

export default class StoryLog extends React.Component {
  
  state = {
    history: []
  }

  static getDerivedStateFromProps(props, state){  

    if(props.prevSelection !== "") {
      // prevSelection is added to the history
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
          {/*renders every selection in history except the last one (the newest) */}
          {this.state.history.slice(0, -1).map((el, i) => <li key={i}>{el}</li>)}
        </ul>
      </>
    )
  }
}