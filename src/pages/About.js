// npm install --save styled-components

import React from "react";
import styled from "styled-components";
import PageHero from "../components/PageHero";

import "./About.css";
import aboutImg from "../assets/team.jpg";
import missionImg from "../assets/purpose.jpg";
import historyImg from "../assets/historyPhoto.jpg";

const AboutPage = () => {
  return (
    <main className="page ">
      <Wrapper className="page section ">
        {" "}
        {/* needs wrapper instead of div*/}
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>Our Team</h2>
          </div>
          <p>
            <li> Yi </li>
            <li> Wenzhe </li>
            <li> Nada</li>
            <p>We are a group of John Abbott college students in the program of full stack development. We are dedicated to work as a cohesive group to make a user friendly e-commerce website.</p>
          </p>
        </article>
      </Wrapper>
      <Wrapper className="page section ">
        {" "}
        {/* needs wrapper instead of div*/}
        <img src={missionImg} alt="our mission" />
        <article>
          <div className="title">
            <h2>Our Goal</h2>
          </div>
          <p>
            Home furnishing and furniture stores in North America witnessed a 191.2% increase in e-commerce sales after the pandemic as there have been more people adapting work-from-home lifestyle, we- Schrödinger’s REACT team find it is a good
            opportunity to enter the furniture e-commerce business. IKEA has been a big player in the furniture business section but shopping at IKEA’S website could be overwhelming for some people due to the tremendous number of pages customers may
            need to navigate themselves through. Therefore our vision is to build a minimal style website with its core function for online furniture. The design is minimal with functionality as the main objective. Pages should be simple without
            clusters and buttons and links should be easy to see and intuitive to use without compromising the appealing aspect of the website.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  .title {
    text-align: left;
  }
  /* overflow: hidden; */
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default AboutPage;
