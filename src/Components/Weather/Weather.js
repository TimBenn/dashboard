import React, { Component } from "react";
import axios from "axios";

import './Weather.css';

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
      shouldGetWeather: false
    };
  }

  componentDidMount() {
    if (this.state.shouldGetWeather) {
      axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?zip=75287,us&APPID=c2cee36163ab80c9890a894b88613e37"
      )
      .then(response => {
        this.setState({ weather: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
    }
  }

  render() {
    const myWeather = this.state.weather;
    if (myWeather === null && this.state.shouldGetWeather === false) {
        return <h2>Loading....</h2>
    }
    return (
        <div className="weather-card">
          <div className={this.state.weather.name}>
            <h1>Weather</h1>
            <p>{this.state.weather.name}</p>
            {this.state.weather.weather.map((object, i) => {
                return <p key={object.id}>{object.description}</p>
            })}
          </div>
        </div>
      );
  }
}
