import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import Projects from "./Projects";
import Modal from "./Modal";

class App extends Component {
  state = {
    responseJson: []
  };

  componentDidMount() {
    return fetch(`http://seedougrun.com/wordpress/wp-json/portfolio/v2/post`)
      .then(response => response.json())
      .then(responseJson => {
        // Update state here
        this.setState({ responseJson });
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header />
          <Hero />
          <Projects projects={this.state.responseJson} />
          <Footer />
        </div>

        <Modal />
      </div>
    );
  }
}

export default App;
