import React from 'react';
import Button from '../../components/atoms/Button';

const HomePresenter = ({ lists }) => {
  return (
    <div className="section">
      <div className="button-wrapper">
        <Button text="+" color="#55b9f3" type="text" />
      </div>
      <div className="contents-wrapper neumorphism">
        <div style={{ width: '200px', height: '200px', backgroundColor: 'red' }}>이미지</div>
        <div className="text-box">
          <div>Environment : {lists}</div>
          <div>Develop period :</div>
          <div>Github url :</div>
          <div>Distribution url :</div>
        </div>
      </div>
    </div>
  );
};

export default HomePresenter;
