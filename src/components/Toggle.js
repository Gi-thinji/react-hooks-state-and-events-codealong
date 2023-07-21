// import { useState } from "react";
// import React from "react";

// function Toggle() {
//   const [isOn,setisOn] = useState(false)
//   function handleClick(){
//     // console.log("isOn")
    
//     setisOn(!isOn)
//     // isOn ? ON : OFF
    
//   }
  
//   const col = isOn ? "red" : "white"

//   return <button style={{background:col}} onClick={()=>{handleClick()}}>{isOn ? "ON" : "OFF"}</button>;
// }

// export default Toggle;

import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState('false')

  function switchState(){
    setIsOn(!isOn)
  }

  // function currentState(){
  //   if(isOn = 'off'){

  //   }
  // }
  const buttonColor = isOn ? "red" : "white"
  // style=color:'red'

  return <button style={{background: buttonColor}} onClick={switchState} >{isOn? "ON" : "OFF"}</button>;
}

export default Toggle;