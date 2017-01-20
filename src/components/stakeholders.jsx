//react
import React from 'react'
//material ui
import Divider from 'material-ui/Divider';
//bootstrap
import Table from 'react-bootstrap/lib/Table'

const Stakeholders = React.createClass({
  render () {
    return (
      <div id='page-top' style={{minHeight: (this.props.size.height-(this.props.appBar.height+160))+'px'}}>
        <div className='container'>
          <h2 className='title-page'>Stakeholders</h2>
          <Divider />
          <p className='paragraph' style={{textAlign:'left'}}>
            <strong>Stakeholders</strong> are directly supporting the project
            execution by facilitating the access at data, permits, information
            and other relevant aspects. Members will be invited from the irrigation Department and
            from the meteorological Office of Sri Lanka and from other selected interested bodies.
          </p>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Description</th>
              </tr>
              <tr>
                <td><strong>Irrigation Department</strong><br/>Ministry of Irrigation & Water Resources Management</td>
                <td>key stakeholder enabling the successful of the project by facilitating the experimental monitoring network set-up and maintenance.</td>
              </tr>
              <tr>
                <td><strong>Department of Meteorology</strong><br/>Sri Lanka Meteorological Service</td>
                <td>provides authoritative climatic data to validate the system and has a key role in accepting the technology.</td>
              </tr>
              <tr>
                <td><strong>Urban development authority</strong><br/>Regional office, Sri Lanka</td>
                <td>Planning, designing and maintenance of physical infrastructure. Monitoring of climate vulnerability.</td>
              </tr>
              <tr>
                <td><strong>Ministry of Mahaweli development & Environmental</strong><br/>regional offices</td>
                <td>intended to construct a series of reservoirs and hydro electricity plants and develop a large area of land with irrigation in order to facilitate the establishment of new settlements and development of agriculture. Provide early warning for settlement management.</td>
              </tr>
              <tr>
                <td><strong>Local authority of Anuradhapura</strong></td>
                <td>Maintenance of infrastructure, service delivery, and early earning.</td>
              </tr>
              <tr>
                <td><strong>Agriculture department</strong><br/>regional office, Sri Lanka</td>
                <td>Identify the variations of crop patterns, early warning, rationalise the crop calendar</td>
              </tr>
              <tr>
                <td><strong>Disaster Management District office</strong></td>
                <td>providing information on hazard management and vulnerability assessment. (early warning)</td>
              </tr>
              <tr>
                <td><strong>Divisional Secretary</strong></td>
                <td>planning of social services for during extreme climatic conditions</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
})

export default Stakeholders
