import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';


const App = () => (
  <>
    <Navbar />
    <StyledContainer>
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route exact path='/' /> */}
      </Switch>
    </StyledContainer>
  </>
)

const StyledContainer = styled.div`
  margin-right: 33%;
  margin-left: 33%;
  padding-bottom: 5%;
`

export default App;
