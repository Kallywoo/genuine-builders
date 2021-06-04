import { Router } from '@reach/router';
import styled, { createGlobalStyle } from 'styled-components';
import background from './img/brickBackground.png';

import { NotFound } from "./components/NotFound";

import { Header } from './components/Header';
import { Main } from './components/Main';
import { About } from './components/About';
import { Liability } from './components/Liability';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <FlexRouter>
        <NotFound default/>
        <Main path="/"/>
        <About path="/about"/>
        <Liability path="/liability"/>
        <Gallery path="/gallery"/>
        <Contact path="/contact"/>
      </FlexRouter>
      <Footer/>
    </div>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    background-color: #596266;
    background-image: url(${background});

    @media only screen and (max-width: 768px) {
      border: 20px solid #2a3035;
    };
  }

  .App {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  p {
    color: #a0df6d;
  }
`;

const FlexRouter = styled(Router)`
  flex: 1;
`;