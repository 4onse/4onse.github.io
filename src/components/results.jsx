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

	  <br/>

	  <h2 className='title-page'>Open Access Papers</h2>
          <Divider />
          <p className='paragraph'>
            Scientific publications from the project.<br />
          </p>
          <Table striped bordered condensed hover>
            <tbody>
              <tr>
                <th>Authors</th>
                <th>Year</th>
                <th>Title</th>
                <th>Journal</th>
                <th>Link</th>
              </tr>
              {/*<tr style={{cursor: "pointer"}} >
                <td><strong>D1.1</strong></td>
                <td>Detailed dissemination plan</td>
                <td><a href='https://b2drop.eudat.eu/s/sEGJ6jxZlUi0Pdd' target='_blank'><img role='presentation' height='25' src={linkIcon}></img></a></td>
              </tr>*/}
              <tr style={{cursor: "pointer"}} >
                <td>Strigaro, D., Cannata, M. & Antonovic, M.</td>
                <td>2019</td>
                <td>Boosting a Weather Monitoring System in Low Income Economies Using Open and Non-Conventional Systems: Data Quality Analysis.</td>
                <td>Sensors</td>
                <td>
                    <a href='https://www.mdpi.com/1424-8220/19/5/1185/htm' target='_blank'><img role='presentation' height='25' src={linkIcon}></img></a>
                </td>
              </tr>
              <tr style={{cursor: "pointer"}} >
                <td>Strigaro, D., Cannata, M., Cardoso, M., Antonovic, M., & Hoffmann, M.</td>
                <td>2017</td>
                <td>EXTENDING THE SCALABILITY OF ISTSOS WITHIN THE 4ONSE PROJECT.</td>
                <td>The International Archives of Photogrammetry, Remote Sensing and Spatial Information Sciences</td>
                <td>
                    <a href='https://www.int-arch-photogramm-remote-sens-spatial-inf-sci.net/XLII-4-W2/155/2017/' target='_blank'><img role='presentation' height='25' src={linkIcon}></img></a>
                </td>
              </tr>
            </tbody>
          </Table>
	  
	  <br/>

	  <h2 className='title-page'>Open Educational Material</h2>
          <Divider />
          <p className='paragraph'>
            Tutorials and workshops from the project.<br />
          </p>
          <Table striped bordered condensed hover>
            <tbody>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Link</th>
              </tr>
              {/*<tr style={{cursor: "pointer"}} >
                <td><strong>D1.1</strong></td>
                <td>Detailed dissemination plan</td>
                <td><a href='https://b2drop.eudat.eu/s/sEGJ6jxZlUi0Pdd' target='_blank'><img role='presentation' height='25' src={linkIcon}></img></a></td>
              </tr>*/}
              <tr style={{cursor: "pointer"}} >
                <td>Building a 4onse weather station.</td>
                <td>Comprehensive guide to build and run the official version of the 4onse weather station. It contains the full documentation both for the hardware and the software components.</td>
                <td>
                    <a href='http://4onse.org/tutorial/' target='_blank'><img role='presentation' height='25' src={linkIcon}></img></a>
                </td>
              </tr>
            </tbody>
          </Table>
	  
	  <br/>

          <h2 className='title-page'>Open Deliverables</h2>
          <Divider />
          <p className='paragraph'>
            Project deliverables open to public.<br />
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
                <td><a href='https://doi.org/10.5281/zenodo.1243676' target='_blank'><img role='presentation' height='25' src={linkIcon}></img></a></td>
              </tr>
              <tr style={{cursor: "pointer"}} >
                <td><strong>D1.2</strong></td>
                <td>Target stakeholder list</td>
                <td><a href='https://doi.org/10.5281/zenodo.1243836' target='_blank'><img role='presentation' height='25' src={linkIcon}></img></a></td>
              </tr>
              <tr style={{cursor: "pointer"}} >
                <td><strong>D1.3</strong></td>
                <td>Project identity manual</td>
                <td><a href='https://doi.org/10.5281/zenodo.1243838' target='_blank'><img role='presentation' height='25' src={linkIcon}></img></a></td>
              </tr>
              <tr style={{cursor: "pointer"}} >
                <td><strong>D1.4</strong></td>
                <td>Dissemination material</td>
                <td><a href='https://doi.org/10.5281/zenodo.1244145' target='_blank'><img role='presentation' height='25' src={linkIcon}></img></a></td>
              </tr>
              <tr style={{cursor: "pointer"}} >
                <td><strong>D1.5</strong></td>
                <td>Dissemination actions report</td>
                <td><a href='https://doi.org/10.5281/zenodo.1244156' target='_blank'><img role='presentation' height='25' src={linkIcon}></img></a></td>
              </tr>
              <tr style={{cursor: "pointer"}} >
                <td><strong>D2.1</strong></td>
                <td>System design report</td>
                <td><a href='https://doi.org/10.5281/zenodo.1244162' target='_blank'><img role='presentation' height='25' src={linkIcon}></img></a></td>
              </tr>
              <tr style={{cursor: "pointer"}} >
                <td><strong>D2.2</strong></td>
                <td>System prototypes report</td>
                <td><a href='https://doi.org/10.5281/zenodo.1244164' target='_blank'><img role='presentation' height='25' src={linkIcon}></img></a></td>
              </tr>
              <tr style={{cursor: "pointer"}} >
                <td><strong>D2.3</strong></td>
                <td>Set-up and installation documentation</td>
                <td><a href='https://doi.org/10.5281/zenodo.1244168' target='_blank'><img role='presentation' height='25' src={linkIcon}></img></a></td>
              </tr>
              <tr style={{cursor: "pointer"}} >
                <td><strong>D2.6</strong></td>
                <td>Documentation for user, developers, calibration, tutorial</td>
                <td><a href='https://doi.org/10.5281/zenodo.1244172' target='_blank'><img role='presentation' height='25' src={linkIcon}></img></a></td>
              </tr>
            </tbody>
          </Table>

          


        </div>
      </div>
    )
  }
})

export default Results
