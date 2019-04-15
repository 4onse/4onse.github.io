// react
import React, { Component } from 'react';
// import fetch from 'node-fetch';

//css
import '../css/home.css'


class StationPage extends Component {

  render() {
    return (
      <div style={{ color: 'white' }} className="App">

        <iframe width='100%' height='1024' src={`http://localhost:3000/dashboard/snapshot/${this.props.id}?kiosk`} frameborder="0"/>
      </div>
    );
  }
}

export default StationPage;
