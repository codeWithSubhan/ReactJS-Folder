import "./index.css";
import Img1 from "./pizzas/focaccia.jpg";
import Img2 from "./pizzas/funghi.jpg";
import Img3 from "./pizzas/margherita.jpg";
import Img4 from "./pizzas/prosciutto.jpg";
import Img5 from "./pizzas/salamino.jpg";
import Img6 from "./pizzas/spinaci.jpg";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: Img1,
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: Img2,
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: Img3,
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: Img4,
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: Img5,
    soldOut: false,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: Img6,
    soldOut: true,
  },
];

export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizza={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working our menu :)</p>
      )}
    </main>
  );
}

function Pizza({ pizza: { photoName, name, ingredients, price, soldOut } }) {
  // console.log(photoName);
  // if (soldOut) return null;
  return (
    <li className={`${!soldOut ? "pizza" : "pizza sold-out"}`}>
      <img src={photoName} alt={photoName} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "Not Aailable 😢" : price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 until {closeHour}:00. Come visit us or
        order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";

// const pizzaData = [
//   {
//     name: "Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName: "pizzas/focaccia.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Margherita",
//     ingredients: "Tomato and mozarella",
//     price: 10,
//     photoName: "pizzas/margherita.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     photoName: "pizzas/spinaci.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Funghi",
//     ingredients: "Tomato, mozarella, mushrooms, and onion",
//     price: 12,
//     photoName: "pizzas/funghi.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Salamino",
//     ingredients: "Tomato, mozarella, and pepperoni",
//     price: 15,
//     photoName: "pizzas/salamino.jpg",
//     soldOut: true,
//   },
//   {
//     name: "Pizza Prosciutto",
//     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//     price: 18,
//     photoName: "pizzas/prosciutto.jpg",
//     soldOut: false,
//   },
// ];

// function App() {
//   return (
//     <div className="container">
//       <Header />
//       <Menu />
//       <Footer />
//     </div>
//   );
// }

// function Header() {
//   // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
//   const style = {};

//   return (
//     <header className="header">
//       <h1 style={style}>Fast React Pizza Co.</h1>
//     </header>
//   );
// }

// function Menu() {
//   const pizzas = pizzaData;
//   // const pizzas = [];
//   const numPizzas = pizzas.length;

//   return (
//     <main className="menu">
//       <h2>Our menu</h2>

//       {numPizzas > 0 ? (
//         <>
//           <p>
//             Authentic Italian cuisine. 6 creative dishes to choose from. All
//             from our stone oven, all organic, all delicious.
//           </p>

//           <ul className="pizzas">
//             {pizzas.map((pizza) => (
//               <Pizza pizzaObj={pizza} key={pizza.name} />
//             ))}
//           </ul>
//         </>
//       ) : (
//         <p>We're still working on our menu. Please come back later :)</p>
//       )}

//       {/* <Pizza
//         name="Pizza Spinaci"
//         ingredients="Tomato, mozarella, spinach, and ricotta cheese"
//         photoName="pizzas/spinaci.jpg"
//         price={10}
//       />
//       <Pizza
//         name="Pizza Funghi"
//         ingredients="Tomato, mushrooms"
//         price={12}
//         photoName="pizzas/funghi.jpg"
//       /> */}
//     </main>
//   );
// }

// function Pizza({ pizzaObj }) {
//   console.log(pizzaObj);

//   // if (pizzaObj.soldOut) return null;

//   return (
//     <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
//       <img src={pizzaObj.photoName} alt={pizzaObj.name} />
//       <div>
//         <h3>{pizzaObj.name}</h3>
//         <p>{pizzaObj.ingredients}</p>

//         {/* {pizzaObj.soldOut ? (
//           <span>SOLD OUT</span>
//         ) : (
//           <span>{pizzaObj.price}</span>
//         )} */}

//         <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
//       </div>
//     </li>
//   );
// }

// function Footer() {
//   const hour = new Date().getHours();
//   const openHour = 12;
//   const closeHour = 22;
//   const isOpen = hour >= openHour && hour <= closeHour;
//   console.log(isOpen);

//   // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
//   // else alert("Sorry we're closed");

//   // if (!isOpen) return <p>CLOSED</p>;

//   return (
//     <footer className="footer">
//       {isOpen ? (
//         <Order closeHour={closeHour} openHour={openHour} />
//       ) : (
//         <p>
//           We're happy to welcome you between {openHour}:00 and {closeHour}:00.
//         </p>
//       )}
//     </footer>
//   );

//   // return React.createElement("footer", null, "We're currently open!");
// }

// function Order({ closeHour, openHour }) {
//   return (
//     <div className="order">
//       <p>
//         We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
//         online.
//       </p>
//       <button className="btn">Order</button>
//     </div>
//   );
// }

// // React v18
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // React before 18
// // ReactDOM.render(<App />, document.getElementById("root"));
