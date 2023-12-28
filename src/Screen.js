import { useState } from "react";
import logo from "./logo.svg";
import ResumeScreen from "./ResumeScreen";
// 16
const prices = [1.5, 2.75, 4.5, 7.25].reduce(function (prev, current) {
  return prev + current;
});
const message = ["Hello, ", "welcome", "to", "my", "class"].reduce(function (
  prev,
  current
) {
  return prev + current + "...";
});
 const cake = {
  words: "happy",
  color: "red"
 }
 // cake.words is the text that appears on the cake

function GalleryScreen() {
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  const [activeRow, setActiveRow] = useState(null);
  const [activeProduct, setActiveProduct] = useState();
  const GalleryList = [
    {
      name: "cakita",
      cost: 3.4,
      category: "misc",
      color: "red",
    },
    {
      name: "baseball hat",
      cost: 10.6,
      category: "apparel",
      color: "blue",
    },
    {
      name: "ps5",
      cost: 15.25,
      category: "electronics",
      color: "green",
    },
    {
      name: "xbox",
      cost: 15.25,
      category: "electronics",
      color: "fuchsia",
    },
  ];
  const lastIndex = GalleryList.length - 1;

  return (
    <div>
      {
      activeRow === null 
      ? 'No item selected'
      :<h1>{GalleryList[activeRow].name}</h1>
      }
      {console.log("activeProduct", activeProduct)}
      {activeProduct && (
        <h1
          style={{
            backgroundColor: backgroundColor,
          }}
          onMouseDown={() => {
            setBackgroundColor("grey");
          }}
          onMouseUp={function () {
            setBackgroundColor(activeProduct.color);
          }}
        >
          My item is {activeProduct.name}. The cost is ${activeProduct.cost}
        </h1>
      )}
      <h4>
        Total Cost: $
        {GalleryList.reduce(function (prevItem, currentItem) {
          return prevItem + currentItem.cost;
        }, 0)}
      </h4>
      <h4>
        Categories:&nbsp;
        {GalleryList.reduce(function (prevItem, currentItem, currentIndex) {
          console.log(currentIndex);
          if (lastIndex === currentIndex) {
            return prevItem + currentItem.category;
          }
          return prevItem + currentItem.category + ", ";
        }, "")}
      </h4>
      <div id="GalleryList">
        {GalleryList.map(function (x, index) {
          return (
            <button
              key={x.name}
              style={{ display: "block", width: "100%", cursor: "pointer" }}
              onClick={function () {
                setActiveRow(index);
                setActiveProduct(x);
                setBackgroundColor(x.color);
              }}
            >
              <h4>{x.name}</h4>
              <p>
                {x.cost}
                {index === activeRow ? "*" : null}
              </p>
            </button>
          );
        })}
      </div>
      {activeProduct ? (
        <h2>
          {activeProduct.name} {"-->"} ${activeProduct.cost}
        </h2>
      ) : null}
    </div>
  );
}
function Screen(prop) {
  if (prop.title === "home") {
    return (
      <div>
        <p>{prop.title}</p>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React thanks to richard
          </a>
        </header>
      </div>
    );
  }
  if (prop.title === "resume") {
    return <ResumeScreen></ResumeScreen>;
  }
  if (prop.title === "gallery") {
    return <GalleryScreen />;
  }
  if (prop.title === "contact") {
    return <h1>Contact Me</h1>;
  }
}

export default Screen;
