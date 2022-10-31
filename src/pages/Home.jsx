import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';

const Home = () => {
  return (
    <>
        <Main />
        <Row title="Upcoming"  />
        <Row title="Popular" />
        <Row title="Trending" />
        <Row title="Series" />
        <Row title="Horror" />
    </>
  );
}

export default Home