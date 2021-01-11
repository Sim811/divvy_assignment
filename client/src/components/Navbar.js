import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react';
import styled from 'styled-components';


const Navbar = () => (
  <OuterDiv>
    <Link to='/'>
      <Image size='small' src='https://getdivvy.com/wp-content/uploads/2019/05/Divvy-Logo-19.png' />
    </Link>

    <StyledMenu  secondary>
      <Menu secondary>
        <Link to='/'>
          <Menu.Item>
            <h3>Home</h3>
          </Menu.Item>
        </Link>
        <Link to='/features'>
          <Menu.Item>
            <h3>Features</h3>
          </Menu.Item>
        </Link>
        <Link to='/resources'>
          <Menu.Item>
            <h3>Resources</h3>
          </Menu.Item>
        </Link>
        <Link to='/covid'>
          <Menu.Item>
            <h3>COVID-19 Relief</h3>
          </Menu.Item>
        </Link>
      </Menu>
    </StyledMenu>

    <StyledMenu  secondary>
      <Menu secondary>
        <Link to='/login'>
          <Menu.Item>
            <h3>Login</h3>
          </Menu.Item>
        </Link>
        <Link to='/sign_up'>
          <Menu.Item>
            <h3>Sign Up</h3>
          </Menu.Item>
        </Link>
      </Menu>
    </StyledMenu>
  </OuterDiv>
)
const OuterDiv = styled.div`
  display: flex;
  padding: 5px 10px;
  justify-content: space-between;
  align-items: flex-start;
`

// const StyledDiv = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center; 
//  border: 1px solid red;
// `
const StyledMenu = styled(Menu)`
  /* border: 2px solid green !important; */
  padding: 0 25px;
  .menu{
    /* border: 1px solid yellow; */
    .item{
      &:hover{
        background: #dcdace !important;
      }
    }
  }
`

export default Navbar;