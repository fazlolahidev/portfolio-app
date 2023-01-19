import React from "react";
import Title from "../UI/Title";
import TabPortfolio from "./TabPortfolio";

const Portfolio = () => {

  return (
    <section id='Portfolio' className="container mt-20">
      <Title title="portfolio" des="most recent work" />

      <TabPortfolio />
    </section>
  );
};

export default Portfolio;
