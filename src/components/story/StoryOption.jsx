import React from 'react';

export default class StoryOption extends React.Component {
  
  render() {
    const {id, desc, onSelect} = this.props;

    return (
      <React.Fragment>
        <button id={id} onClick={onSelect}>
          {id}
        </button>
        <p>{desc}</p>
      </React.Fragment>
    )
  }
}