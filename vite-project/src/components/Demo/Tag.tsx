import { useState } from "react";

const Tag = () => {
  const [tags, setTags] = useState(["happy", "Cheerful", "Interesting"]);
  const handleClick = () => {
    // Add
    // setTags([...tags, "Exciting"]);
    // Remove
    // setTags(tags.filter((tag) => tag !== "happy"));
    // Update
    setTags(tags.map((tag) => (tag === "happy" ? "Happiness" : tag)));
  };
  return (
    <div>
      <ul className="list-group">
        {tags.map((tag, index) => (
          <li className="list-group-item" key={index}>
            {tag}
          </li>
        ))}
      </ul>
      <button className="btn btn-primary" onClick={handleClick}>
        Update
      </button>
    </div>
  );
};

export default Tag;
