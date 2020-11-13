import React, { Component } from 'react'
//bootstrap
import Grid from 'react-bootstrap/lib/Grid'
import Carousel from 'react-bootstrap/lib/Carousel'
import Col from 'react-bootstrap/lib/Col'
// component
import ChartComponent from '../components/ChartComponent'
// img
import stations from '../data/images/stations.jpg'
import education from '../data/images/edu.jpg'
import workshop from '../data/images/workshop.jpg'
import maintenance from '../data/images/maintenance.jpg'
import board from '../data/images/board.jpg'


var x = 7; // go back 5 days!

const end_time = new Date()
const begin_time = new Date()

begin_time.setDate(begin_time.getDate() - x);



class DataViewerContainer extends Component{
    state = {
        parameters: [
            {
                name: 'temperature',
                checked: true,
                type: 'line',
                max: 40,
                min: -20,
                gridIndex: 0,
                xPosition: 'end',
                yNameLocation: 'end',
                upThreshold: 10,
                bottomThreshold: 10,
                xShow: true,
                showLabel: false,
                inverse: false,
                itemStyle: {
                    color: '  #009A00'
                },
                label: 'Temperature (°C)',
                api: `/wa/istsos/services/sos/operations/getobservation/offerings/temporary/procedures/TREVANO_MOD/observedproperties/meteo:air:temperature/eventtime/${begin_time.toISOString()}/${end_time.toISOString()}`
            },
            {
                name: 'humidity',
                checked: false,
                type: 'line',
                max: 100,
                inverse: false,
                gridIndex: 0,
                xPosition: 'bottom',
                xShow: true,
                showLabel: false,
                yNameLocation: 'end',
                upThreshold: 10,
                bottomThreshold: 10,
                itemStyle: {
                    color: '#800080'
                },
                label: 'Humidity (%)',
                api: `/wa/istsos/services/sos/operations/getobservation/offerings/temporary/procedures/TREVANO_MOD/observedproperties/meteo:air:humidity/eventtime/${begin_time.toISOString()}/${end_time.toISOString()}`
            },
            {
                name: 'pressure',
                checked: false,
                type: 'line',
                max: 1020,
                min: 960,
                gridIndex: 1,
                xPosition: 'bottom',
                yNameLocation: 'start',
                upThreshold: 50,
                bottomThreshold: 50,
                xShow: false,
                showLabel: true,
                inverse: true,
                itemStyle: {
                    color:  ' #CC7C00'
                },
                label: 'Pressure (hPa)',
                api: `/wa/istsos/services/sos/operations/getobservation/offerings/temporary/procedures/TREVANO_MOD/observedproperties/meteo:air:pressure/eventtime/${begin_time.toISOString()}/${end_time.toISOString()}`
            },
            {
                name: 'rain',
                checked: false,
                type: 'bar',
                max: 100,
                gridIndex: 1,
                xPosition: 'bottom',
                yNameLocation: 'start',
                upThreshold: 5,
                bottomThreshold: 0,
                xShow: true,
                showLabel: true,
                inverse: true,
                itemStyle: {
                    color: '#002366'
                },
                label: 'Rain (mm)',
                api: `/wa/istsos/services/sos/operations/getobservation/offerings/temporary/procedures/TREVANO_MOD/observedproperties/meteo:air:rain/eventtime/${begin_time.toISOString()}/${end_time.toISOString()}`
            }
        ],
        isLoading: true
    }
    // onBtnChange(evt) {
    //     // let filtered_parameters = this.state.parameters.filter(item => item.name === evt.target.value)
    //     // filtered_parameters[0].checked = evt.target.checked
        
    //     this.setState({
    //         ...this.state, 
    //         parameters: this.state.parameters.map(
    //             (item, index) =>  item.name === evt.target.value ? {...item, checked: evt.target.checked}
    //                                     : item
    //         )
    //     })
        
    // }
    componentDidMount() {
        var data = this.state.parameters
        let parameters_api = this.state.parameters.map(
            (item, index) => {
                return fetch(
                    item.api,
                    {
                        method: 'GET',
                        headers: new Headers({
                            'Content-Type': 'application/json',
                            'Authorization': 'Basic d2ViYXBwOmJhdG1hbg=='
                        })
                    })
                    .then(response => {
                        if (response.status == 200) {
                            return response.json()
                        } else{
                            return {
                                'data': undefined
                            }
                        }
                    })
                    .then(res => res['data'])
                    .catch((err)=>(
                        console.log(err)
                        
                    ))
            }
        )
        Promise.all(parameters_api).then((values) => {
            for (let index = 0; index < values.length; index++) {
                data[index].data = values[index]
                // console.log(values[index]);
                var vals = values[index][0].result.DataArray.values.map(
                    (item) => item[1]
                )
                
                
                data[index].max = Math.max(vals) + data[index].upThreshold
                data[index].min = Math.min(vals) - data[index].bottomThreshold
                
            }
            this.setState({
                parameters: [
                    ...data
                ],
                isLoading: false
            })

        })
    }
    render() {
        let {width, height, display, styleClass } = this.props
        let { parameters, isLoading } = this.state
        var btnStyle = {
            borderLeft: '6px solid green',
            padding: 5,
            fontSize: '0.9em',
            whiteSpace: 'nowrap',
            marginTop: 15,
            marginBottom: 15,
            height: (height-(22*3))/5
        }
        return(
            <Grid className={styleClass} style={{width: width+'px', padding:'0px 0px 0px 0px'}}>
                <Col md={12} style={{padding: 0, height: height}}>
                    <Carousel>
                        <Carousel.Item style={{height:'100%'}}>
                            <img style={{height:height, margin: 'auto'}} src={stations}/>
                        </Carousel.Item>
                        <Carousel.Item style={{height:'100%'}}>
                            <img style={{height:height, margin: 'auto'}} src={education}/>
                        </Carousel.Item>
                        <Carousel.Item style={{height:'100%'}}>
                            <img style={{height:height, margin: 'auto'}} src={workshop}/>
                        </Carousel.Item>
                        <Carousel.Item style={{height:'100%'}}>
                            <img style={{height:height, margin: 'auto'}} src={maintenance}/>
                        </Carousel.Item>
                        <Carousel.Item style={{height:'100%'}}>
                            <img style={{height:height, margin: 'auto'}} src={board}/>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                {/* <Col md={9}>
                    {isLoading ? <p>Loading</p> : <ChartComponent data={parameters} height={height} />}
                </Col> */}
                {/* <Col md={4}>
                    <h4>Sri Lanka<br/>4onse-Net</h4>
                    <div className='btn-4onse' style={btnStyle}>
                        <a
                            href={'http://geoservice.ist.supsi.ch/4onse/admin/'}
                            target={'_blank'}
                            style={{
                                color: 'black'
                            }}
                        >
                            Data<br/>management */}
                            {/* <img src={istsosLogo} width='100%'/> */}
                        {/* </a>
                    </div>
                    <div className='btn-4onse' style={btnStyle}>
                        <a
                            href={'https://wsdispalyserver.herokuapp.com/'}
                            target={'_blank'}
                            style={{
                                color: 'black'
                            }}
                        >
                            Data<br/>viewer */}
                            {/* <img src={viewerLogo} width='100%'/> */}
                        {/* </a>
                    </div>
                    <div className='btn-4onse' style={btnStyle}>
                        <a
                            href={'http://geoservice.ist.supsi.ch/odk/'}
                            target={'_blank'}
                            style={{
                                color: 'black'
                            }}
                        >
                            Data<br/>maintenance */}
                            {/* <img src={odkLogo} width='100%'/> */}
                        {/* </a>
                    </div>
                    <div className='btn-4onse' style={btnStyle}>
                        <a
                            href={'http://4onse.org/drought/'}
                            target={'_blank'}
                            style={{
                                color: 'black'
                            }}
                        >
                            Drought<br/>monitoring */}
                            {/* <img src={odkLogo} width='100%'/> */}
                        {/* </a>
                    </div>
                </Col> */}
            </Grid>
        )
    }
}

export default DataViewerContainer