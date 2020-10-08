import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <header>Welcome To Crawling word !</header>
        <div className="home-body">
          <div className="left-div">
            <div className="main-img" />
          </div>

          <div className="right-div">
            <p>
              Hlo everyone here we are crawling from{' '}
              <a href="https://medium.com">Medium</a> website
            </p>
            <p>
              You need to enter your tag name in search bar and fetch the latets
              stories tag... the stories we are fetching are from real-time i.e
              directly from the website
              <p>You can also fetch more by clicking next tags </p>
            </p>
            <p>
              For better experiece we keep monitor of yor history as well as
              most searched tag
            </p>
            <strong>What are you waiting for go and explore</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
