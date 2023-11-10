import { useState } from "react";

export const UppdateState2 = () => {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Chesse"] });
  };
  return (
    <div>
      <button onClick={handleClick}></button>
    </div>
  );
};

export default UppdateState2;
