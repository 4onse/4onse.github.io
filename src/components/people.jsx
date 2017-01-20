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
import GitHub from '../data/icons/github-logo.svg'*/
import maxi from '../data/images/team/massimiliano_cannata.jpg'
import marcus from '../data/images/team/marcus_hoffmann.jpg'
import milan from '../data/images/team/milan_antonovic.jpg'
import mirko from '../data/images/team/mirko_cardoso.jpg'
import daniele from '../data/images/team/daniele_strigaro.png'
import rangajeewa from '../data/images/team/rangajeewa_ratnayak.jpg'
import emeshi from '../data/images/team/emeshi_warusavitharana.jpg'
import imran from '../data/images/team/imran_shahid.jpg'
import oka from '../data/images/team/oka.jpg'
import noImage from '../data/images/team/no-image.png'
import contacts from '../data/images/background/contacts.jpg'
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
    let heightCarousel
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
    /*let styleSocial = {
      maxHeight: '25px',
      maxWidth: '25px',
      margin: '3px'
    }*/
    let contactsData = [
      {
        name: 'Prof. Dr. Massimiliano Cannata',
        role: 'Project coordinator',
        partner: 'SUPSI',
        address: <p>Institute of earth sciences<br/><em>Trevano - Blocco C Via Trevano, 6952 Canobbio</em></p>,
        avatar: maxi,
        description: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</p>
      },
      {
        name: 'Dr. Marcus Hoffmann',
        role: 'Communication manager',
        partner: 'SUPSI',
        address: <p>Institute of earth sciences<br/><em>Trevano - Blocco C Via Trevano, 6952 Canobbio</em></p>,
        avatar: marcus,
        description: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</p>
      },
      {
        name: 'Ing. Milan Antonovic',
        role: 'Software developer',
        partner: 'SUPSI',
        address: <p>Institute of earth sciences<br/><em>Trevano - Blocco C Via Trevano, 6952 Canobbio</em></p>,
        avatar: milan,
        description: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</p>
      },
      {
        name: 'Mirko Cardoso',
        role: 'Software developer',
        partner: 'SUPSI',
        address: <p>Institute of earth sciences<br/><em>Trevano - Blocco C Via Trevano, 6952 Canobbio</em></p>,
        avatar: mirko,
        description: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</p>
      },
      {
        name: 'Dr. Daniele Strigaro',
        role: 'Researcher',
        partner: 'SUPSI',
        address: <p>Institute of earth sciences<br/><em>Trevano - Blocco C Via Trevano, 6952 Canobbio</em></p>,
        avatar: daniele,
        description: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</p>
      },
      {
        name: 'Dr. Rangajeewa Ratnayake',
        role: 'Director of Town and Country Planning Department',
        partner: 'UOM',
        address: <p>University of Moratuwa,<br/><em>Colombo, Sri Lanka</em></p>,
        avatar: rangajeewa,
        description: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</p>
      },
      {
        name: 'Prof. P.K.S. Mahanama',
        role: 'Principal investigator',
        partner: 'UOM',
        address: <p>University of Moratuwa,<br/><em>Colombo, Sri Lanka</em></p>,
        avatar: noImage,
        description: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</p>
      },
      {
        name: 'B.H. Sudantha',
        role: 'Hardware expert',
        partner: 'UOM',
        address: <p>University of Moratuwa,<br/><em>Colombo, Sri Lanka</em></p>,
        avatar: noImage,
        description: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</p>
      },
      {
        name: 'P.M.W.P. Kumara',
        role: 'Hydrologist',
        partner: 'UOM',
        address: <p>University of Moratuwa,<br/><em>Colombo, Sri Lanka</em></p>,
        avatar: noImage,
        description: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</p>
      },
      {
        name: 'Prasad Dananjaya Bandara',
        role: 'Research assistant',
        partner: 'UOM',
        address: <p>University of Moratuwa,<br/><em>Colombo, Sri Lanka</em></p>,
        avatar: noImage,
        description: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</p>
      },
      {
        name: 'Emeshi Warusavitharana',
        role: 'Phd candidate',
        partner: 'UOM',
        address: <p>University of Moratuwa,<br/><em>Colombo, Sri Lanka</em></p>,
        avatar: emeshi,
        description: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</p>
      },
      {
        name: 'Dr. Oka Karyanto',
        role: 'Principal investigator',
        partner: 'UGM',
        address: <p>University of Moratuwa,<br/><em>Colombo, Sri Lanka</em></p>,
        avatar: oka,
        description: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</p>
      },
      {
        name: 'Prof. Imran Sahid',
        role: 'Principal investigator',
        partner: 'IST',
        address: <p>University of Moratuwa,<br/><em>Colombo, Sri Lanka</em></p>,
        avatar: imran,
        description: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</p>
      }

    ]
    const filteredContacts = contactsData.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <div id='page-top'>
        <div style={styleCarouselItem}></div>
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
