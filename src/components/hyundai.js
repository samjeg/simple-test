import React from "react";

const Hyundai = ({data}) => {
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.colour}</p>
    </div>
  );
}

export default Hyundai;