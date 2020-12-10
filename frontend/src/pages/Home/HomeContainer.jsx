import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomePresenter from './HomePresenter';

let initialState = [];
const HomeContainer = () => {
  let [lists, setLists] = useState(initialState);

  useEffect(() => {
    fetchLists();
  }, []);

  const fetchLists = async () => {
    try {
      let response = await axios.get('/api/values');
      let results = response.data;
      setLists(lists.concat(results));
    } catch (err) {
      console.log(err);
    }
  };

  return <HomePresenter lists={lists} />;
};

export default HomeContainer;
