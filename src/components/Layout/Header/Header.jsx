import React from 'react';
import { useState } from 'react';
import classes from './Header.module.css';

const Header = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const onChange = (e) => {
    setQuery(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  }
  return (
      <header className={classes.header}>
        <h1>
          SooTube
        </h1>
        <form onSubmit={onSubmit}>
          <input type="search" placeholder='search' value={query} onChange={onChange}/>
          <button type="submit">검색</button>
        </form>
        <p>
          profile
        </p>
      </header>
  )};

export default Header;