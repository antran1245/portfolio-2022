import {Container} from 'react-bootstrap';
import { useState } from 'react';
import FrontPage from './components/FrontPage';
import Main from './components/Main';
import './App.css';

function App() {
  const [show, setShow] = useState(true)

  return (
    <Container fluid className='p-0'>
      <FrontPage show={show} setShow={setShow}/>
      <Main show={show}/>
    </Container>
  );
}

export default App;
