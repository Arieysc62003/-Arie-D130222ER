import React, { Component } from "react";
import PageHeader from "./pageHeader";
import Card from "./card";

class Home extends Component {
  state = {
    image: {
      url: "https://picsum.photos/1200/700",
      alt: "Random image",
    },
    array: new Array(10),
  };

  colorHeadLine = {
    color: "red",
    fontSize: "2rem",
  };

  cbClick() {
    alert("opaa, that worked");
  }

  render() {
    const { url, alt } = this.state.image;
    const array = [...this.state.array];
    if (!array.length) return <p>No item....</p>;
    return (
      <div className="container">
        <PageHeader />
        <Card />
        {array.map((item, index, array) => {
          console.log(array);
          return <div key={index}>{item}</div>;
        })}
        <button onClick={this.cbClick} className="btn btn-primary">
          {" "}
          +{" "}
        </button>
      </div>
    );
  }
}

export default Home;
