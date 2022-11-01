import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import data from '../movies.json';

const Home = () => {
  let upcoming = [], popular = [], trending = [], series = [], horror = [];
  let movies = [];
  for (let i = 0; i < Object.keys(data).length; i++) {
    if (data[i].status === 'upcoming') upcoming.push(data[i]);
    else if (data[i].status === 'popular') popular.push(data[i]); 
    else if (data[i].status === 'trending') trending.push(data[i]);
    if (data[i].type === 'serial') series.push(data[i]);
    if (data[i].genre[0] === 'Horror') horror.push(data[i]);
  }
  movies.push(upcoming);
  movies.push(popular);
  movies.push(trending);
  movies.push(series);
  movies.push(horror);
  console.log(movies)

  return (
    <>
        <Main />
        <Row text="Upcoming" movie={upcoming} />
        <Row text="Popular" movie={popular} />
        <Row text="Trending" movie={trending} />
        <Row text="Series" movie={series} />
        <Row text="Horror" movie={horror} />
    </>
  );
}

export default Home