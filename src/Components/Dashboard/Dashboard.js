import React, { Component } from 'react';
import Weather from '../Weather/Weather';
import Reddit from '../Reddit/Reddit';
import './Dashboard.css'

export default class Dashboard extends Component {
  render() {
    return (
      <div className='dashboard'>
        <Weather />
        <Reddit />
      </div>
    )
  }
}
