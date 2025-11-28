import React from "react";
import pharmacyImg from "../images/dailymeds.jpeg";

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${pharmacyImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textShadow: "2px 2px 6px rgba(0,0,0,0.7)"
  };

  return (
    <div style={backgroundStyle}>
      <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
        Welcome to DailyMeds Pharmacy
      </h1>

      <p style={{ fontSize: "20px", marginTop: "10px" }}>
        Your trusted pharmacy for health and wellness.
      </p>
    </div>
  );
};

export default Home;