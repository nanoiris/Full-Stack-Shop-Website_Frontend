import React from "react";
import { formatPrice } from "../utils/helpers";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProductPage = ({ closeHandler, row, addToCartHandler }) => {
  return (
    <Wrapper>
      <div className="section section-center page">
        <Link onClick={closeHandler} className="btn" style={{ background: "#1976D2" }}>
          back to products
        </Link>
        <div className="product-center">
          <img src={row.image} alt={row.name} />
          {/* <ProductImages images={images} />*/}
          <section className="content">
            <h2>{row.name}</h2>
            {/*  <Stars stars={stars} reviews={reviews} />*/}
            <h5 className="price">{formatPrice(row.price)}</h5>
            <p className="desc">{row.description}</p>
            <p className="info">
              <span>Available : </span>
              {row.available}
            </p>
            <p className="info">
              <span>SKU :</span>
              {row.sku}
            </p>
            <p className="info">
              <span>Brand :</span>
              {row.brand}
            </p>
            <hr />
            <Link
              className="btn"
              style={{ background: "#1976D2" }}
              onClick={() => {
                addToCartHandler(row);
              }}
            >
              Add to Cart
            </Link>

            {/*  {stock > 0 && <AddToCart product={product} />} */}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
