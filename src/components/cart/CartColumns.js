import React from 'react'
import styled from 'styled-components'
import Typography from '@mui/material/Typography';
const CartColumns = () => {
  return (
    <Wrapper>
      <div className='content'>
        {/* <h5>item</h5> */}
        <Typography component="h5" variant="body1" align="center" gutterBottom>
        Item
        </Typography>
        <Typography component="h5" variant="body1" align="center" gutterBottom>
        Quantity
        </Typography>
        <Typography component="h5" variant="body1" align="center" gutterBottom>
       Price
        </Typography>
        <Typography component="h5" variant="body1" align="center" gutterBottom>
        Subtotal
      </Typography>
        {/* <h5>Quantity</h5>
        <h5>Price</h5>
        <h5>subtotal</h5> */}
        <span></span>
      </div>
      <hr />
    </Wrapper>
  )
}

const Wrapper = styled.div`
display: none;
  @media (min-width: 776px) {
    display: block;
    .content {
      margin-bottom: 0rem;
      display: grid;
      grid-template-columns: 316px 1fr 1fr 1fr ;
      justify-items: center;
      // column-gap: 1rem;
      h5 {
        // color: rgba(0, 0, 0, 0.87);
        font-weight: 800;
      }
    }

    span {
      width: 2rem;
      height: 2rem;
    }
    hr {
      // margin-top: 1rem;
      margin-bottom: 3rem;
    }
  }
`

export default CartColumns
