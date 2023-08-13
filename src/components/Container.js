import React from "react";
import Header from "./Header";
import FormContainer from "./form/FormContainer";
const Container = () => {
  const style = {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    borderRadius: "30px",
    boxShadow: "2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
    padding: 5,
  };
  return (
    <div style={style}>
      <Header></Header>
      <FormContainer />
    </div>
  );
};

export default Container;
