import React from "react";

const Ford = ({data}) => {
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.colour}</p>
    </div>
  );
}

export default Ford;