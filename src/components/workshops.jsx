//react
import React from 'react'
//material ui
import Divider from 'material-ui/Divider';
// icon
import linkIcon from '../data/icons/links-icon.png'
//bootstrap
import Table from 'react-bootstrap/lib/Table'

const workshops = [
  {
    date: '28 November 2019',
    location: 'Uswetakeiyawa, Sri Lanka',
    partecipants: 30,
    title: '4ONSE Final Workshop',
    authors: 'M. Cannata, R. Rangajeewa, B.H. Sudantha, D.Strigaro, E. Warusawitharana',
    link: null
  },
  {
    date: '13 Novemeber 2019',
    location: 'Islamabad, Pakistan',
    partecipants: 53,
    title: '4 times open solution for SENSING THE ENVIRONMENT',
    authors: 'I. Shahid, H. Ahmad',
    link: null
  },
  {
    date: '17-18 September 2019',
    location: 'Pisa, Italia',
    partecipants: 21,
    title: 'Open monitoring system with 4onse',
    authors: 'M. Cannata, D. Strigaro',
    link: 'http://www.freewat.eu/events/2nd-freewat-international-workshop-17th-september-2019-h14-19-pisa-italy'
  },
  {
    date: '2-3 July 2019',
    location: 'Kurunegala, Sri Lanka',
    partecipants: 47,
    title: '4onse state of the art and sustainability discussion',
    authors: 'M. Cannata, D. Strigaro, M. Hoffmann, R. Ratnayake, BH Sudantha, E.J. Warusavitharana',
    link: null
  },
  {
    date: '15 March 2019',
    location: 'Divisional Secretariat Office, Walapane, Sri Lanka',
    partecipants: 40,
    title: 'Weather stations for climate resilient agriculture',
    authors: 'R. Ratnayake, B.H. Sudantha',
    link: null
  },
  {
    date: '2 December 2018',
    location: 'University of Moratuwa, Moratuwa, Sri Lanka',
    partecipants: 52,
    title: 'Training on building a 4ONSE weather station',
    authors: 'M. Cannata, D. Strigaro, R. Ratnayake, BH Sudantha, I. Shahid',
    link: null
  },
  {
    date: '10 October 2018',
    location: 'SUPSI, Lugano, Switzerland',
    partecipants: 23,
    title: '4ONSE: build a scientific weather monitoring system based on open hardware, open software, open standard and open data',
    authors: 'R, Ratnayake, B.H. Sudantha, P.K.S. Mahanama',
    link: null
  },
  {
    date: '29 September 2018',
    location: 'Divisional Secretariat Office, Lankapura, Sri Lanka',
    partecipants: 40,
    title: 'Weather stations for climate resilient agriculture',
    authors: 'R, Ratnayake, B.H. Sudantha, P.K.S. Mahanama',
    link: null
  },
  {
    date: '21 March 2018',
    location: 'Lanka Rainwater Harvesting Forum, Battaramulla, Sri Lanka',
    partecipants: 15,
    title: 'Open source weather station community of practice workshop',
    authors: 'Dr Yann Chemin, GFDRR and Lanka Rainwater Harvesting Forum',
    link: null
  },
  {
    date: '15 November 2017',
    location: 'University of Moratuwa, Moratuwa, Sri Lanka',
    partecipants: 80,
    title: '4onse demonstration workshop',
    authors: '4ONSE project team',
    link: null
  },
  {
    date: '13 November 2017',
    location: 'Hotel Kandyan Reach, Kurunegala, Sri Lanka',
    partecipants: 20,
    title: '4onse demonstration workshop',
    authors: '4ONSE project team',
    link: null
  },
  {
    date: '19 July 2017',
    location: 'University of Moratuwa, Sri Lanka',
    partecipants: 30,
    title: 'Workshop and Industry Forum on emerging Internet of Things (IoT) Applications',
    authors: 'Faculty of Information Technology, University of Moratuwa',
    link: null
  },
  {
    date: '18 July 2017',
    location: 'FOSS4G-EU, Paris',
    partecipants: 24,
    title: 'Fully Open Monitoring System',
    authors: 'Cannata M., Antonovic M., Cardoso M., Strigaro D., Chemin Y., Delucchi L.',
    link: 'https://europe.foss4g.org/2017/Workshops'
  },
  {
    date: '8 February 2017',
    location: 'University of Genova, Italy',
    partecipants: 30,
    title: 'Costruire un sistema di monitoraggio ambientale aperto',
    authors: 'Delucchi L., Cannata M, Chemin Y.',
    link: 'http://www.dicca.unige.it/geomatica/foss4git_2017/#monitoring'
  },
  {
    date: '6-7 December 2016',
    location: 'Fondazione Edmund Mach - Trento',
    partecipants: 25,
    title: 'Building fully open climatic monitoring system.',
    authors: 'Cannata M., Delucchi L., Chemin Y.',
    link: 'https://geoscience-meeting.ch/sgm2016/program/session-program/'
  },
  {
    date: '21-23 November 2016',
    location: 'Colombo - Sri Lanka',
    partecipants: 35,
    title: 'First policy workshop',
    authors: '4onse team',
    link: null
  },
]

const Workshops = React.createClass({
  render () {
    return (
      <div id='page-top' style={{minHeight: (this.props.size.height-(this.props.appBar.height+160))+'px'}}>
        <div className='container'>
          <h2 className='title-page'>Workshops</h2>
          <Divider />
          <Table striped bordered condensed hover>
            <tbody>
              <tr>
                <th>Date</th>
                <th>Location</th>
                <th>N° partecipants</th>
                <th>Title</th>
                <th>Authors</th>
                <th>Link</th>
              </tr>
              {
                workshops.map(
                  (item, index) => (
                    <tr style={{cursor: "pointer"}} >
                      <td>{item.date}</td>
                      <td>{item.location}</td>
                      <td>{item.partecipants}</td>
                      <td>{item.title}</td>
                      <td>{item.authors}</td>
                      <td>
                          <a href={item.link} target='_blank'><img role='presentation' height='25' src={linkIcon}></img></a>
                      </td>
                    </tr>
                  )
                )
              }
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
})

export default Workshops
