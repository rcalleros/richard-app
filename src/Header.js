import { useState } from "react";

const headerStyle = {
  backgroundColor: "#282c34",
};

const activeButtonStyle = {
  border: 0,
  color: "#fff",
  fontWeight: "bold",
  backgroundColor: "transparent",
};

const defaultStyle = {
  color: "#61dafb",
  backgroundColor: "transparent",
  border: 0,
};

function NavButton(prop) {
  return (
    <button
      style={prop.isButtonActive ? activeButtonStyle : defaultStyle}
      onClick={prop.onClickButton}
      name={prop.name}
    >
      {prop.name.toUpperCase()}
    </button>
  );
}

function Header(prop) {
  return (
    <div style={headerStyle}>
      <NavButton
        isButtonActive={prop.currentlyActiveButton === "home"}
        onClickButton={prop.onClickButton}
        name="home"
      />
      <NavButton
        isButtonActive={prop.currentlyActiveButton === "resume"}
        onClickButton={prop.onClickButton}
        name="resume"
      />
      <NavButton
        isButtonActive={prop.currentlyActiveButton === "gallery"}
        onClickButton={prop.onClickButton}
        name="gallery"
      />
      <NavButton
        isButtonActive={prop.currentlyActiveButton === "contact"}
        onClickButton={prop.onClickButton}
        name="contact"
      />
      <NavButton
        isButtonActive={prop.currentlyActiveButton === "locations"}
        onClickButton={prop.onClickButton}
        name="locations"
      />
      {/* 
      <button
        style={
          prop.currentlyActiveButton === "gallery"
            ? activeButtonStyle
            : defaultStyle
        }
        onClick={prop.onClickButton}
        name="gallery"
      >
        Gallery
      </button> */}
    </div>
  );
}
/* 

aklsdjflkjaskldfljasdjfk
asdjklfjaskdlfj
asdjflkajslkdjf
asdlfjlkasjdflasdjkfklasdf


console.log(hello) 





*/
export default Header;
