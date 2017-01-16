import React, { Component } from 'react';

import Header from "./header";
import Footer from "./footer";

class App extends Component {
  constructor(){
    super();
    this.state = {
      title: "Welcome",
      name: ['Jazz', "Nav"]
    };
  }

  changeTitle(title) {
    this.setState({title})
  }

  render() {
    return (
      <div className="App">
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
        <Footer />
      </div>
    );
  }
}

export default App;
