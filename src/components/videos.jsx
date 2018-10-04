//react
import React from 'react'
//material ui
import Divider from 'material-ui/Divider';

const Videos = React.createClass({
  render () {
    return (
      <div id='page-top' style={{minHeight: (this.props.size.height-(this.props.appBar.height+160))+'px'}}>
        <div className='container'>
          <h2 className='title-page'>Videos</h2>
          <Divider />
	  <p className='paragraph'>
             <iframe width="560" height="315" src="https://www.youtube.com/embed/AexkcoD791s" frameborder="0" allowfullscreen></iframe>
          </p>
          <p className='paragraph'>
             <iframe width="560" height="315" src="https://www.youtube.com/embed/YOx-EqTcBqQ" frameborder="0" allowfullscreen></iframe>
          </p>
        </div>
      </div>
    )
  }
})

export default Videos
