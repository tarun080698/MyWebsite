import React from "react";

const Compone = ({ cpn, deleteComp }) => {
  const cpnList = cpn.map((cpno) => {
    return (
      <div className="compare" key={cpno.id}>
        <br></br>
        <div>Name: {cpno.name}</div>
        <div>Position: {cpno.post}</div>
        <div>Contact: {cpno.phone}</div>
        <button onClick={() => {deleteComp(cpno.id)}}>Delete</button>
      </div>
    );
  });

  return <div className="cpn-list">{cpnList}</div>;
};
export default Compone;
