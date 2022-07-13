import React from 'react'

const Greet = () => {
    const wish = {
        mrng : "Good Mornig",
        evng : "Good Evenig",
        night : "Good Night"
      }
      const cssStyle = {};
      
      
      // let  curr_time =  new Date(1999,2,7,15);
      
      let  curr_time =  new Date();
      let curr_Hr = curr_time.getHours();
      
      let greeting = "";
      if(curr_Hr >= 1 && curr_Hr <=12 ){
        cssStyle.color = "green"
        greeting = wish.mrng;
      }
      else if(curr_Hr>= 12 && curr_Hr <= 19 ){
        greeting = wish.evng
        cssStyle.color = "red"
      }
      else{
        greeting = wish.night
        cssStyle.color = "Blue"
      }

  return (
    <>
    <h1 style={cssStyle}>  {greeting} </h1>
    </>
  )
}

export default Greet