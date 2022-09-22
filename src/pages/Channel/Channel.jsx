import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import classes from './Channel.module.css';

const Channel = (props) => {
  const [channel, setChannel] = useState();
  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UCUj6rrhMTR9pipbAWBAMvUQ&key=AIzaSyBRMVXtPaG4-SxkNUfyrjgE-2J5Dtyew-8`, requestOptions)
      .then(response => response.json())
      .then(result => setChannel(result.items[0]))
      .catch(error => console.log('error', error));
  },[])

  console.log(channel);
  
  return(
    <>
      <img src={channel.snippet.thumbnails.medium.url} alt={channel.snippet.title} />
      <h1>{channel.snippet.title}</h1>
      <pre>{channel.snippet.description}</pre>
    </>
  )};

export default Channel;