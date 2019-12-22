import React from "react";
import { Card } from "../card/card";

export const CardList = ({ people }) => {
  return (
    <div>
      {people.map(person => {
        return <Card key={person.id} person={person} />;
      })}
    </div>
  );
};
