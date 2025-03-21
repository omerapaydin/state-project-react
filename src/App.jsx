import { useState } from "react";
import "./App.css";
import Course from "./Course";

function getRandomCourse() {
  const courseArray = ["Angular", "Bootstrap", "Ccsharp", "Kompleweb"];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}

function App() {
  const [courses, setCourser] = useState([]);

  const handleClick = () => {
    setCourser([...courses, getRandomCourse()]);
  };

  return (
    <div className="App">
      <button className="appButton" onClick={handleClick}>
        Kurs Ekle
      </button>
      <div className="courseList">
        {courses.map((course, index) => {
          return <Course key={index} courseName={course} />;
        })}
      </div>
    </div>
  );
}

export default App;
