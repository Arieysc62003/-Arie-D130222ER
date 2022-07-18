import React, { Component } from "react";
import PageHeader from "./pageHeader";

class Home extends Component {
  state = {
    image: {
      url: "https://cdn.babamail.co.il/Images/2020/4/14/29957a68-b8e3-4b66-8f72-968f01b28344.jpg",
      alt: "blake horse",
    },
  };
  render() {
    const { url, alt } = this.state.image;
    return <img className="card-img-top" src={url} alt={alt} />;
  }
}

export default Home;
