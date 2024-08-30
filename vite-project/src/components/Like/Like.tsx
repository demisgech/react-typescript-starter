import { useState } from "react";

interface LikeProps {
  onClick: () => void;
}

const Like = ({ onClick }: LikeProps) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  return (
    <span
      className={
        status === true
          ? "btn btn-danger badge badge-success"
          : "btn btn-primary badge bage-danger"
      }
      onClick={toggle}
    >
      Like
    </span>
  );
};

export default Like;
