import { useState } from "react";
import React from "react";
import Card from "./jsx/Card";
import CheckBox from "./jsx/CheckBox";
import Header from "./jsx/Header";

import "./sass/Card.sass";
import "./sass/Grid.sass";
import "./sass/Flexbox.sass";
import "./sass/Fonts.sass";
import "./sass/Header.sass";
import "./sass/Refactor.sass";

function App() {
  // state
  const [alliances, setAlliances] = useState({});

  return (
    <div>
      <Header></Header>
      <div class="content">
        <div class="primary-font">Airlines</div>
      <CheckBox state={alliances} setState={setAlliances}></CheckBox>
      <Card state={alliances}></Card>
      </div>
    </div>
  );
}

export default App;
