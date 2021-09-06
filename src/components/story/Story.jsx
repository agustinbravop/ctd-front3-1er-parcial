import React from "react";
import StoryLog from "./StoryLog";
import StoryOption from "./StoryOption";
import "../../index.css";
import data from "../data.json";

export default class Story extends React.Component {

  state = {
    count: 1,
    prevSelection: "",
    currentId: "1"
  }

  handleSelect = e => {
    // Matches id from data.json's id
    if(this.state.count > 4) {
      alert("Fin.");
    } 
    else {
      const currentId = this.state.count + 1 + e.target.id.toLowerCase();
      
      /* 
      console.log(e);
      console.log(e.target);
      console.log("Target id: " + e.target.id); 
      */
      this.setState({
        count: this.state.count + 1,
        prevSelection: e.target.id,
        currentId: currentId
      })
    }
  }

  render() {
    // Gets matching id object from data.json
    const d = data.find(el => el.id === this.state.currentId);
    /* 
    console.log(this.state);
    console.log(d); 
    */
    return (
      <>
        <p>{d.historia}</p>
        <div>
          <StoryOption id="A" desc={d.opciones.a} onSelect={this.handleSelect} />
          <StoryOption id="B" desc={d.opciones.b} onSelect={this.handleSelect} />
        </div>
        <div>
          <StoryLog prevSelection={this.state.prevSelection} />
        </div>
      </>
    )
  }
}