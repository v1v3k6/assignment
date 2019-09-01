import React from 'react';
class App extends React.Component
{
  render() {
    return (
      <div className="App">
        <header id="hroot">Header</header>
        <div id="croot">
          <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
          <div id="content">
          </div>
        </div>
        <footer id="froot">Footer</footer>
      </div>
    );
  }
}
export default App;
