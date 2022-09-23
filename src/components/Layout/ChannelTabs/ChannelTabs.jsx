import React, { useState } from 'react';
import { useEffect } from 'react';
import classes from './ChannelTabs.module.css';

const ChannelTabs = (props) => {
  const [channels, setChannels] = useState([]);
  useEffect(()=>{
    
  },[])

  return (
    <ul className={classes.tabs}>
      <li>
        <img src='' alt='' />
        <span>channel</span>
      </li>
      <li>
        <img src='' alt='' />
        <span>chanel</span>
      </li>
    </ul>
  )};

export default ChannelTabs;