import React from 'react';

const Button = ({ text, color, type, onclick }) => {
  return (
    <button className="neumorphism" type={type}>
      {text}
    </button>
  );
};

export default Button;
