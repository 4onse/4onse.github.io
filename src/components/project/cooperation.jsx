//react
import React from 'react'
//material ui
import Divider from 'material-ui/Divider';
//images
import part from '../../data/images/background/partecipate_.jpg'

const Cooperation = React.createClass({
  render () {
    let heightCarousel
    if (this.props.size.width>=992) {
      heightCarousel = ((992/1.77)-((992*20)/100))
    } else if (this.props.size.width>=750) {
      heightCarousel = ((992/1.77)-((992*20)/100))
    } else {
      heightCarousel = (this.props.size.width/1.77)
    }
    let styleCarouselItem = {
      backgroundImage: 'url('+part+')',
      backgroundPosition:'center',
      height:((heightCarousel*3)/4)+'px'
    }
    return (
      <div id='partecipate'>
        <div style={styleCarouselItem}></div>
        <div className='container'>
          <h2 className='title-page'>Join-us: became a testing partner</h2>
          <Divider />
          <p className='paragraph'>
            <big>
            4onse is a fully Open project where everyone’s contribution is more the welcome 
            and considered very valuable !!!</big></p>
            
          <p className='paragraph'>
            <strong><big>Become a testing partner</big></strong><br></br>
            If you feel to participate in the effort of building and testing non-conventional
            monitoring system for strengthen sustainable data production and management for
            sustainable development subscribe using the form below after reading the 
            <a href={process.env.PUBLIC_URL + "/pdf/4onseInformationSheet.pdf"}> Information Sheet </a> fill the Form below to.
            </p>
          
           <p className='paragraph'> 
            A testing partner:
            <ul>
                <li>has prior access to the project outcomes (documentation, tutorials, 
            source code, etc...)</li>
                <li>participates on his own cost to the experiment</li>
                <li>deploys the 4ONSE station system following the project outcomes (manuals, instructions, components, etc.)</li>
                <li>maintains the system, shares the data and provides feedbacks</li>
            </ul>
                Of course it is based on voluntary work and no mandatory action is requested.
          </p>
          
          <iframe src="https://docs.google.com/forms/d/1l0Wey8-580JLLwOotQvfXOvwIdaCjFsRJPwe7VEWHRU/viewform?embedded=true"
					  width="100%"
					  height="1631"
					  frameBorder="0"
					  marginHeight="0"
					  marginWidth="0">
            Caricamento in corso...
				  </iframe>
        </div>
      </div>
    )
  }
})

export default Cooperation
