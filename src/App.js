import { useState } from "react";
import "./App.css";

function Card({ isDisplay, setIsDisplay }) {
  return (
    <div className="card">
      <button onClick={() => setIsDisplay(!isDisplay)} className="btn">
        點我
      </button>
    </div>
  );
}

function PopUp({ isDisplay }) {
  let className;
  if (isDisplay) {
    className = "show";
  } else {
    className = "hidden";
  }
  return (
    <div className={`pop-up ${className}`}>
      測試用測試用測試用測試用測試用測試用 測試用測試用測試用測試用測試用測試用
      測試用測試用測試用測試用測試用測試用 測試用測試用測試用測試用測試用測試用
      測試用測試用測試用測試用測試用測試用
    </div>
  );
}

function App() {
  const [isDisplay, setIsDisplay] = useState(false);
  return (
    <div className="App">
      <Card isDisplay={isDisplay} setIsDisplay={setIsDisplay} />
      <PopUp isDisplay={isDisplay} />
    </div>
  );
}

export default App;
