import React from "react";

const Car = ({data}) => {
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.colour}</p>
    </div>
  );
}

export default Car;