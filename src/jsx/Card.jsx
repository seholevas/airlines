import React, { Component } from "react";
import { getAllianceName, getFilteredAirlines } from "../helper";
// class that creates cards
export default class Card extends Component {
  render() {
    return (
      <div className="css-grid">
        {
          // maps all the airlines from the states that are selected and returns them in the card format
        getFilteredAirlines({ ...this.props.state }, JSON.parse(localStorage["airlines"])).map((elem) => (
          <div className="card grid-item css-flexbox" key={elem.name+Math.random()}>
            <img
              src={"https://www.kayak.com" + elem.logoURL}
              alt={elem.name + "/'s Logo"}
            />
            <div className="airline-information">
              <div className="secondary-font">{elem.name}</div>
              {/* this is all the hidden information that is seen when a user hovers over a card */}
              <div className="hidden tertiary-font">
                {/* if the airline does not have an alliance, do not create a div for the alliance */}
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
