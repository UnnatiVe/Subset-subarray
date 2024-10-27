
// Player.js
import React from "react";
import { motion } from "framer-motion";

const Player = ({ position }) => {
  return (
    <motion.div
      className="player"
      initial={{ x: 0 }}
      animate={{ x: position * 50 }}  // Adjust movement scaling
      transition={{ type: "spring", stiffness: 300 }}
      style={{
        width: "50px",
        height: "50px",
        backgroundColor: "#FF6347",
        borderRadius: "50%",
        position: "absolute",
        bottom: "10px"
      }}
    />
  );
};

export default Player;
