//Build a React component called MyGadgets that receives an array of products as a prop. Render each product's name, description, and price as an ordered list. Create a button below all the listings which says “Highlight Expensive Gadget” and on click of the button add a lightgreen backgroundColor to the items which has a price more than 50000.

import { products } from "./data";
import { MyGadgets } from "./MyGadgets";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <MyGadgets productList={products} />
    </div>
  );
}
