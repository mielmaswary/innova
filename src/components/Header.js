import React from "react";
import VerticalLine from "./VerticalLine";

const Header = () => {
  const styles = {
    container: {
      width: "99%",
      height: 105,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      borderBox: "box-sizing",
    },
    logos: {
      width: 400,
      display: "flex",
      alignItems: "center",
    },
    hamBtn: {
      width: 70,
      margin: 5,
    },
    logoInnova: {
      height: 50,
      width: 150,
      margin: 26,
    },
    logoEshkol: {
      width: 92,
      height: 92,
      margin: 26,
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.logos}>
        <img style={styles.logoInnova} src="logo_innova.png" />
        <VerticalLine width={2} height={69} />
        <img style={styles.logoEshkol} src="logo_eshkol.png" />
      </div>

      <div>
        <img style={styles.hamBtn} src="ham_btn.png" />
      </div>
    </div>
  );
};

export default Header;
