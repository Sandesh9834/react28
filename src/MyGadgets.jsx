import { useState } from "react";

export const MyGadgets = ({ productList }) => {
  const [btn, setBtn] = useState(true);

  return (
    <div>
      <h2>Gadgets</h2>
      <ol>
        {productList.map((product) => (
          <li
            key={product.id}
            style={{
              listStyle: "none",
              border: "2px solid black",
              padding: "1px",
              margin: "5px",
              backgroundColor: !btn && product.price > 50000 ? "lightgreen" : ""
            }}
          >
            <p>
              <b>Name</b>: <i>{product.name}</i>,
            </p>
            <p>
              <b>Description</b>: <i>{product.description}</i>,
            </p>
            <p>
              <b>Price</b> : <i>Rs. {product.price}</i>
            </p>
          </li>
        ))}
      </ol>
      <button onClick={() => setBtn(!btn)}>
        {btn ? "Highlight Expensive Gadget" : "Reset"}
      </button>
    </div>
  );
};
