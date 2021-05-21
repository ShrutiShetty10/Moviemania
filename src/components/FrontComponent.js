import React from 'react';
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";
import requests from "./requests";
import "../App.css";
import {withRouter} from 'react-router';
 function FrontComponent() {
   return (
        <div className="App">
      <header className="App-header">
      <Nav />
      <Banner />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
      ></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      ></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>

   
    </header>
    </div>
    );
  }
export default withRouter(FrontComponent);
