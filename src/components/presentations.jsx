//react
import React from 'react'
//material ui
import Divider from 'material-ui/Divider';
// icon
import linkIcon from '../data/icons/links-icon.png'
//bootstrap
import Table from 'react-bootstrap/lib/Table'

const presentations = [
  {
    date: '14 October 2019',
    conference: 'Forum innovazione, Lugano (poster+booth)',
    title: 'The 4onse monitoring system.',
    authors: 'Cannata M., Strigaro D.',
    link: 'http://www.supsi.ch/home/ricerca/forum-innovazione/Edizione-2019.html'
  },
  {
    date: '26-30 August 2019',
    conference: 'FOSS4G-EU Bucharest, Romania',
    title: 'An open drought monitoring system for the Deduru Oya basin in Sri Lanka in the context of the 4onse project.',
    authors: 'Daniele Strigaro, Massimiliano Cannata, and Milan Antonovic',
    link: 'https://youtu.be/PDI6wchTBaw'
  },
  {
    date: '8-12 April 2019',
    conference: 'EGU General assembly 2019, Wien (poster)',
    title: '4onse: open data, software, hardware and standard to cope with climate data.',
    authors: 'Daniele Strigaro, Massimiliano Cannata, and Milan Antonovic',
    link: 'https://meetingorganizer.copernicus.org/EGU2019/EGU2019-18111.pdf'
  },
  {
    date: '2-5 December 2018',
    conference: 'FOSS4G-Asia, Moratuwa, Sri Lanka',
    title: 'Is a non-conventional low-cost weather station a sustainable monitoring system?',
    authors: 'D. Strigaro, M. Cannata, M. Antonovic, R. Rathnayake, B.H. Sudantha, I. Sahid',
    link: 'http://www.foss4g-asia.org/2018/conference-programme/'
  },
  {
    date: '9-13 September 2018',
    conference: 'European Meteorological Society (EMS), Budapest, Hungary',
    title: 'Evaluation of Open, Reproducible, Low-cost and Non-conventional Weather monitoring System.',
    authors: 'Cannata M., Strigaro D., Cardoso M., Ratnayake R., Sahid I.',
    link: 'https://meetingorganizer.copernicus.org/EMS2018/EMS2018-302-1.pdf'
  },
  {
    date: '27-31 August 2018',
    conference: 'FOSS4G-Africa, Dar es Salaam, Tanzania',
    title: 'Open & Low-cost Monitoring System: evaluation of the 4onse “non-conventional” solution.',
    authors: 'Strigaro D., Cannata M., Cardoso M., Antonovic A., Hoffmann M.',
    link: 'https://2018.foss4g.org/programme/list-of-presentations/'
  },
  {
    date: '16-21 July 2018',
    conference: 'FOSS4G-EU, Guimaraes, Portugal',
    title: '4onse: a modular open, non-conventional and low-cost weather station & monitoring system.',
    authors: 'Massimiliano Cannata, Daniele Strigaro, Imran Shahid, Rangajeewa Ratnayake and B. H. Sudantha',
    link: 'n.a.'
  },
  {
    date: '16-21 July 2018',
    conference: 'FOSS4G-EU, Guimaraes, Portugal',
    title: 'The analysis and deployment of a fully open monitoring system in the Sri Lankan Deduroya basin: the 4onse project.',
    authors: 'Massimiliano Cannata, Daniele Strigaro, Imran Shahid, Rangajeewa Ratnayake and B. H. Sudantha',
    link: 'n.a.'
  },
  {
    date: '8-13 April 2018',
    conference: 'EGU General assembly 2018, Wien (oral)',
    title: '4onse: a modular open, non-conventional and low-cost weather station & monitoring system.',
    authors: 'Strigaro D., Cannata M., Antonovic M., Cardoso M., Hoffmann M.',
    link: 'https://meetingorganizer.copernicus.org/EGU2018/EGU2018-16201-1.pdf'
  },
  {
    date: '8-13 April 2018',
    conference: 'EGU General assembly 2018, Wien (oral)',
    title: '4onse project: preliminary results of a non-conventional monitoring system.',
    authors: 'Strigaro D., Cannata M., Antonovic M., Cardoso M., Hoffmann M.',
    link: 'https://meetingorganizer.copernicus.org/EGU2018/EGU2018-15576.pdf'
  },
  {
    date: '5 January 2018',
    conference: 'Giornata della rierca SUPSI, Canobbio (oral + poster)',
    title: 'The 4onse project.',
    authors: 'M. Cannata, Strigaro D., Mahanama S., Shahid I.',
    link: 'http://www.supsi.ch/isea/dms/isea/docs/eventi-comunicazioni/2018/Flyer_Giornata-asse/Flyer_Giornata%20asse.pdf'
  },
  {
    date: '28 October 2017',
    conference: 'Forum innovazione, Lugano (poster+booth)',
    title: '4onse: analysis of Open, Non-conventional, Sustainable and Effective monitoring systems.',
    authors: 'Cannata M., Strigaro D., Hoffmann M.',
    link: 'http://www.aiti.ch/files/2017/09/Forum-innovazione_Invito_IT.pdf'
  },
  {
    date: '30 September 2017',
    conference: 'ICRD, Bern (poster)',
    title: '4onse: Analysis of 4 times Open non-conventional system for sensing the environment.',
    authors: 'M. Cannata , M. Antonovic , M. Cardoso, M. Hoffmann , D. Strigaro , M. Mahanama , I. Shahidi',
    link: 'https://www.icrd.ch/sessions/enhancing-utilization-of-climate-services-for-strengthening-livelihoods-in-low-and-middle-income-countries/'
  },
  {
    date: '1 September 2017',
    conference: '15th Swiss Geoscience Meeting, Davos',
    title: '4 times open weather station: first results of non-conventional cost-effective monitoring system.',
    authors: 'Massimiliano Cannata , Daniele Strigaro, Mirko Cardoso, Marcus Hoffman, Miln Antonovic',
    link: 'https://geoscience-meeting.ch/sgm2017/massimiliano-cannata-has-submitted-an-abstract/'
  },
  {
    date: '19-20-21 July 2017',
    conference: 'FOSS4G-EU, Paris (oral)',
    title: 'Extending the scalability of istsos within the 4onse project.',
    authors: 'Strigaro D., Cannata M., Cardoso M.,  Antonovic M., Hoffmann M.',
    link: 'https://europe.foss4g.org/2017/Conference'
  },
  {
    date: '23-28 April 2017',
    conference: 'EGU General assembly 2017, Wien (oral)',
    title: '4onse: four times open & non-conventional technology for sensing the environment.',
    authors: 'Cannata M., Ratnayake R., Antonovic M., Strigaro D., Cardoso M., Hoffmann M.',
    link: 'https://meetingorganizer.copernicus.org/EGU2017/EGU2017-18415.pdf'
  },
  {
    date: '23-28 April 2017',
    conference: 'EGU General assembly 2017, Wien (oral)',
    title: 'Sustainable and non-conventional monitoring systems to mitigate natural hazards in low income economies: the 4onse project approach.',
    authors: 'Cannata M., Ratnayake R., Antonovic M., Strigaro D.',
    link: 'https://meetingorganizer.copernicus.org/EGU2017/EGU2017-18435.pdf'
  },
  {
    date: '9-10 February 2017',
    conference: 'XVIII GRASS MEETING - X GFOSS DAY - OSMIT2017, Genova (oral)',
    title: '4onse: reti di monitoraggio ambientale non-convenzionali e completamente aperte',
    authors: 'Cannata M., Antonovic M.,  Strigaro D.',
    link: 'http://www.dicca.unige.it/geomatica/foss4git_2017/programma.html'
  },
  {
    date: '3-4 February 2017',
    conference: 'Environmental Awareness protection & New Challenges, Jaipur (oral)',
    title: '4onse project presentation',
    authors: 'Marcus Hoffmann',
    link: 'http://www.supsi.ch/ist/eventi-comunicazioni/news/2017/2017-02-11.html'
  },
  {
    date: '26-29 January 2017',
    conference: 'FOSS4G – Asia – Hyderabad (oral)',
    title: '4ONSE: four times open monitoring system for sensing the environment',
    authors: 'Cannata M.',
    link: 'http://www.foss4g-asia.org/2017/4onse-four-times-open-monitoring-system-for-sensing-the-environment/'
  },
  {
    date: '18-19 November 2016',
    conference: '14th Swiss Geoscience Meeting – Geneve (poster)',
    title: '4ONSE: 4 times Open and Non-conventional technology for Sensing the Environment',
    authors: 'Cannata M., Mahanama S., Karyanto O., Shahid I.',
    link: 'https://geoscience-meeting.ch/sgm2016/program/session-program/'
  }
]

const Presentations = React.createClass({
  render () {
    return (
      <div id='page-top' style={{minHeight: (this.props.size.height-(this.props.appBar.height+160))+'px'}}>
        <div className='container'>
          <h2 className='title-page'>Presentations</h2>
          <Divider />
          <Table striped bordered condensed hover>
            <tbody>
              <tr>
                <th>Date</th>
                <th>Conference</th>
                <th>Title</th>
                <th>Authors</th>
                <th>Link</th>
              </tr>
              {
                presentations.map(
                  (item, index) => (
                    <tr style={{cursor: "pointer"}} >
                      <td>{item.date}</td>
                      <td>{item.conference}</td>
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

export default Presentations
