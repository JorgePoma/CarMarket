import React from 'react';
import styled from  'styled-components';
import Brands from './Brands';
import List from './List';

function Detail() {
  return ( 
  <Container>

      <h3>Brands Available</h3>
        <Brands />
      <h4>Recomenaded for you</h4>
        <List />
  </Container>
  )
}

export default Detail

const Container = styled.div`
  margin-top: 14vh;
`