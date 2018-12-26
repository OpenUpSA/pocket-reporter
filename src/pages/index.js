import React from 'react'
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const Yes = styled.p`
  background: red;
`

const Go = styled(Button)`
  && {
    border: 10px solid red;
  }
`

const IndexPage = () => (
  <div>
    <Yes>asdasdasd</Yes>
    <Go>11 asdasdasd</Go>
  </div>
)

export default IndexPage
