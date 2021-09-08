import { Component } from "react";
import StoryLog from "./StoryLog";
import StoryOption from "./StoryOption";
import data from "../data.json";

export default class Story extends Component {

  state = {
    count: 1,
    prevSelection: "",
    currentId: "1"
  }

  handleSelect = e => {
    if(this.state.count > 4) {
      // count represents the progress into the story.
      // At 4, the story ends.
      alert("Fin.");
    } 
    else {
      // currentId matches data.json's next id
      const currentId = this.state.count + 1 + e.target.id.toLowerCase();

      this.setState({
        count: this.state.count + 1,
        prevSelection: e.target.id,
        currentId: currentId
      })
    }
  }

  render() {
    // Gets object from data.json that matches id
    const d = data.find(el => el.id === this.state.currentId);

    return (
      <div className="layout">
        <h1 className="historia">{d.historia}</h1>

        <div className="opciones">
          <StoryOption id="A" desc={d.opciones.a} onSelect={this.handleSelect} />
          <StoryOption id="B" desc={d.opciones.b} onSelect={this.handleSelect} />
        </div>

        <div className="recordatorio">
          <StoryLog prevSelection={this.state.prevSelection} />
        </div>
      </div>
    )
  }
}