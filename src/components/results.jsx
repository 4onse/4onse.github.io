//react
import React from 'react'
//material ui
import Divider from 'material-ui/Divider';
// icon
import linkIcon from '../data/icons/links-icon.png'

const Results = React.createClass({
  render () {
    return (
      <div id='page-top' style={{minHeight: (this.props.size.height-(this.props.appBar.height+160))+'px'}}>
        <div className='container'>
          <h2 className='title-page'>Results</h2>
          <Divider />
          <p className='paragraph'>
            In this page the results reached by the project are available.<br />
            The deliverables are explained and described in a single document for each one.<br />
            Click the following link to keep track of what we have done and what we are doing.
          </p>
          <a href='https://b2drop.eudat.eu/s/XMy1s1cIOlX2JSl' target='_blank'><img role='presentation' height='25' src={linkIcon}></img> Click here</a>
        </div>
      </div>
    )
  }
})

export default Results
