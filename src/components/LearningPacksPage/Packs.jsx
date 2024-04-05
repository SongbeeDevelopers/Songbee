import React from "react";
import "./LearningPacksPage.css";
import { Learningpacks } from "./Data";

function Packs() {
  return (
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
            style={{ gridTemplateColumns: `repeat(${pack.gridItems},minmax(0,1fr))` }}
          >
            {pack.items.map((item) => (
              <div className="onePackItem">
                <img src={item.imageUrl} alt="" />
                <h3>{item.name}</h3>
                <p>{item.age}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Packs;
