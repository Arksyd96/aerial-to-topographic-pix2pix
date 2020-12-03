import React, { useState } from "react";

const Image = ({ src, loading }) => {
  return (
    <div className="img">
      {loading ? (
        <span>Loading...</span>
      ) : src ? (
        <img src={src} />
      ) : (
        <span>No Image</span>
      )}
    </div>
  );
};

export default Image;
