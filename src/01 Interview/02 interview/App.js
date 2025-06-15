import { useState } from "react";

import Box from "./Box";
import Footer from "./Footer";
import Header from "./Header";
import Button from "./Button";
import TotalAmount from "./TotalAmount";

import "./index.css";

function App() {
  const [isOpen, setIsOpen] = useState(0);

  const data = [
    {
      unit: 1,
      DiscountPercentage: 10,
      currentPrice: 10,
      previousPrice: 24,
      checked: true,
      points: [
        {
          size: ["XL", "XXL"],
          colour: ["Black", "Blue"],
        },
        {
          size: ["XL", "XXL"],
          colour: ["White", "Yellow"],
        },
      ],
    },
    {
      unit: 2,
      DiscountPercentage: 20,
      currentPrice: 80,
      previousPrice: 24,
      points: [
        {
          size: ["XL", "XXL"],
          colour: ["Black", "Blue"],
        },
        {
          size: ["XL", "XXL"],
          colour: ["White", "Yellow"],
        },
      ],
    },
    {
      unit: 3,
      DiscountPercentage: 30,
      currentPrice: 20.0,
      previousPrice: 24.0,
      points: [
        {
          size: ["XL", "XXL"],
          colour: ["Black", "Blue"],
        },
        {
          size: ["XL", "XXL"],
          colour: ["White", "Yellow"],
        },
      ],
    },
  ];

  function handleOpen(unit) {
    setIsOpen(unit);
  }

  return (
    <section id="box_section">
      <div className="box_container">
        <Header>YAY! It’s BOGO</Header>

        <main className="flex">
          {data.map((item) => (
            <Box
              item={item}
              key={item.unit}
              handleOpen={handleOpen}
              isOpen={isOpen === item.unit}
            />
          ))}

          <TotalAmount>
            <p>Free Delivery</p>
            <p>Total: $18.00 USD</p>
          </TotalAmount>

          <Button>Add to Cart</Button>
        </main>

        <Footer>@ Powered by Pumper</Footer>
      </div>
    </section>
  );
}

export default App;
