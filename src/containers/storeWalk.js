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
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {openToast} from '../redux/application/actions'
import {Link} from 'react-router-dom';


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
  componentDidMount(){
    const {actions}  = this.props;
    // actions.openToast('dfasdfasdfasdfasdfd');
  }

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
                        <StoreWalkButton label={department.name} actionType={department.type}/>
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

            <Row className='bottom-row'>
              <Col>
                <StoreWalkButton label="Traditional Walk" actionType={'traditional'}/>

                {/* <Link to="/traditional-walk" ><Button className='store-walk-btn'> <div id="overlay"></div>Traditional Walk</Button></Link> */}
                {/* <Button>Traditional Walk</Button> */}
              </Col>
            </Row>
          </Container>
        </div>

      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators({openToast}, dispatch)}
}

export default connect(null, mapDispatchToProps)(StoreWalk);