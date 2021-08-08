import React, { Component } from "react";
// import { results } from "../api/dummydata";
import {getAllianceName} from "../helper"

// TODO: make the optimization better for filtering the alliances better. find away to search through the array once.
export default class CheckBox extends Component {
  render() {
    return (
      <div className="checkbox">
        <div className="secondary-font title">Filter By Alliances</div>
        {[...new Set(JSON.parse(localStorage["airlines"]).map((elem) => elem.alliance))]
          .filter((elem) => elem !== "none")
          .map((result) => (
            <label className="tertiary-font label" key={result}>
              <input
                type="checkbox"
                id={result}
                className="input"
                onChange={async (e) => {
                  // this function checks if a checkbox is checked and if it is
                  // it adds or removes it from the react state.
                  const isChecked = e.target.checked;
                  const id = e.target.id;
                  var data = {};
                  data[id] = getAllianceName(id);
                  var newState = { ...this.props.state };

                  if (isChecked) {
                    newState[id] = "name";
                    this.props.setState({ ...newState });
                  } else {
                    newState = { ...this.props.state };
                    delete newState[id];
                    await this.props.setState(newState);
                  }
                }}
              ></input>
              {getAllianceName(result)}
            </label>
          ))}
      </div>
    );
  }
}
