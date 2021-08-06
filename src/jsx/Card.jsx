import React, { Component } from "react";
import { getAllianceName, getFilteredAirlines } from "../helper";

export default class Card extends Component {
  render() {
    return (
      <div className="css-grid">
        {getFilteredAirlines({ ...this.props.state }, JSON.parse(localStorage["airlines"])).map((elem) => (
          <div className="card grid-item css-flexbox" key={elem.name+Math.random()}>
            <img
              src={"https://www.kayak.com" + elem.logoURL}
              alt={elem.name + "/'s Logo"}
            />

            <div className="airline-information">
              <div className="secondary-font">{elem.name}</div>
              <div className="hidden tertiary-font">
                {elem.alliance !== "none" ? <div>{getAllianceName(elem.alliance)}</div> : null}
                <div>{elem.phone}</div>
                <div className="quaternary-font">{elem.site}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
