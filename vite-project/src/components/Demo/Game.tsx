import { useState } from "react";

function Game() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });
  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
    // console.log("Clicked!");
  };
  return (
    <>
      <div>Name: {game.player.name}</div>
      <button className="btn btn-primary" onClick={handleClick}>
        Change Name
      </button>
    </>
  );
}

export default Game;
