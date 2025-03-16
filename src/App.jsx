import { useState } from "react";
import "./App.css";
import Course from "./Course";

function getRandomCourse() {}

function App() {
  const [courser, setCourser] = useState([]);

  const handleClick = () => {};

  return (
    <>
      <button onClick={handleClick}>Kurs Ekle</button>
      <Course />
    </>
  );
}

export default App;
