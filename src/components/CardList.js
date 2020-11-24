import React from 'react';
import Card from './Card';

const CardList = ({ player }) => {
  return (
    <div>
      {
        player.map((user, i) => {
          return (
            <Card
              key={i}
              id={player[i].Id}
              name={player[i].PFName}
              skill={player[i].SkillDesc}
              value={player[i].Value}
              date={player[i].UpComingMatchesList[0].MDate}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;