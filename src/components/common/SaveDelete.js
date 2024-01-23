import React from 'react';
import { Button } from 'react-bootstrap';
import {useState} from 'react';

const savedEventIds = {
  "IDs": []
}

export default function SaveDelete({ value, children, ...props }) {
  let id = value[0];
  
  if(localStorage.getItem('savedEventIds') == null){
    localStorage.setItem('savedEventIds', JSON.stringify(savedEventIds))
  }

  var eventObject = localStorage.getItem('savedEventIds') ? JSON.parse(localStorage.getItem('savedEventIds')) : [];

  var clickState
  clickState = false

  for(let i = 0; i < eventObject.IDs.length; i++){

    if(eventObject.IDs[i].includes(id)) {
      clickState = true
    }
  }

  if(value[1] === true){
    clickState = !clickState
  }

  

  let [isOff, setIsOff] = useState(!clickState);

  const edit = () => {
    var savedEvents = localStorage.getItem('savedEventIds') ? JSON.parse(localStorage.getItem('savedEventIds')) : [];

    if(!isOff){
      for(let i = 0; i < savedEvents.IDs.length; i++){
        if(savedEvents.IDs[i].includes(id)) {
          console.log(i)
          if (i > -1) {
            savedEvents.IDs.splice(i, 1);
          }
        }
        else {
        }
      }

    }else {
      let flag  = 0;
      for(let i = 0; i < savedEvents.IDs.length; i++){
        if(savedEvents.IDs[i].includes(id)) {
          flag = 1;
        }
      }
      if(flag === 0){
        savedEvents.IDs.push(value)
      }
    }

    localStorage.setItem('savedEventIds', JSON.stringify(savedEvents));
    window.location.reload(false);
  }

  return (
    <Button onClick={() => {setIsOff(!isOff); edit()}}>{ isOff ? 'Save' : 'Remove' }</Button>
  )
};