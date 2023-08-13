import React from "react";
import Form from "./Form";
const FormContainer = () => {
  const styles = {
    container: {
      margin: "auto",
      height: 230,
      width: "95%",
      direction: "rtl",
    },
    h2: {
      fontSize: 29,
      fontWeight: 700,
      color: "#4D4D4D",
      marginRight: 10,
      marginBottom: 5,
    },
    img: {
      width: 106,
      height: 106,
    },
  };
  return (
    <div style={styles.container}>
      <h2 style={styles.h2}>כרטיס חבר</h2>
      <div style={{ display: "flex" }}>
        <img style={styles.img} src="image_member.png" />
        <Form />
      </div>
    </div>
  );
};

export default FormContainer;
