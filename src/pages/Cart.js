import * as React from "react";
import "./Cart.css";
import styled from "styled-components";
import CartColumns from "../components/cart/CartColumns";
import ShoppingCart from "../components/cart/ShoppingCart";
// import data from "../components/cart/data";
import { api_normal_orders_url } from "../utils/constants";
import http from "../utils/http";
import { useNavigate } from "react-router-dom";

export function Cart() {
  const navigate = useNavigate();
  let json = localStorage.getItem("products");
  if(json == null || json == undefined){
    json = "[]";
  }  
  const [products, setProducts] = React.useState(JSON.parse(json));
  const createOrder = () => {
    console.log("createOrder");
    let order = {
      shippingFee: localStorage.getItem("shippingFee"),
      total: localStorage.getItem("total"),
      items: JSON.parse(localStorage.getItem("products"))
    };

    http.post(api_normal_orders_url, order).then((resp) => {
      localStorage.removeItem("products");
      localStorage.removeItem("total");
      localStorage.removeItem("shippingFee");
      navigate("/products", { replace: true });
    });
  };

  return (
    <main>
      <Wrapper className="page">
        <ContentWrapper className="section section-center">
          <CartColumns />
          <ShoppingCart products={products} createOrder={createOrder} />
        </ContentWrapper>
      </Wrapper>
    </main>
  );
}
const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;
const ContentWrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    // margin-bottom: 2rem;
    margin-right: 5rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    // background: var(--clr-primary-5);
    background: #3273dc;
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    // background: var(--clr-black);
    background: #2e7d32;
  }
  .section section-center {
    padding-left: 5px;
    padding-right: 5px;
  }
`;
export default Cart;
