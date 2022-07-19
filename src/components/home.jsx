import React, { Component } from "react";
import PageHeader from "./pageHeader";

class Home extends Component {
  state = {
    image: {
      url: "https://picsum.photos/1200/700",
      alt: "Random image",
    },
  };

  render() {
    const { url, alt } = this.state.image;
    return <img className="card-img-top" src={url} alt={alt} />
  }
}

export default Home;
