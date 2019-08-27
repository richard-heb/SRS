import * as React from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { TraditionalWalkTable } from '../components/Table/TraditionalWalkTable';
import { BasicForm as Form } from '../components/Form/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { FaBarcode, FaReply } from 'react-icons/fa';
import { RouteComponentProps } from 'react-router';
import { PSALocationTable } from 'src/components/Table/PSALocationTable';

export type Location = {
  area: number;
  aisle: number;
  side: string;
  segment: number;
  shelf: number;
  capacity: number;
  active?: boolean;
};

type TraditionalWalkProps = RouteComponentProps<{ actionType: string }>;

const locations: Location[] = [
  {
    area: 11,
    aisle: 2,
    side: 'B',
    segment: 6,
    shelf: 2,
    capacity: 100,
    active: true,
  },
  {
    area: 11,
    aisle: 26,
    side: 'A',
    segment: 12,
    shelf: 4,
    capacity: 50,
  },
  {
    area: 11,
    aisle: 20,
    side: 'A',
    segment: 1,
    shelf: 3,
    capacity: 100,
  },
  {
    area: 11,
    aisle: 14,
    side: 'B',
    segment: 9,
    shelf: 4,
    capacity: 75,
  },
];

const TraditionalWalk: React.FC<TraditionalWalkProps> = props => {
  const { actionType } = props.match.params;
  const alertMessage = '';
  const alertType = 'success';
  return (
    <div>
      <Header title="Unified Store Walk" />
      <div
        className={`sub-header`}
        style={{ backgroundColor: '#0A57BA', borderTop: '1px solid #EAEAEA' }}
      >
        <button className={``} style={{ backgroundColor: '#0A57BA' }}>
          <a href="#/store-walk">
            <FaReply />
          </a>
        </button>
        <button className={``} style={{ backgroundColor: '#0A57BA' }}>
          <FaBarcode />
        </button>
      </div>
      <div className="action-screen">
        <Container>
          <Row>
            <Col>
              <div className="page-header">Mr Bubble Bath Orig Bubble</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form />
            </Col>
          </Row>
          {alertMessage ? (
            <Row>
              <Col>
                <Alert variant={alertType}>{alertMessage}</Alert>
              </Col>
            </Row>
          ) : (
            <div />
          )}
          <Row>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <div className="tab-section">
                <TraditionalWalkTable />
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: '1em' }}>
            <Col>
              <div className="tab-section">
                <PSALocationTable locations={locations} actionType="" />
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
};

export default TraditionalWalk;
