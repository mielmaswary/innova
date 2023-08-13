import React from "react";
import VerticalLine from "../VerticalLine";

const Form = () => {
  const styles = {
    container: {
      borderRadius: 30,
      boxShadow: "2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
      padding: 15,
      width: 1487,
      height: 150,
      marginRight: 30,
      position: "relative",
      display: "flex",
    },
    midContainer: {
      width: "100%",
    },
    topContainer: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "45%",
      marginBottom: 15,
    },
    bottomContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "45%",
    },
    text_black: { fontWeight: 700, fontSize: 19 },
    text_grey: { color: "#4D4D4D", fontWeight: 500, fontSize: 19 },

    input: {
      borderRadius: 22,
      width: "220px",
      height: 45,
      color: "#A4A4A4",
      border: "1px solid #A4A4A4",
      outline: "none",
      fontWeight: 500,
      fontSize: "17px",
      padding: "5px 20px",
    },
    img: {
      height: 63,
    },
    more_info_icon: {
      width: 60,
      height: 14,
      marginTop: 30,
      marginRight: 10,
    },
    buttonSave: {
      borderRadius: 18,
      width: 170,
      height: 35,
      backgroundColor: "#0058FF",
      outline: "none",
      padding: "10px 20px",
      color: "#fff",
      border: "none",
      marginRight: 8,
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: 1,
    },
    buttonCancel: {
      borderRadius: 18,
      width: 170,
      height: 35,
      backgroundColor: "#AAC7FF",
      color: "#4D4D4D",
      outline: "none",
      padding: "10px 20px",
      border: "none",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: 1,
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.midContainer}>
        <div style={styles.topContainer}>
          <h4 style={styles.text_black}>מספר חבר 123456789</h4>
          <VerticalLine width={1} height={20} />
          <div style={styles.text_grey}>יתרת חוב 10,250 ₪</div>
          <input style={styles.input} placeholder="שם פרטי" />
          <input style={styles.input} placeholder="שם משפחה" />
          <input style={styles.input} placeholder="מס' נייד" />
        </div>

        <div style={styles.bottomContainer}>
          <div>
            <img style={styles.more_info_icon} src="icon_moreinfo.png" />
          </div>
          <div>
            <button style={styles.buttonCancel}>ביטול</button>
            <button style={styles.buttonSave}>שמור שינויים</button>
          </div>
        </div>
      </div>
      <img style={styles.img} src="edit_btn.png" />
    </div>
  );
};

export default Form;
