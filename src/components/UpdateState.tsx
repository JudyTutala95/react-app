import { useState } from "react";

export const UpdateState = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
  };
  return (
    <div>
      <button onClick={handleClick}></button>
    </div>
  );
};

export default UpdateState;
