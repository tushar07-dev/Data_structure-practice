import React from 'react'

const Cards = (props) => {
    let aboveFlexBox = {
        display: `flex`,
        justifyContent: `space-between`,
        // border: `1px solid red`,
        padding: `30px`,
      };
      
      let head = {
        fontSize: `40px`,
      };
      
  return (
    <div className='mainContainer'>{props.value.map((el) => (
        <div className='divbox' style={{ marginTop: "100px",
        height: `500px`}}>
            <div style={aboveFlexBox}>
                <h3>{el.date}</h3>
                <img className='imgtag'  style={{ width: "90px" }} src={el.logo} alt=""/>
            </div>

            <div style={{width: "fit-content",marginLeft: "30px",textAlign: "left"}}>

                <button style={{ padding: "10px 15px 10px 15px",
                fontSize: "20px",
                borderColor: "transparent",
                backgroundColor: "black",
                color: "white"}}>Case Study</button>
                 <h1 style={head}>{el.heading}</h1>
            <h1 style={head}>{el.subheading}</h1>
            </div>
            <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "30px",
            }}
          >
            <h3>{el.devices}</h3>
            <h1> {el.sider} </h1>
          </div>
        </div>
    ))}</div>
  )
}

export default Cards