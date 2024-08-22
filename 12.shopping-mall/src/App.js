import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import cl1 from './img/상품1.png';
import { useState } from 'react';
import pList from './data/ProductList';
// import {num1, num2} from './data/ProductList';

function App() {
  let [cloth, setCloth] = useState(pList);

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='mainBg' />
      
      <Container>
      <Row>
        {
          cloth.map((p, i) => {
            return(
              <PListCol cloth={p} i={i+1}/>
            )
          })
        }
      </Row>
    </Container>
    </div>
  );
}
function PListCol(props) {
  return (
    <>
      <Col lg={4}>
          <img src={`${process.env.PUBLIC_URL}/img/상품${props.i}.png`}/>
          <h4>{props.cloth.title}</h4>
          <p>{props.cloth.price}</p>
        </Col>
    </>
  )
}



/*
  매우 작은 기기(모바일) - xs{} 너비 768px 미만인 화면
  작은 기기(테블릿) - sm{} 너비 992px 미만인 화면
  중간 기기(노트북) - md{} 너비 1200px 미만인 화면
  큰 기기(데스크탑) - lg{} 너비 1200px 이상인 화면

  - 한 행에 12개의 열을 가짐(중간기기 이상일 때)
  <Col md={6}>
*/
export default App;
