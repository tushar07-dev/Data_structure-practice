import React, { useState } from "react";
import styles from "../App.module.css";

var styleBox = {
  // border: `1px solid red`,
  width: `fit-content`,
  margin: `auto`,
  marginTop: `50px`,
  padding: `15px`,
  backgroundColor: `yellow`,
  borderRadius: `10px`,
};

var btnBox = {
  display: `flex`,
  gap: `30px`,
  // border: `1px solid red`,
  padding: `10px`,
};

var btnStyle = {
  padding: `10px`,
  borderRadius: `10px`,
  backgroundColor: `black`,
  color: `white`,
  border: `transparent`,
};
let Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={styleBox}>
        <h1>Counter App</h1>
        <h1 className={count % 2 === 1 ? `${styles.red}` : `${styles.green}`}>
          {count}
        </h1>
        <div style={btnBox}>
          <button style={btnStyle} onClick={() => setCount(count + 1)}>
            Increment
          </button>
          <button
            style={btnStyle}
            onClick={() => {
              if (count > 0) {
                setCount(count - 1);
              }
            }}
          >
            Decrement
          </button>
          <button style={btnStyle} onClick={() => setCount(count * 2)}>
            double
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;