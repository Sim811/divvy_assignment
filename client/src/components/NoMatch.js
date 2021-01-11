import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import styled from 'styled-components';


const NoMatch = () => (
  <StyledDiv>
  <Header>error 404 - the page you are looking for does not exist</Header>
  <Header>click the link to return</Header>
  <Link to='/'>home</Link>
  
  </StyledDiv>
)

const StyledDiv = styled.div`
  padding: 50px 0;
`


export default NoMatch;