import { useState } from "react";
import "./style.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return <Accordion data={faqs} />;
}

function Accordion({ data }) {
  const [currOpen, setCurrOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          title={el.title}
          num={i}
          key={i}
          currOpen={currOpen}
          onOpen={setCurrOpen}
        >
          text={el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        title="Children Props"
        num={23}
        currOpen={currOpen}
        onOpen={setCurrOpen}
      >
        <p>Children Props</p>
        <ul>
          <li>children is a special prop</li>
          <li>automatically passed to every component</li>
          <li>that can be used to render JSX</li>
          <li>
            the content included between the opening and closing tags when
            invoking a component
          </li>
        </ul>
      </AccordionItem>
    </div>
  );
}
function AccordionItem({ title, num, currOpen, onOpen, children }) {
  const isOpen = num === currOpen;
  function handleToggle() {
    onOpen(isOpen ? null : num);
    // num === currOpen ? onOpen(null) : onOpen(num);
  }
  return (
    <div className={isOpen ? "item open" : "item"} onClick={handleToggle}>
      <p className="number">{num > 9 ? num + 1 : `0${num}`}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

// export default function App() {
//   return <Accordion data={faqs} />;
// }

// function Accordion({ data }) {
//   return (
//     <div className="accordion">
//       {data.map((el, i) => (
//         <AccordionItem title={el.title} text={el.text} num={i} key={i} />
//       ))}
//     </div>
//   );
// }
// function AccordionItem({ title, text, num }) {
//   const [isOpen, setIsOpen] = useState(false);
//   function handleToggle() {
//     setIsOpen((isOpen) => !isOpen);
//   }
//   return (
//     <div className={isOpen ? "item open" : "item"} onClick={handleToggle}>
//       <p className="number">{num > 9 ? num + 1 : `0${num}`}</p>
//       <p className="title">{title}</p>
//       <p className="icon">{isOpen ? "-" : "+"}</p>
//       {isOpen && <div className="content-box">{text}</div>}
//     </div>
//   );
// }
