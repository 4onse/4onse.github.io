// react
import React from 'react'
// react search filter
import SearchInput, {createFilter} from 'react-search-input'
//materia ui
import Divider from 'material-ui/Divider';
//bootstrap
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
//icons
/*import Linkedin from '../data/icons/linkedin-logo.svg'
import Twitter from '../data/icons/twitter.svg'
import GitHub from '../data/icons/github-logo.svg'
import maxi from '../data/images/team/massimiliano_cannata.jpg'
import marcus from '../data/images/team/marcus_hoffmann.jpg'
import milan from '../data/images/team/milan_antonovic.jpg'
import mirko from '../data/images/team/mirko_cardoso.jpg'
import daniele from '../data/images/team/daniele_strigaro.png'
import rangajeewa from '../data/images/team/rangajeewa_ratnayak.jpg'
import prasad from '../data/images/team/prasad_dananjaya_bandara.jpg'
import mahanama from '../data/images/team/p_k_s_mahanama.jpg'
import sudantha from '../data/images/team/b_h_sudantha.jpg'
import emeshi from '../data/images/team/emeshi_warusavitharana.jpg'
import imran from '../data/images/team/imran_shahid.jpg'
import oka from '../data/images/team/oka.jpg'*/
import noImage from '../data/images/team/User-Male-2-icon.png'
// import contacts from '../data/images/background/contacts.jpg'
//css
import '../css/people.css';
const KEYS_TO_FILTERS = ['name', 'partner', 'role']

const People = React.createClass({
  getInitialState () {
    return { searchTerm: '' }
  },
  searchUpdated (term) {
    this.setState({searchTerm: term})
  },
  render () {
    /*let heightCarousel
    if (this.props.size.width>=992) {
      heightCarousel = ((992/1.77)-((992*20)/100))
    } else if (this.props.size.width>=750) {
      heightCarousel = ((992/1.77)-((992*20)/100))
    } else {
      heightCarousel = (this.props.size.width/1.77)
    }
    let styleCarouselItem = {
      backgroundImage: 'url('+contacts+')',
      backgroundPosition:'center',
      height:((heightCarousel*3)/4)+'px'
    }
    let styleSocial = {
      maxHeight: '25px',
      maxWidth: '25px',
      margin: '3px'
    }*/
    let contactsData = [
      {
        name: 'Dr. Andrea Salvetti (CH)',
        role: 'Department of Territory Canton Ticino',
        partner: 'Head of the Hydrology and Water Resources Management Sector',
        address: <p>Ufficio dei corsi d'acqua<br/>
                 <em>Via Franco Zorzi 13, 6501 Bellinzona</em></p>,
        avatar: noImage,
        description: <p>Experienced Environmental Engineer with a demonstrated history of 
        working in the government administration industry. Strong community and social 
        services professional skilled in HEC-RAS, Sustainable Development, ArcGIS, 
        Environmental Impact Assessment, and Environmental Awareness.</p>
      },
      {
        name: 'Prof. Rohinton Emmanuel',
        role: 'Glasgow Caledonia University (UK)',
        partner: 'Director of The BEAM Research Centre',
        address: <p></p>,
        avatar: noImage,
        description: <p>Professor Rohinton Emmanuel is Professor in Sustainable Design and
        Construction in Glasgow Caledonia University and has over 20 years of University teaching 
        experience in Sri Lanka, Sweden, USA and UK. As an Architect with urban design interests, 
        Rohinton pioneered the inquiry of urban overheating in tropical cities and has taught and
        consulted on climate, energy and environment sensitive design, building and urban 
        sustainability and its assessment, urban heat islands and energy efficiency. 
        Rohinton leads the Sustainable Urban Environment Research Group (SUE-RG) and is an elected
        member of and Secretary to the Board of the International Association for Urban Climate
        (IAUC). He is also a member of a World Meteorological Organization Expert Team on Urban 
        and Building Climatology and the Working Group on ‘Climate Change and the Built 
        Environment’ (W108) of the International Council for Buildings (CIB). He had designed LEED
        certified buildings and has consulted widely in the area of energy efficiency and 
        sustainability in the built environment. Current research includes the development of the 
        next generation of building sustainability assessment systems, natural building materials 
        and processes for energy efficiency in existing buildings and urban heat island 
        measurement in Glasgow, funded by UK and EU funding bodies.</p>
      },
      {
        name: 'Dr. Prem Wattage',
        role: 'University of Portsmouth (AU)',
        partner: 'Director of The BEAM Research Centre',
        address: <p></p>,
        avatar: noImage,
        description: <p>Prem Wattage is an independent consultant dedicated to the intelligent use 
        of natural resources with over thirty years of experience in environmental economics 
        research and management. In addition to working with the Centre for the Economics and 
        Management of Aquatic Resources (CEMARE), University of Portsmouth, he has conducted work 
        for the EU, FAO, WB, ADB, CBD, UNDP, WORLD FISH and UN HABITAT and has undertaken projects 
        for the private sector. Working internationally, his knowledge extends across a variety of 
        natural resources including forests, water, wetlands, coasts, fisheries and tree crops. He 
        regularly publishes resource valuation-related articles in peer-reviewed journals, books 
        and conference proceedings. He also possesses a specialised knowledge of data collection, 
        econometrics and modelling of data, as well as knowledge and experience of several 
        software packages. His current research / consultancy interests are on payments for 
        ecosystems services, valuation, conservation and support for well-being of local 
        communities..</p>
      },
      {
        name: 'Vivien Deparday',
        role: 'The World Bank',
        partner: 'Disaster Risk Management Specialist',
        address: <p></p>,
        avatar: noImage,
        description: <p>Vievien has experience in the geospatial industry as project manager, 
        consultant, and researcher and a particularly strong experience in GIS, geovisualization, 
        collaborative and community mapping, databases, software development, web design, 
        usability, project and client management. Vivien has a broad-based scientific 
        multidisciplinary curriculum with a specialization in GIS. Excellent verbal and written 
        communication skills with fluency in French, English and intermediate level in Spanish and 
        Open Source software enthusiast, supporter and contributor</p>
      },
      

    ]
    const filteredContacts = contactsData.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <div id='page-top'>
        {/*<div style={styleCarouselItem}></div>*/}
        <div className='container' style={{paddingBottom: '10px'}}>
          <h2 className='title-page'>Contact</h2>
          <Divider />
          <SearchInput className="search-input" onChange={this.searchUpdated} />
          <div className='team-container' >
            <Row>
              {filteredContacts.filter((contact, index) => index<=3 ).map((contact, index) => (
                <Col md={3} sm={6} key={'key-people-'+index}>
                  <div className='team-member' >
                    <img role='presentation' src={contact.avatar} width='100%' />
                    <figcaption>
                      <p className='member-name' style={{fontSize:'12px'}}>{contact.name}</p>
                      <p className='designation' style={{margin:'0px'}}>{contact.surname}</p>
                      <p style={{fontSize:'9px',margin:'0px'}}>{contact.role}</p>
                    </figcaption>
                  </div>
                </Col>
              ))}
            </Row>
            <Row>
              {filteredContacts.filter((contact, index) => index>3 && index <= 7 ).map((contact, index) => (
                <Col md={3} sm={6} key={'key-people-'+index}>
                  <div className='team-member' >
                    <img role='presentation' src={contact.avatar} width='100%' />
                    <figcaption>
                      <p className='member-name' style={{fontSize:'12px'}}>{contact.name}</p>
                      <p className='designation' style={{margin:'0px'}}>{contact.surname}</p>
                      <p style={{fontSize:'9px',margin:'0px'}}>{contact.role}</p>
                    </figcaption>
                  </div>
                </Col>
              ))}
            </Row>
            <Row>
              {filteredContacts.filter((contact, index) => index>7 && index <= 11 ).map((contact, index) => (
                <Col md={3} sm={6} key={'key-people-'+index}>
                  <div className='team-member' >
                    <img role='presentation' src={contact.avatar} width='100%' />
                    <figcaption>
                      <p className='member-name' style={{fontSize:'12px'}}>{contact.name}</p>
                      <p className='designation' style={{margin:'0px'}}>{contact.surname}</p>
                      <p style={{fontSize:'9px',margin:'0px'}}>{contact.role}</p>
                    </figcaption>
                  </div>
                </Col>
              ))}
            </Row>
            <Row>
              {filteredContacts.filter((contact, index) => index > 11 ).map((contact, index) => (
                <Col md={3} sm={6} key={'key-people-'+index}>
                  <div className='team-member' >
                    <img role='presentation' src={contact.avatar} width='100%' />
                    <figcaption>
                      <p className='member-name' style={{fontSize:'12px'}}>{contact.name}</p>
                      <p className='designation' style={{margin:'0px'}}>{contact.surname}</p>
                      <p style={{fontSize:'9px',margin:'0px'}}>{contact.role}</p>
                    </figcaption>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    )
  }
})

export default People
