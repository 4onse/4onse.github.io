//react
import React from 'react'
//material ui
import Divider from 'material-ui/Divider';
// icon
import linkIcon from '../data/icons/links-icon.png'
//bootstrap
import Table from 'react-bootstrap/lib/Table'


const Newsletters = React.createClass({
  render () {
    return (
      <div id='page-top' style={{minHeight: (this.props.size.height-(this.props.appBar.height+160))+'px'}}>
        <div className='container'>
          <h2 className='title-page'>Newsletters</h2>
          <Divider />
          <p className='paragraph'>
            Project newsletters are listed here below grouped by type.<br />
          </p>
          <Table striped bordered condensed hover>
            <tbody>
              <tr>
                <th>Number</th>
                <th>Issue</th>
                <th>Link</th>
              </tr>
              {/*<tr style={{cursor: "pointer"}} >
                <td><strong>D1.1</strong></td>
                <td>Detailed dissemination plan</td>
                <td><a href='https://b2drop.eudat.eu/s/sEGJ6jxZlUi0Pdd' target='_blank'><img role='presentation' height='25' src={linkIcon}></img></a></td>
              </tr>*/}
              <tr style={{cursor: "pointer"}} >
                <td><strong>#1</strong></td>
                <td>August 2017</td>
                <td><a href={process.env.PUBLIC_URL + "/pdf/Newsletter_1.pdf"} target='_blank'><img role='presentation' height='25' src={linkIcon}></img></a></td>
              </tr>
	            <tr style={{cursor: "pointer"}} >
                <td><strong>#2</strong></td>
                <td>August 2018</td>
                <td><a href={process.env.PUBLIC_URL + "/pdf/Newsletter_2.pdf"} target='_blank'><img role='presentation' height='25' src={linkIcon}></img></a></td>
              </tr>
              
            </tbody>
          </Table>
          
          
          
        </div>
      </div>
    )
  }
})

export default Newsletters
