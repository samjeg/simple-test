import React from "react";

const Mercedes = ({data}) => {
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.colour}</p>
    </div>
  );
}

export default Mercedes;