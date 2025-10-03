// Spinner.jsx
import React from "react";

const Spinner = ({ size = 32 }) => {
  return (
    <div
      className="animate-spin rounded-full border-4 border-white/30 border-t-white"
      style={{ width: size, height: size }}
    />
  );
};

export default Spinner;
