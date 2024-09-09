import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  // Here are all hooks
  const [val, setVal] = useState("");
  const [isHover, setIsHover] = useState(false);
  const [ListArr, setListArr] = useState(["yes", "Probably Not"]);

  // This code is for selection of element from an Array
  const onClickHandeler = (e) => {
    setVal(e.target.textContent);
    setIsHover(false);
  };

  // This function act as Toggle when mouse enter at perticular point
  const mouseHoverHandler = () => {
    setIsHover(true);
  };

  // Iterating on the Array and printing it
  const Array = ListArr.map((res, ind) => {
    return (
      <Link className="link-array" href="#" onClick={onClickHandeler} key={ind}>
        {res}
      </Link>
    );
  });
  return (
    <div className="dropdown">
      <h1>Should you use Dropdown?</h1>
      <h1 className="val-text">{val}</h1>
      {/* THis is the button when your curson enter, mouseHoverHandeler function will automatically get called  */}
      <button onMouseEnter={mouseHoverHandler} className="dropbtn">
        Select
      </button>
      {/* This is toggel button when it becomes true it will print otherwise not */}
      {isHover ? <div className="dropdown-content">{Array}</div> : ""}
    </div>
  );
};

export default Dropdown;
