import React, { Component } from "react";
import axios from "axios";

import "./Reddit.css";

export default class Reddit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    axios
      .get("http://www.reddit.com/r/technews/hot/.json?limit=5")
      .then(response => {
        this.setState({ items: response.data.data.children });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  formatPostsData() {
    return this.state.items.map((obj, i) => {
      return (
        <div key={obj.data.id}>
          <a href={obj.data.url} target='_blank'>{obj.data.title}</a>
        </div>
      );
    });
  }

  render() {
    if (this.state.items === null) {
      return <p>Loading....</p>;
    }
    return <div className="reddit-card">{this.formatPostsData()}</div>;
  }
}
