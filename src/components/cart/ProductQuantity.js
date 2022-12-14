import React, {Component} from "react";
import styled from 'styled-components'; 
const ProductQuantity = (props) => { 
    return (
        <Wrapper>
            <div className="column center-container">
          {/* <h5 className='amount'> Quantity</h5> */}
          <label className="label">Quantity{'\u00A0'}
              <input id={props.id} className="quantity" type="number" name="quantity" min="0" max="100" 
                defaultValue={props.quantity} 
                onChange={props.changeQuantity} /></label>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.article`
.subtotal {
  display: none;
}
.label{
  font: 1.2rem; 
}
.price {
  display: none;
}
.input{
  width: 200px; 
}
// display: grid;
// grid-template-columns: 200px auto auto;
// grid-template-rows: 75px;
gap: 3rem 1rem;
justify-items: center;
margin-bottom: 3rem;
align-items: center;
.title {
  grid-template-rows: 75px;
  display: grid;
  grid-template-columns: 75px 125px;
  align-items: center;
  text-align: left;
  gap: 1rem;
}
img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: var(--radius);
  object-fit: cover;
}
h5 {
  font-size: 1.2rem;
  margin-bottom: 0;
}

.color {
  color: var(--clr-grey-5);
  font-size: 0.75rem;
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  span {
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    background: red;
    margin-left: 0.5rem;
    border-radius: var(--radius);
  }
}
.price-small {
  color: var(--clr-primary-5);
}
.amount-btns {
  width: 75px;
  button {
    width: 1rem;
    height: 0.5rem;
    font-size: 0.75rem;
  }
  h2 {
    font-size: 1rem;
  }
}
.remove-btn {
  color: var(--clr-white);
  background: transparent;
  border: transparent;
  letter-spacing: var(--spacing);
  background: var(--clr-red-dark);
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius);
  font-size: 0.75rem;
  cursor: pointer;
}
@media (min-width: 776px) {
  .subtotal {
    display: block;
    margin-bottom: 0;
    color: var(--clr-grey-5);
    font-weight: 400;
    font-size: 1rem;
  }
  .price-small {
    display: none;
  }
  .price {
    display: block;
    font-size: 1rem;
    color: var(--clr-primary-5);
    font-weight: 400;
  }
  .name {
    font-size: 0.85rem;
  }
  .color {
    font-size: 0.85rem;
    span {
      width: 0.75rem;
      height: 0.75rem;
    }
  }
  grid-template-columns: 1fr 1fr 1fr 1fr auto;
  align-items: center;
  grid-template-rows: 75px;
  img {
    height: 100%;
  }
  .title {
    height: 100%;
    display: grid;
    grid-template-columns: 100px 200px;
    align-items: center;
    gap: 1rem;
    text-align: left;
  }
  .amount-btns {
    width: 100px;
    button {
      width: 1.5rem;
      height: 1rem;
      font-size: 1rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
}
`
export default ProductQuantity;