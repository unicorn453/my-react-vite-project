import React from "react";
import Counter from "../components/Counter";

export const cardBody = [
  {
    id: 1,
    name: "Milk",
    purchased: true,
  },
  {
    id: 2,
    name: "Eggs",
    purchased: true,
  },
  {
    id: 3,
    name: "Cheese",
    purchased: false,
  },
  {
    id: 4,
    name: "Cake Mix",
    purchased: false,
  },
  {
    id: 5,
    name: "Carrots",
    purchased: false,
  },
  {
    id: 6,
    name: "Juice",
    purchased: true,
  },
];
function App() {
  return <Counter />;
}

export default App;
