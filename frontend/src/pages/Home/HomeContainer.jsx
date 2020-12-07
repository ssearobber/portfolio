import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomePresenter from './HomePresenter';

const HomeContainer = () => {
  let [lists, setLists] = useState([]);

  useEffect(() => {
    axios.get('/api/values').then((response) => {
      setLists(response);
    });
  }, []);

  return <HomePresenter lists={lists} />;
};

export default HomeContainer;
