import React from "react";
import { Link } from "react-router-dom";

import { Learningpacks } from "../LearningPacksData";
import "../LearningPacksPage.css";

function Packs() {
  return (
    <>
      <div className="lp-title">
        <h2>The Learning Packs</h2>
        <div className="lp-links">
          <Link to="/learning-packs#0_12_months">0-12 months</Link>
          <Link to="/learning-packs#1_year">1 Year</Link>
          <Link to="/learning-packs#2_year">2 Year</Link>
          <Link to="/learning-packs#3_year">3 Year</Link>
          <Link to="/learning-packs#4_year">4 Year</Link>
        </div>
      </div>
      <div className="packList">
        {Learningpacks.map((pack) => (
          <div className="onePack" id={pack.scrollId}>
            <h2>{pack.name}</h2>
            <p>{pack.description}</p>
            <span>{pack.delivery}</span>
            <div className="lp-pricing">
              <p>{pack.pricing}</p>
              <p>Skip a month | Cancel anytime</p>
            </div>
            <div
              className="packItems"
              style={{
                gridTemplateColumns: `repeat(${pack.gridItems},minmax(0,1fr))`,
              }}
            >
              {pack.items.map((item) => (
                <Link className="onePackItem" to={`/learning-packs/${item.slug}`} >
                  <img
                    src={item.imageUrl}
                    alt=""
                    height={pack.gridItems === 3 ? 250 : 350}
                    style={{ maxHeight: pack.gridItems === 3 ? 250 : 350 }}
                  />
                  <h3>{item.name}</h3>
                  <p>{item.age}</p>
                </Link>
              ))}
            </div>
            <div className="lp-dots"></div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Packs;
