//react
import React from 'react'
//material ui
import Divider from 'material-ui/Divider';
// icon
import linkIcon from '../data/icons/links-icon.png'
//bootstrap
import Table from 'react-bootstrap/lib/Table'

const Results = React.createClass({
  render () {
    return (
      <div id='page-top' style={{minHeight: (this.props.size.height-(this.props.appBar.height+160))+'px'}}>
        <div className='container'>
          <h2 className='title-page'>Deliverables</h2>
          <Divider />
          <p className='paragraph'>
            Project results are listed here below grouped by type.<br />
          </p>
          <Table striped bordered condensed hover>
            <tbody>
              <tr>
                <th>Code</th>
                <th>Title</th>
                <th>Link</th>
              </tr>
              {/*<tr style={{cursor: "pointer"}} >
                <td><strong>D1.1</strong></td>
                <td>Detailed dissemination plan</td>
                <td><a href='https://b2drop.eudat.eu/s/sEGJ6jxZlUi0Pdd' target='_blank'><img role='presentation' height='25' src={linkIcon}></img></a></td>
              </tr>*/}
              <tr style={{cursor: "pointer"}} >
                <td><strong>D1.1</strong></td>
                <td>Dissemination Planl</td>
                <td><a href='https://b2drop.eudat.eu/s/sEGJ6jxZlUi0Pdd' target='_blank'><img role='presentation' height='25' src={linkIcon}></img></a></td>
              </tr>
              <tr style={{cursor: "pointer"}} >
                <td><strong>D1.2</strong></td>
                <td>Target stakeholder list</td>
                <td><a href='https://b2drop.eudat.eu/s/p0lK79RvnUGvLPu' target='_blank'><img role='presentation' height='25' src={linkIcon}></img></a></td>
              </tr>
              <tr style={{cursor: "pointer"}} >
                <td><strong>D1.3</strong></td>
                <td>Project identity manual</td>
                <td><a href='https://b2drop.eudat.eu/s/m8PEgm00NffvwSy' target='_blank'><img role='presentation' height='25' src={linkIcon}></img></a></td>
              </tr>
            </tbody>
          </Table>
          
          <h2 className='title-page'>Papers</h2>
          <Divider />
          <p className='paragraph'>
            Project results are listed here below grouped by type.<br />
          </p>
          <Table striped bordered condensed hover>
            <tbody>
              <tr>
                <th>Journal</th>
                <th>Title</th>
                <th>Link</th>
              </tr>
              {/*<tr style={{cursor: "pointer"}} >
                <td><strong>D1.1</strong></td>
                <td>Detailed dissemination plan</td>
                <td><a href='https://b2drop.eudat.eu/s/sEGJ6jxZlUi0Pdd' target='_blank'><img role='presentation' height='25' src={linkIcon}></img></a></td>
              </tr>*/}
              <tr style={{cursor: "pointer"}} >
                <td><strong> </strong></td>
                <td> </td>
                <td>
                    <a href='' target='_blank'><img role='presentation' height='25' src={linkIcon}></img></a>
                </td>
              </tr>
            </tbody>
          </Table>
          
          
        </div>
      </div>
    )
  }
})

export default Results
