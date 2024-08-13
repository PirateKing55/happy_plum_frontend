import { Col, Container, Row } from 'react-bootstrap';
import ProgressGraph from './ProgresGraph';
import ProgressChart from './ProgressChart';
import Avatar from './Avatar';
import BarChart from './BarChart';
import LevelMap from './LevelMap';

function Dashboard() {
  return (<>
    <Container>
      <Row><Col md={12}><Avatar/></Col>
    <Col md={8}> <ProgressGraph/></Col>
    <Col md={4}> <ProgressChart/></Col>
    {/* <Col xs={12} lg={6}> <BarChart/></Col>
    <Col xs={12} lg={6}> <LevelMap/></Col> */}
    </Row>
   
    
    </Container>
   
    
    </>
  );
}

export default Dashboard;