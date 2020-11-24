import React from 'react';

const Card = ({ name, skill, id, value, date }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img src={require(`../player-images/${id}.jpg`)} alt="players"/>
      <div>
        <h2>{name}</h2>
        <p>skill_desc:{skill}</p>
        <h2>{date}</h2>
        <h1>{value}$</h1>
       
      </div>
    </div>
  );
}

export default Card;
