import React from 'react';
import { Grid, List, Header, Image } from 'semantic-ui-react';
import styled from 'styled-components';



class Footer extends React.Component {
  // state = {
  //   columns =[
  //     { id: 1, item1: 'Get a Demo', item2: 'Get the App', item3: 'Pricing' },
  //     { id: 2, item1: 'Business Credit', item2: 'Expense Management', item3: 'Budgeting', item4: 'Bill Pay' },
  //   ]
  // }

  // renderCol1() {
  //   const col1 = ['Get a Demo', 'Get the App', 'Pricing'];
  //   const list =[]

  //   col1.forEach((i) => {
  //     list.push(
  //       <List.Item>
  //         {i}
  //       </List.Item>
  //     )
  //   })
  // }

  render() {
    return (
      <StyledDiv>
        <Grid stackable columns={6}>
          <Grid.Column>
            <Image centered src='https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/znzozkptgbkm7znd8zkj' />
          </Grid.Column>
          <Grid.Column>
            <Header as='h4'> Get Started </Header>
            <StyledList>
              <List.Item> Get a Demo </List.Item>
              <List.Item> Get the App </List.Item>
              <List.Item> Pricing </List.Item>
            </StyledList>
          </Grid.Column>
          
          <Grid.Column>
            <Header as='h4'> Solutions </Header>
            <StyledList>
              <List.Item> Business Credit </List.Item>
              <List.Item> Expense Management </List.Item>
              <List.Item> Budgeting </List.Item>
              <List.Item> Bill Pay </List.Item>
            </StyledList>
          </Grid.Column>
          
          <Grid.Column>
            <Header as='h4'> Features </Header>
             <StyledList>
               <List.Item> Virtual Cards </List.Item>
               <List.Item> Reimbursements </List.Item>
               <List.Item> Rewards </List.Item>
               <List.Item> Smart Cards </List.Item>
               <List.Item> Software Integrations </List.Item>
               <List.Item> Travel </List.Item>
               <List.Item> Send & Requests </List.Item>
             </StyledList>
          </Grid.Column>
         
          <Grid.Column>
            <Header as='h4'> Resources </Header>
            <StyledList>
              <List.Item> Blog </List.Item>
              <List.Item> Case Studies </List.Item>
              <List.Item> FAQs </List.Item>
              <List.Item> Help Center </List.Item>
              <List.Item> Partners </List.Item>
              <List.Item> Referrals </List.Item>
              <List.Item> COVID-19 Relief </List.Item>
            </StyledList>
          </Grid.Column>
         
          <Grid.Column>
            <Header as='h4'> About </Header>
            <StyledList>
              <List.Item> Careers </List.Item>
              <List.Item> Contact Us </List.Item>
              <List.Item> Update Log </List.Item>
              <List.Item> Security </List.Item>
              <List.Item> Privacy Policy </List.Item>
              <List.Item> Terms & Conditions </List.Item>
            </StyledList>
          </Grid.Column>
        </Grid>
      </StyledDiv>
    )
  }
}

const StyledDiv = styled.div`
   padding: 55px 0;
`
const StyledList = styled(List)`

.item{
  padding: 8px 0 !important;
}
`

export default Footer;