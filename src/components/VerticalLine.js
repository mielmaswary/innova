import React from "react";

const VerticalLine = ({ width, height }) => {
  const lineStyle = {
    width,
    height, // Adjust the height as needed
    backgroundColor: "#808080", // You can change the color to your preference
  };

  return <div style={lineStyle}></div>;
};

export default VerticalLine;
