import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';


const App = () => (
  <>
    <StyledDiv>
    <Navbar />

    <StyledContainer>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </StyledContainer>
    </StyledDiv>
    <Footer />
  </>
)

const StyledContainer = styled.div`
  margin-right: 33%;
  margin-left: 33%;
  padding-bottom: 5%;
`
const StyledDiv = styled.div`
  background-color: #f6f4e9;
`

export default App;
