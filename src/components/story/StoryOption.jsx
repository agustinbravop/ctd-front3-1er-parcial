import React from 'react';

export default class StoryOption extends React.Component {
  
  render() {
    const {id, desc, onSelect} = this.props;

    return (
      <div className="opcion">
        <button className="botones" id={id} onClick={onSelect}>
          {id}
        </button>
        <h2>{desc}</h2>
      </div>
    )
  }
}