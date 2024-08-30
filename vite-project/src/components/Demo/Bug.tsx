import { useState } from "react";

const Bug = () => {
  let [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleFix = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    console.log("Fixed");
  };

  return (
    <div>
      <ul>
        {bugs.map((bug, index) => (
          <li key={index}>
            {bug.title} {bug.fixed && "✔"}
          </li>
        ))}
      </ul>
      <button className="btn btn-primary" onClick={handleFix}>
        Fix
      </button>
    </div>
  );
};

export default Bug;
