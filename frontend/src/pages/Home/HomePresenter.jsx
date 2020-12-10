import React from 'react';
import Button from '../../components/atoms/Button';
import Card from '../../components/molecules/Card';

const HomePresenter = ({ lists }) => {
  return (
    <div className="section">
      <div className="button-wrapper">
        <Button text="+" color="#55b9f3" type="text" />
      </div>
      {lists.map((list) => (
        <Card key={list.id} list={list} />
      ))}
    </div>
  );
};

export default HomePresenter;
