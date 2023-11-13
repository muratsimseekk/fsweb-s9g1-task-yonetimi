import React, { useState } from "react";

const Task = ({ taskObj, onComplete }) => {
  const [tamam, setTamam] = useState("Tamamlandı");

  function handleCompleteClick() {
    // onComplete(taskObj.id);
    setTamam("Yapıldı");
  }

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && <button onClick={handleCompleteClick}>{tamam} </button>}
    </div>
  );
};

export default Task;
