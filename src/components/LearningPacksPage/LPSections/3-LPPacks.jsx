import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { useMediaQuery } from "react-responsive";

import { Learningpacks } from "../LearningPacksData";
import "../LearningPacksPage.css";

function Packs() {

  const isMobile = useMediaQuery({ query: `(max-width: 750px)` })

  const learningPacks = useSelector(store => store.learningPacks)

  return (
    <>
      {/* title for lp section */}
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
        <div className="onePack" id="0_12_months">
          {/* age group header */}
          <h2>0-12 Months</h2>
          <p>Engage both sides of the brain and discover.</p>
          <span>Delivers | every 2 months</span>
          {/* pricing */}
          <div className="lp-pricing">
            <p>$80/Pack</p>
            <p>Skip a month | Cancel anytime</p>
          </div>
          {/* pack details */}
          <div className="packItems"
            style={{ gridTemplateColumns: isMobile ? `1fr` : `repeat(3,minmax(0,1fr))` }}
          >
            {learningPacks.length > 0 && learningPacks.map((pack) => (
              pack.max_age <= 12 && (
                <Link className="onePackItem" to={`/learning-packs/${pack.id}`}>
                  <img
                    src={pack.image}
                    height={isMobile ? 600 : 250}
                    style={{ maxHeight: isMobile ? 350 : 250 }}
                  />
                  <h3>{pack.title}</h3>
                  <span>{pack.min_age} to {pack.max_age} months</span>
                </Link>
              )
            ))}
          </div>
          {/* divider */}
          <div className="lp-dots"></div>
        </div>

        <div className="onePack" id="1_year">
          {/* age group header */}
          <h2>1 Year</h2>
          <p>Build new skills and play to learn.</p>
          <span>Delivers | every 3 months</span>
          {/* pricing */}
          <div className="lp-pricing">
            <p>$120/Pack</p>
            <p>Skip a month | Cancel anytime</p>
          </div>
          {/* pack details */}
          <div className="packItems"
            style={{ gridTemplateColumns: isMobile ? `1fr` : `repeat(2,minmax(0,1fr))` }}
          >
            {learningPacks.length > 0 && learningPacks.map((pack) => (
              pack.max_age > 12 && pack.max_age <= 24 && (
                <Link className="onePackItem" to={`/learning-packs/${pack.id}`}>
                  <img
                    src={pack.image}
                    height={isMobile ? 600 : 250}
                    style={{ maxHeight: isMobile ? 350 : 250 }}
                  />
                  <h3>{pack.title}</h3>
                  <span>{pack.min_age} to {pack.max_age} months</span>
                </Link>
              )
            ))}
          </div>
          {/* divider */}
          <div className="lp-dots"></div>
        </div>

        <div className="onePack" id="2_year">
          {/* age group header */}
          <h2>2 Years</h2>
          <p>Stimulate the brain and start making connections.</p>
          <span>Delivers | every 3 months</span>
          {/* pricing */}
          <div className="lp-pricing">
            <p>$120/Pack</p>
            <p>Skip a month | Cancel anytime</p>
          </div>
          {/* pack details */}
          <div className="packItems"
            style={{ gridTemplateColumns: isMobile ? `1fr` : `repeat(2,minmax(0,1fr))` }}
          >
            {learningPacks.length > 0 && learningPacks.map((pack) => (
              pack.max_age > 24 && pack.max_age <= 36 && (
                <Link className="onePackItem" to={`/learning-packs/${pack.id}`}>
                  <img
                    src={pack.image}
                    height={isMobile ? 600 : 250}
                    style={{ maxHeight: isMobile ? 350 : 250 }}
                  />
                  <h3>{pack.title}</h3>
                  <span>{pack.min_age} to {pack.max_age} months</span>
                </Link>
              )
            ))}
          </div>
          {/* divider */}
          <div className="lp-dots"></div>
        </div>

        <div className="onePack" id="3_year">
          {/* age group header */}
          <h2>3 Years</h2>
          <p>Dive into real world understanding and build cognitive functioning skills.</p>
          <span>Delivers | every 3 months</span>
          {/* pricing */}
          <div className="lp-pricing">
            <p>$120/Pack</p>
            <p>Skip a month | Cancel anytime</p>
          </div>
          {/* pack details */}
          <div className="packItems"
            style={{ gridTemplateColumns: isMobile ? `1fr` : `repeat(2,minmax(0,1fr))` }}
          >
            {learningPacks.length > 0 && learningPacks.map((pack) => (
              pack.max_age > 36 && pack.max_age <= 48 && (
                <Link className="onePackItem" to={`/learning-packs/${pack.id}`}>
                  <img
                    src={pack.image}
                    height={isMobile ? 600 : 250}
                    style={{ maxHeight: isMobile ? 350 : 250 }}
                  />
                  <h3>{pack.title}</h3>
                  <span>{pack.min_age} to {pack.max_age} months</span>
                </Link>
              )
            ))}
          </div>
          {/* divider */}
          <div className="lp-dots"></div>
        </div>

        <div className="onePack" id="4_year">
          {/* age group header */}
          <h2>4 Years</h2>
          <p>Link all learned skills together and make new, creative choices.</p>
          <span>Delivers | every 3 months</span>
          {/* pricing */}
          <div className="lp-pricing">
            <p>$120/Pack</p>
            <p>Skip a month | Cancel anytime</p>
          </div>
          {/* pack details */}
          <div className="packItems"
            style={{ gridTemplateColumns: isMobile ? `1fr` : `repeat(2,minmax(0,1fr))` }}
          >
            {learningPacks.length > 0 && learningPacks.map((pack) => (
              pack.max_age > 48 && pack.max_age <= 60 && (
                <Link className="onePackItem" to={`/learning-packs/${pack.id}`}>
                  <img
                    src={pack.image}
                    height={isMobile ? 600 : 250}
                    style={{ maxHeight: isMobile ? 350 : 250 }}
                  />
                  <h3>{pack.title}</h3>
                  <span>{pack.min_age} to {pack.max_age} months</span>
                </Link>
              )
            ))}
          </div>
          {/* divider */}
          <div className="lp-dots"></div>
        </div>
      </div>
    </>
  );
}

export default Packs;
