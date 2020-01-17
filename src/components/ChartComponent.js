import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react'

class ChartComponent extends Component{
    render() {
        let { data } = this.props
        var option = {
            title: {
                text: 'Real-time data from 4onse station',
                subtext: 'TREVANO (CH)',
                left: 'center',
                textStyle: {
                    fontSize: 18
                },
                top: 10,
            },
            textStyle: {
                fontFamily: 'Armata, sans-serif',
            },
            elements: { point: { radius: 0 } },
            axisPointer: {
                link: {xAxisIndex: 'all'}
            },
            legend: {
                data:['Sales']
            },
            grid: [{
                height: '25%',
                left: 55,
                right: 50,
            }, {
                top: '50%',
                height: '25%',
                left: 55,
                right: 50,
            }],
            xAxis: data.map(
                (item, index) => ({
                    // id: item.gridIndex,
                    gridIndex: item.gridIndex,
                    type: 'time',
                    boundaryGap: false,
                    axisLine: {onZero: true},
                    // data: item.data[0].result.DataArray.values.map(item2=>item2[0]),
                    position: item.xPosition,
                    show: item.xShow,
                    showGrid: true,
                    axisLabel: {
                        show: item.showLabel,
                        showMinLabel: false,
                        showMaxLabel: false,
                    }
                })
            ),
            yAxis: data.map(
                (item, index) => ({
                    // id: index,
                    name: item.label,
                    // max: item.max,
                    // min: item.min,
                    scale: true,
                    // spliNumber: 5,
                    // minInterval: 1,
                    // showGrid: true,
                    axisLabel: item.itemStyle,
                    nameLocation: item.yNameLocation,
                    gridIndex: item.gridIndex,
                    // minorSplitLine: {
                    //     show: true,
                    //     lineStyle: {
                    //         color: '#ddd'
                    //     },
                    // },
                    minorTick: {
                        show: true,
                    }
                    // type: 'value',
                })
            ),
            // toolbox: {
            //     feature: {
            //         restore: {},
            //         saveAsImage: {}
            //     }
            // },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    animation: false,
                    label: {
                        backgroundColor: '#505765'
                    }
                }
            },
            dataZoom: [
                {
                    show: true,
                    realtime: true,
                    start: 75,
                    xAxisIndex: [0,1,2,3],
                    end: 100
                }
            ],
            series: data.map(
                (item, index) => ({
                    name: item.label,
                    xAxisIndex: index,
                    yAxisIndex: index,
                    type: item.type,
                    itemStyle: item.itemStyle,
                    showSymbol: false,
                    data: item.data[0].result.DataArray.values.map(
                        item2=>[item2[0], parseFloat(item2[1]).toFixed(1)]
                    )
                })
            )
            // series: [{
            //     name: 'Sales',
            //     type: 'bar',
            //     data: [5, 20, 36, 10]
            // }]
        };
        return(
          <ReactEcharts
            option={option}
            notMerge={true}
            lazyUpdate={true}
            style={{height: this.props.height}}
            theme={"theme_name"}
          />
        )
    }
}

export default ChartComponent