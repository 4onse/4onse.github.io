// react
import React, { Component } from 'react';
import fetch from 'node-fetch';

//css
import '../css/home.css'


class StationPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tempHum: null,
      isLoading: false,
      error: null,
      time: null
    };
  }

  componentDidMount () {
    let d = new Date();
    let now_time = Date.now()
    let seven_days_ago = now_time - 604800*1000
    let proc_id = this.props.id
    this.setState({ isLoading: true, time: d.toISOString() });
    let req_options = {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin':'*',
            'Authorization': 'Bearer eyJrIjoiZHdKRm1JenRScFdwaThOZ0ZibElRWEdFYzB4SU94SGMiLCJuIjoiNG9uc2UtcGFnZXMiLCJpZCI6MX0='
        }
    }
    Promise.all([
      fetch(
          '/render/d-solo/9F3m7s1mk/4onse?orgId=1&panelId=2&from=' + seven_days_ago + '&to=' + now_time + '&var-service=lka&var-id=' + proc_id + '&width=1000&height=500&tz=Europe%2FZurich',
          req_options
        )
        .then(res => {
          if(res.ok) {
            return res.blob()
          } else {
            throw new Error('Something went wrong...')
          }
        })
        .then(data =>  this.setState({tempHum: URL.createObjectURL(data)}))
        .catch(error => this.setState({ error, isLoading: false }))
      ,
      fetch(
          '/render/d-solo/9F3m7s1mk/4onse?orgId=1&panelId=23&from=' + seven_days_ago + '&to=' + now_time + '&var-service=lka&var-id=' + proc_id + '&width=1000&height=500&tz=Europe%2FZurich',
          req_options
        )
        .then(res => {
          if(res.ok) {
            return res.blob()
          } else {
            throw new Error('Something went wrong...')
          }
        })
        .then(data =>  this.setState({rainPre: URL.createObjectURL(data), isLoading: false}))
        .catch(error => this.setState({ error, isLoading: false }))
      ,
      fetch(
        '/render/d-solo/9F3m7s1mk/4onse?panelId=11&orgId=1&from=' + seven_days_ago + '&to=' + now_time + '&var-service=lka&var-id=' + proc_id + '&width=200&height=90&tz=Europe%2FZurich',
        req_options
      )
      .then(res => {
          if(res.ok) {
            return res.blob()
          } else {
            throw new Error('Something went wrong...')
          }
        })
        .then(data =>  this.setState({temp: URL.createObjectURL(data), isLoading: false}))
        .catch(error => this.setState({ error, isLoading: false }))
      ,
      fetch(
        '/render/d-solo/9F3m7s1mk/4onse?panelId=17&orgId=1&from=' + seven_days_ago + '&to=' + now_time + '&var-service=lka&var-id=' + proc_id + '&width=240&height=90&tz=Europe%2FZurich',
        req_options
      )
      .then(res => {
          if(res.ok) {
            return res.blob()
          } else {
            throw new Error('Something went wrong...')
          }
        })
        .then(data =>  this.setState({press: URL.createObjectURL(data), isLoading: false}))
        .catch(error => this.setState({ error, isLoading: false }))
      ,
      fetch(
          '/render/d-solo/9F3m7s1mk/4onse?panelId=21&orgId=1&from=' + seven_days_ago + '&to=' + now_time + '&var-service=lka&var-id=' + proc_id + '&width=200&height=90&tz=Europe%2FZurich',
          req_options
        )
        .then(res => {
          if(res.ok) {
            return res.blob()
          } else {
            throw new Error('Something went wrong...')
          }
        })
        .then(data =>  this.setState({rain: URL.createObjectURL(data), isLoading: false}))
        .catch(error => this.setState({ error, isLoading: false }))
      ,
      fetch(
          '/render/d-solo/9F3m7s1mk/4onse?panelId=16&orgId=1&from=' + seven_days_ago + '&to=' + now_time + '&var-service=lka&var-id=' + proc_id + '&width=200&height=90&tz=Europe%2FZurich',
          req_options
        )
        .then(res => {
          if(res.ok) {
            return res.blob()
          } else {
            throw new Error('Something went wrong...')
          }
        })
        .then(data =>  this.setState({hum: URL.createObjectURL(data), isLoading: false}))
        .catch(error => this.setState({ error, isLoading: false }))
      ,
      fetch(
          '/render/d-solo/9F3m7s1mk/4onse?panelId=19&orgId=1var-service=lka&var-id=' + proc_id + '&width=1000&height=90&tz=Europe%2FZurich',
          req_options
        )
        .then(res => {
          if(res.ok) {
            return res.blob()
          } else {
            throw new Error('Something went wrong...')
          }
        })
        .then(data =>  this.setState({name: URL.createObjectURL(data), isLoading: false}))
        .catch(error => this.setState({ error, isLoading: false }))
    ])
  }
  render() {
    return (
      <div style={{ color: 'white' }} className="App">
        <img src={this.state.name} /><br/>
        <p style={{textAlign: 'middle'}}>
          <h3>Last data:</h3><br/>
          {this.state.time}
        </p>
        <img src={this.state.temp} />
        <img src={this.state.press} />
        <img src={this.state.rain} />
        <img src={this.state.hum} /><br/>
        <h3>Last 7 days:</h3>
        <img src={this.state.tempHum} />
        <img src={this.state.rainPre} />
      </div>
    );
  }
}

export default StationPage;
