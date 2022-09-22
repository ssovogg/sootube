import React from "react";
import classes from "./SearchTabs.module.css";

const DUMMY_TAB = [
  {
    id: "t1",
    tid: "total",
    name: "전체",
  },
  {
    id: "t2",
    tid: "music",
    name: "음악",
  },
  {
    id: "t3",
    tid: "game",
    name: "게임",
  },
];

const SearchTabs = ({ onSearch }) => {
  const onClick = (e) => {
    console.log(e.target.innerText);
  }
  const onChange = () => {

  }
  return (
    <ul className={classes.tabs}>
      {DUMMY_TAB.map((tab) => (
        <li key={tab.id}>
          <input type="radio" name="tab" id={tab.tid} onChange={onChange}/>
          <label htmlFor={tab.tid} onClick={onClick}>{tab.name}</label>
        </li>
      ))}
    </ul>
  );
};

export default SearchTabs;
