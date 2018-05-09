// react
import React from 'react'
// react search filter
import SearchInput, {createFilter} from 'react-search-input'
//materia ui
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
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
// import noImage from '../data/images/team/User-Male-2-icon.png'
// import contacts from '../data/images/background/contacts.jpg'
//css
import '../css/people.css';
const KEYS_TO_FILTERS = ['name', 'partner', 'role']

const People = React.createClass({
  getInitialState () {
    return {
      searchTerm: '',
      dialog: {
        open: false,
        data: <p></p>
      }
    }
  },
  handleOpen (contact, el) {
    this.setState(
      {
        dialog: {
          open: true,
          data: contact
        }
      }
    );
  },
  handleClose () {
    this.setState({dialog: { open: false, data: '' }});
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
        name: 'Dr. Tracy C. Thoman',
        role: 'Senior MELD specialist',
        partner: 'World Bank Group',
        address: <p>MELD Made EZ<br/>
                 <em>The Ohio State University Fisher College of Business
         Columbus, Ohio</em></p>,
        avatar: "https://media.licdn.com/dms/image/C5103AQFhoOY38swzfw/profile-displayphoto-shrink_800_800/0?e=1531353600&v=beta&t=5EwxO4Ty66Z15rIvTBboLjDr_9TFOT1W11WAWJ4pbK0",
        description: <p>Senior MELD Specialist for UK Aid-funded Open Data for
          Resilience project. Senior MELD Consultant for the Global Facility
          for Disaster Reduction and Recovery's Innovation Lab. Conduct
          evaluations; facilitate logic model creation and other strategic
          sessions; apply learning to Challenge Fund projects as they are
          implemented. Monitor all Challenge Fund projects.</p>
      },
      {
        name: 'Dr. David Wiberg',
        role: 'Theme Leader - Water Futures',
        partner: 'International Water Management Institute (IWMI)',
        address: <p>Sri Lanka<br/>Colombo</p>,
        avatar: "https://media.licdn.com/dms/image/C5603AQHTqeiI4ESyjw/profile-displayphoto-shrink_800_800/0?e=1531353600&v=beta&t=Mj3NNeWldkkImDDCCZdPivPTSSjgHp4gAmhMl_I7cCE",
        description: <p>Providing advanced research for development leadership
          of the Water Futures Theme and the overall research strategy of IWMI.
          Guiding the development of new and innovative water planning
          decision-support tools to examine possible trade-offs, socio-economic
          and environmental impacts, and opportunities for
          sustainable and equitable water allocation. Developing knowledge
          sharing platforms. Proposing measurable indicators and cost-effective
          ways to monitor agreed Sustainable Development Goals and targets.</p>
      },
      {
        name: 'Dr. Andrea Salvetti (CH)',
        role: 'Department of Territory Canton Ticino',
        partner: 'Head of the Hydrology and Water Resources Management Sector',
        address: <p>Ufficio dei corsi d'acqua<br/>
                 <em>Via Franco Zorzi 13, 6501 Bellinzona</em></p>,
        avatar: "https://media.licdn.com/dms/image/C4D03AQH8XJZyMVQNZA/profile-displayphoto-shrink_800_800/0?e=1531353600&v=beta&t=eoxkHU_4xdl5OZQoDT7ChjXuEYzome1qV0vlNxSqaOA",
        description: <p>Experienced Environmental Engineer with a demonstrated history of
        working in the government administration industry. Strong community and social
        services professional skilled in HEC-RAS, Sustainable Development, ArcGIS,
        Environmental Impact Assessment, and Environmental Awareness.</p>
      },
      {
        name: 'Prof. Rohinton Emmanuel',
        role: 'Glasgow Caledonia University (UK)',
        partner: 'Head of the Sustainable Urban Environment Research Group (SUE-RG)',
        address: <p></p>,
        avatar: "https://www.gcu.ac.uk/universitynews/Rohinton1webpic.jpg",
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
        name: 'Dr. Premachandra Wattage',
        role: 'University of Portsmouth (UK)',
        partner: 'Director of The BEAM Research Centre',
        address: <p></p>,
        avatar: "https://media.licdn.com/dms/image/C5603AQFbyTJO8psPtQ/profile-displayphoto-shrink_800_800/0?e=1531353600&v=beta&t=vE9o0jcY0Jm9PqWdC8y2qHhSMVKc_YlOjJDbPsROoXI",
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
        avatar: "https://media.licdn.com/dms/image/C4D03AQEHQmeXPSVb1w/profile-displayphoto-shrink_800_800/0?e=1531353600&v=beta&t=6n-O-Bo971swg2paJ8wlWuXJvb6NTi9TGs36Vf2EAaA",
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
    const actions = [
      <FlatButton
        label="Close"
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div id='page-top'>
        <Dialog
          modal={false}
          open={this.state.dialog.open}
          onRequestClose={this.handleClose}
          bodyStyle={{padding: '0px'}}
        >
          <Card>
            <CardHeader
              avatar={this.state.dialog.data.avatar}
              title={this.state.dialog.data.name}
              subtitle={<div>{this.state.dialog.data.role}<br />{this.state.dialog.data.partner}</div>}
            />
            <CardText>
              {this.state.dialog.data.description}
            </CardText>
            <CardActions>
              {actions}
            </CardActions>
          </Card>
        </Dialog>
        {/*<div style={styleCarouselItem}></div>*/}
        <div className='container' style={{paddingBottom: '10px'}}>
          <h2 className='title-page'>Contact</h2>
          <Divider />
          <SearchInput className="search-input" onChange={this.searchUpdated} />
          <div className='team-container' >
            <Row>
              {filteredContacts.filter((contact, index) => index<=3 ).map((contact, index) => (
                <Col md={3} sm={6} key={'key-people-'+index} >
                  <div className='team-member' onClick={this.handleOpen.bind(this, contact)}>
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
                  <div className='team-member' onClick={this.handleOpen.bind(this, contact)}>
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
                  <div className='team-member' onClick={this.handleOpen.bind(this, contact)}>
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
                  <div className='team-member'onClick={this.handleOpen.bind(this, contact)}>
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
