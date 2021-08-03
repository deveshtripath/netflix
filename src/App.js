import React from 'react';
import Row from './Row';
import './App.css';
import requests from './requests'
import Banner from './Banner';
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
      {/* navebar */}
      {/* banner */}
      <Navbar/>
      <Banner/>
      
     <Row title="Netflix originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
     <Row title="Trending now" fetchUrl={requests.fetchTreanding} />
     <Row title="top rated " fetchUrl={requests.fetchTopRated} />
     <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />
     <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies} />
     <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />
     <Row title="Romance movies" fetchUrl={requests.fetchRomanceMovies} />
     <Row title="Documentry movies" fetchUrl={requests.fetchDocumentaries} />
     {/* <Row title="Netflix originals" /> */}
    </div>
  );
}

export default App;
