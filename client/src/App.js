import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route exact path='/' /> */}
      </Switch>
    </Container>
  </>
)

export default App;
