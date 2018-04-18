//react
import React from 'react'
//material ui
import Divider from 'material-ui/Divider';

const Calendar = React.createClass({
  handleOnload () {
    console.log('loaded');
    var frm = this.refs.iframe.contentDocument;
    var otherhead = frm.getElementsByTagName("head")[0];
    var link = frm.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", "style.css");
    otherhead.appendChild(link);
  },
  componentDidMount () {
    /*this.refs.iframe.addEventListener('load', this.handleOnload);*/
  },
  render () {
    return (
      <div id='page-top' style={{minHeight: (this.props.size.height-(this.props.appBar.height+160))+'px'}}>
        <div className='container'>
          <h2 className='title-page'>Calendar</h2>
          <Divider />
          <iframe
            ref="iframe"
            src="https://calendar.google.com/calendar/embed?src=4onse.supsi%40gmail.com&ctz=Europe/Rome&hl=en_GB"
            style={{border: 0}}
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no">
          </iframe>
        </div>
      </div>
    )
  }
})

export default Calendar
