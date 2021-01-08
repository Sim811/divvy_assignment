import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import styled from 'styled-components';


const Navbar = () => (
  <StyledDiv>

    <Menu secondary>
      <Link to='/'>
        <Menu.Item>
          Home
        </Menu.Item>
      </Link>
    </Menu>

  </StyledDiv>
)

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Navbar;