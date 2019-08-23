import * as React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Header } from '../components/Header/Header';
import { StoreWalkButton } from '../components/Button/StoreWalk';

export enum MockItemType {
  Adjustments = 'adjustments',
  Skip = 'skip',
  Replenishment = 'replenishment',
  PSA = 'psa',
}

export type MockItem = {
  name: string;
  count: number;
  type: MockItemType;
};

const mockItems: MockItem[] = [
  {
    name: 'Produce',
    count: 15,
    type: MockItemType.Replenishment,
  },
  {
    name: 'Seafood',
    count: 7,
    type: MockItemType.Adjustments,
  },
  {
    name: 'Drug/GM',
    count: 18,
    type: MockItemType.PSA,
  },
  {
    name: 'Dairy',
    count: 3,
    type: MockItemType.Skip,
  },
];

export const StoreWalk: React.FC = () => {
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
};
