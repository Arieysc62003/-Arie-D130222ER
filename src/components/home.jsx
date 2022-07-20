import React, { Component } from "react";
import PageHeader from "./pageHeader";
import Card from "./card";

class Home extends Component {
  state = {
    image: {
      url: "https://picsum.photos/1200/700",
      alt: "Random image",
    },
    array: ["one", "two", "three", "four", "five"],
  };

  colorHeadLine = {
    color: "red",
    fontSize: "2rem",
  };

  render() {
    const { url, alt } = this.state.image;
    const array = [...this.state.array];
    return (
      <div className="container">
        <PageHeader />
        <Card />
      </div>
    );
  }
}

export default Home;
