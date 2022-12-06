import React from "react";
import logo from "./logo.svg";
import "./App.css";

const list = [
  {
    id: "1",
    name: "Android",
  },
  {
    id: "2",
    name: "Java",
  },
  {
    id: "3",
    name: "Kotlin",
  },
  {
    id: "4",
    name: "Javascript",
  },
  {
    id: "5",
    name: "Typescript",
  },
  {
    id: "6",
    name: "React Native",
  },
  {
    id: "7",
    name: "Design Pattern",
  },
  {
    id: "8",
    name: "Data Structures",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {list.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <p>Welcome Nehal</p>
      </header>
    </div>
  );
}

export default App;
