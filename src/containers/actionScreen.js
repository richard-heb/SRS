import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import TabSection from '../components/TabSection';
import Form from '../components/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ActionScreen = (props) => {
  const action = 'replenishment';
  return (
    <div>
    <div className='action-screen' >
      <Header shared={true} title={'Store  System'} />
      <Sidebar action={action}/>
      <Container>
        <Row>
          <Col>
            <div className='page-header'>Mr Bubble Bath Orig Bubbl</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form/>
          </Col>
        </Row>
        <Row>
          <Col>
            <TabSection/>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button>Skip</Button>
          </Col>
        </Row>

      </Container>


      {/* <Button className='action'  style={{position: 'absolute', bottom:'60px', marginLeft: '15px', marginRight: '15px', width:'100%', marginRight:'57px'}} >
            <div className='label' >Skip</div>
          </Button> */}
          
      <Footer shared={true} />
    </div>
    <div style={{ position:'absolute', bottom: '57px', width: '100%', paddingLeft:'56px'}}>
      <div style={{border:'1px solid red', textAlign:'center'}}>
          <div style={{border:'1px solid green',marginLeft: '15px',marginRight: '15px'}}>
            <Button block style={{marginTop:'10px', marginBottom: '25px'}}>Skip</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActionScreen;