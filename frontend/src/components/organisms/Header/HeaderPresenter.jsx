import React from 'react';
import Profile from '../../../icons/profile.png';

const HeaderPresenter = () => {
  return (
    <div className="header">
      <div className="logo">portfolio</div>
      <div className="profile">
        <img src={Profile} alt={'profile'} />
      </div>
    </div>
  );
};

export default HeaderPresenter;
