import React from "react";

export const Card = ({ person }) => {
  return (
    <div>
      <img src={`https://i.pravatar.cc/150?img=${person.id}`} alt="person" />
      <h1 key={person.id}>{person.name}</h1>
      <p>{person.email}</p>
    </div>
  );
};
