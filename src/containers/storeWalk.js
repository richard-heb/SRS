import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Tabs from '../components/TabSection';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const mockItems = [
  {
    name: 'Produce',
    count: 15
  },
  {
    name: 'Seafood',
    count: 7
  },
  {
    name: 'Drug/GM',
    count: 18
  },
  {
    name: 'Dairy',
    count: 3
  }
]

class StoreWalk extends React.Component {

  render() {
    return (
      <div >
        <Header />
        <Sidebar/>

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
                    <Row>
                      <Col>
                        <Button>{department.name}
                          {/* <Badge variant="light" style={{height:'40px', width:'40px', borderRadius: '20px', textAlign: 'center', paddingTop: '15px', float: 'right', backgroundColor: 'red', color: 'white', marginBottom: '30px'}}>{department.count}</Badge> */}
                        </Button>
                      
                      </Col>
                    </Row>
                  );
                })
              }
            {/* </div> */}
            <hr/>

            <Row>
              <Col>
                <Button>Traditional Walk</Button>
              </Col>
            </Row>
          </Container>
        </div>

      </div>
    );
  }
}

export default StoreWalk;