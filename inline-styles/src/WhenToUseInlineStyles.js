import React, { useState } from "react";

function WhenToUseInlineStyles() {
  const [color, setColor] = useState("#7719aa");

  const boxStyle = {
    backgroundColor: color, //Changes based on state
    color: "#ffffff",
    margin: "20px",
    padding: "20px"
  };

  const handleChange = event => {
    setColor(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={color} />
      <div style={boxStyle}>
        Use inline styling to dynamically add properties
      </div>
    </div>
  );
}

export default WhenToUseInlineStyles