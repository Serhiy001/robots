import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  const CardArr = robots.map((robot, i) => {
    return <Card key={i} id={robot.id} name={robot.name} email={robot.email} />;
  });

  return <div>{CardArr}</div>;
};

export default CardList;
