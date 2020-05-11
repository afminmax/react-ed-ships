import React from "react";
import Entry from "../components/Entry";
import emojipedia from "../emojipedia";

function createCard(emoji) {
  return (
    <Entry
      id={emoji.id}
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {/* <Entry /> */}
        {emojipedia.map(createCard)}
      </dl>
    </div>
  );
}

export default App;
