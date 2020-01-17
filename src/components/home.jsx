// react
import React from 'react'
// react-router
import {hashHistory} from 'react-router'

//bootstrap
import Grid from 'react-bootstrap/lib/Grid'
import Col from 'react-bootstrap/lib/Col'

// twitter widget
import { Timeline } from 'react-twitter-widgets'

// icons
// import pageTop from '../data/images/background/page-top_scaled.jpg'
// import aboutUs from '../data/images/background/about-us_scaled.jpg'
// import objective from '../data/images/background/objective_scaled.jpg'
// import desired from '../data/images/background/desired_scaled.jpg'
// import partners from '../data/images/background/partners_scaled.jpg'
import openSoftware from '../data/images/team/open-software.svg'
import openHardware from '../data/images/team/open-hardware.svg'
import openStandard from '../data/images/team/open-standard.svg'
import openData from "../data/images/team/open-data.svg"

// containers
import DataViewerContainer from '../containers/DataViewerContainer'

//css
import '../css/home.css'

const Home = React.createClass({
  componentDidMount () {
    // window.twttr.widgets.load(
    //   document.getElementById("twitter-container")
    // )
  },
  handleButtonClick (value, event) {
    if (value==='partners') {
      hashHistory.push(`/${value}`);
    } else {
      hashHistory.push(`/project/${value}`);
    }
  },
  render () {
    let styleCarouselTitle = {}
    let styleCarouselCaption = {
      textAlign:'left',
      fontSize:'20px'
    }
    let heightCarousel
    let styleCarouselItemImg
    if (this.props.size.width>=992) {
      heightCarousel = ((992/1.77)-((992*20)/100))
      styleCarouselItemImg = {width: '100%', transform: 'translate(0,-30%)'}
    } else if (this.props.size.width>=750) {
      heightCarousel = ((992/1.77)-((992*20)/100))
      styleCarouselItemImg = {width: '100%', transform: 'translate(0,-30%)'}
    } else {
      heightCarousel = (this.props.size.width/1.77)
      styleCarouselCaption.fontSize = '12px'
      styleCarouselTitle.fontSize = '14px'
      styleCarouselItemImg = {width: '100%'}
    }
    let heightRow = (this.props.size.height - (heightCarousel+this.props.appBar.height+160))
    // let styleCarouselItem = {height:heightCarousel}
    return (
      <div id="page-top" style={{textAlign:'center'}}>
        <Grid style={{width: '100%', float: 'none', display: 'table', padding:'0px 0px 0px 0px'}}>
          <div style={{display: 'table-row'}}>
            <DataViewerContainer 
              styleClass='grid-home'
              width={this.props.size.width}
              height={heightCarousel}
              diyplay='table'
            />
          </div>
          <div style={{backgroundColor: '#333', display: 'table-row', height: heightRow/5, width: this.props.size.width+'px',margin: 0}}>
            <div style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#333', color: 'white', fontSize:'12'}}>
              <h4><b>Strengthening environmental monitoring system with fully open technologies</b></h4>
            </div>
          </div>
          <div style={{height: (heightRow*4)/5, display: 'table-row', }}>
              <Col md={2} style={{marginTop:'50px'}}>
                <a href='http://www.istsos.org' target='_blank'>
                  <figure>
                    <img src={openSoftware} alt="istSOS" />
                    <figcaption>
                      <strong>IstSOS</strong>
                      <br/>
                      Open SOftware
                    </figcaption>
                  </figure>
                </a>
              </Col>
              <Col md={2} style={{marginTop:'50px'}}>
                <a href='http://arduino.cc' target='_blank'>
                  <figure>
                    <img src={openHardware} alt="Arduino" />
                    <figcaption>
                      <strong>Arduino</strong>
                      <br/>
                      Open Hardware
                    </figcaption>
                  </figure>
                </a>
              </Col>
              {/* <div className="clearfix visible-sm"></div> */}
              <Col md={2} style={{marginTop:'50px'}}>
                <a href='https://zenodo.org/search?page=1&size=20&q=4onse' target='_blank'>
                  <figure>
                    <img src={openData} alt="Zenodo portal" />
                    <figcaption>
                      <strong>Zenodo</strong>
                      <br/>
                      Open Data
                    </figcaption>
                  </figure>
                </a>
              </Col>
              <Col md={2} style={{marginTop:'50px'}}>
                <a href='https://www.opengeospatial.org/standards/sos' target='_blank'>
                  <figure>
                    <img src={openStandard} alt="SOS OGC" />
                    <figcaption>
                      <strong>OGC SOS</strong>
                      <br/>
                      Open Standard
                    </figcaption>
                  </figure>
                </a>
              </Col>
              <Col md={4}>
              <div id='twitter-container'>
                <Timeline
                  dataSource={{
                    sourceType: 'profile',
                    screenName: 'SNSF_4onse'
                  }}
                  options={{
                    username: 'SNSF_4onse',
                    height: ((heightRow*4)/5)-5
                  }}
                  onLoad={() => console.log('Timeline is loaded!')}
                />
              </div>
            </Col>
          </div>
        </Grid>
      </div>
    )
  }
})

export default Home
