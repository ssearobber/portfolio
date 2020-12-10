import React from 'react';

const Card = ({ list }) => {
  console.log(list);
  return (
    <div className="contents-wrapper neumorphism">
      <div style={{ width: '200px', height: '200px', backgroundColor: 'blue' }}>
        {list.imagePath}
      </div>
      <div className="text-box">
        <div>Environment : {list.enviroment}</div>
        <div>Develop period : {list.period}</div>
        <div>Github url : {list.githubUrl}</div>
        <div>Distribution url : {list.distributionUrl}</div>
      </div>
    </div>
  );
};

export default Card;
