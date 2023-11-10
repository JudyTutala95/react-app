import { useState } from "react";

export const UpdateState3 = () => {
  const [cart, setcart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 1, title: "Product 1", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setcart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };
  return (
    <div>
      <button onClick={handleClick}></button>
    </div>
  );
};

export default UpdateState3;
