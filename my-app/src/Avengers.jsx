import React from "react";

const Avengers = ({ avengers, deleteAvenger }) => {
  const avengerList = avengers.map(avenger => {
    return avenger.age > 15 ? (
      <div className="Avengers" key={avenger.id}>
        <div>Name: {avenger.name}</div>
        <div>Age: {avenger.age}</div>
        <div>hero: {avenger.hero}</div>
        <button
          onClick={() => {
            deleteAvenger(avenger.id);
          }}
        >
          Delete
        </button>
        <br />
      </div>
    ) : null;
  });
  return <div className="avenger-list">{avengerList}</div>;
};

export default Avengers;
