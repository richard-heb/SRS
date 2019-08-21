import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../components/Header';
import StoreWalkButton from '../components/Button/storeWalk';
import { openToast } from '../redux/application/actions';

const mockItems = [
  {
    name: 'Produce',
    count: 15,
    type: 'replenishment',
  },
  {
    name: 'Seafood',
    count: 7,
    type: 'adjustments',
  },
  {
    name: 'Drug/GM',
    count: 18,
    type: 'psa',
  },
  {
    name: 'Dairy',
    count: 3,
    type: 'skip',
  },
];

class StoreWalk extends React.Component {
  render() {
    return (
      <div>
        <Header title="Unified Store Walk" />
        <div className="store-walk">
          <Container>
            <Row>
              <Col>
                <div className="page-header">Please select department</div>
              </Col>
            </Row>
            {mockItems.map(department => {
              return (
                <Row style={{ marginBottom: '1em' }}>
                  <Col>
                    <StoreWalkButton
                      label={department.name}
                      actionType={department.type}
                    />
                  </Col>
                </Row>
              );
            })}

            <hr />

            <Row className="bottom-row">
              <Col>
                <StoreWalkButton label="Traditional Walk" actionType="skip" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators({ openToast }, dispatch) };
};

export default connect(
  null,
  mapDispatchToProps,
)(StoreWalk);
