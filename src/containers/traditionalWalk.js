import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/Header/subHeader';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import TraditionalWalkTable from '../components/Table/traditionalWalkTable';
import PsaLocation from '../components/Table/psaLocation';
import Form from '../components/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import {FaBarcode, FaReply} from 'react-icons/fa';
import FloatingAction from '../components/Button/floatingAction';
import { Redirect} from 'react-router-dom';

const locs =[
  {
    area: 11,
    aisle: 2,
    side: 'B',
    segment: 6,
    shelf: 2,
    capacity: 100,
    active: true
  },
  {
    area: 11,
    aisle: 26,
    side: 'A',
    segment: 12,
    shelf: 4,
    capacity: 50
  },
  {
    area: 11,
    aisle: 20,
    side: 'A',
    segment: 1,
    shelf: 3,
    capacity: 100
  },
  {
    area: 11,
    aisle: 14,
    side: 'B',
    segment: 9,
    shelf: 4,
    capacity: 75
  }
]

const TraditionalWalk = (props) => {
  const {actionType} = props.match.params
  const alertMessage=''
  const alertType = 'success'
  return (
    <div>
      <Header title='Unified Store Walk'/>
      <div className={`sub-header`} style={{backgroundColor: '#0A57BA', borderTop: '1px solid #EAEAEA'}}>
        <button className={``} style={{backgroundColor: '#0A57BA'}}><a href="#/store-walk"><FaReply  /></a></button> 
        <button className={``} style={{backgroundColor: '#0A57BA'}}><FaBarcode/></button> 
      </div>
    <div className='action-screen' >
      <Container>
        <Row>
          <Col>
            <div className='page-header'>Mr Bubble Bath Orig Bubble</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form/>
          </Col>
        </Row>
        {
          (alertMessage) ? (
            <Row>
              <Col>
                <Alert variant={alertType} >
                  {alertMessage}
                </Alert>
              </Col>
            </Row>
          ) : (<div/>)
        }
        <Row>
          <Col>
          </Col>
        </Row>
        <Row>
          <Col>
          <div className='tab-section'>
            <TraditionalWalkTable />
          </div>
          </Col>
        </Row>
        <Row style={{marginTop: '1em'}}>
          <Col>
          <div className='tab-section'>
            <PsaLocation locations={locs} actionType='' />
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className={`action-btn ${actionType}`}>
              <div id="overlay-action-btn"></div>
              action
            </Button>
          </Col>
        </Row>

      </Container>
      <Footer withMargin={true} />
    </div>
    </div>
  );
}

export default TraditionalWalk;