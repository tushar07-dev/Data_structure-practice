import React from 'react'

export const Time = () => {
    let  curr_time =  new Date();
    let curr_Hr = curr_time.getHours();

  return (
    <div>
        Time : {curr_Hr} am/pm
    </div>
  )
}
 export  default Time;