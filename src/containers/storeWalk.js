import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Tabs from '../components/TabSection';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import StoreWalkButton from '../components/Button/storeWalk';

const mockItems = [
  {
    name: 'Produce',
    count: 15,
    type: 'replenishment'
  },
  {
    name: 'Seafood',
    count: 7,
    type: 'adjustments'
  },
  {
    name: 'Drug/GM',
    count: 18,
    type: 'psa'
  },
  {
    name: 'Dairy',
    count: 3,
    type: 'skip'
  }
]

class StoreWalk extends React.Component {

  render() {
    return (
      <div >
        <Header title='Unified Store Walk' />
        {/* <Sidebar/> */}

        <div className="store-walk">
          <Container>
            <Row>
              <Col>
                <div className='page-header'>Please select department</div>
              </Col>
            </Row>

            {/* <div className='departments' style={{marginTop: '1em'}}> */}
              {
                mockItems.map((department) => {
                  return (
                    <Row style={{marginBottom: '1em'}}>
                      <Col>
                        <StoreWalkButton label={department.name} />
                        {/* <Button >{department.name} */}
                          {/* <Badge variant="light" style={{height:'40px', width:'40px', borderRadius: '20px', textAlign: 'center', paddingTop: '15px', float: 'right', backgroundColor: 'red', color: 'white', marginBottom: '30px'}}>{department.count}</Badge> */}
                        {/* </Button> */}
                      
                      </Col>
                    </Row>
                  );
                })
              }
            {/* </div> */}
            <hr/>

            <Row>
              <Col>
                <StoreWalkButton label='Traditional Walk'/>
                {/* <Button>Traditional Walk</Button> */}
              </Col>
            </Row>
          </Container>
        </div>

      </div>
    );
  }
}

export default StoreWalk;