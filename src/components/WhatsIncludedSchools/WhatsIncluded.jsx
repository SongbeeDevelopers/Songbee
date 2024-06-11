import React from "react";

import WiHero from "./IncludedSections/IncludedHero";
import TopRatedPrograms from "./IncludedSections/IncludedPrograms";
import WhatsIncludedWhySongbee from "./IncludedSections/IncludedWhy";
import JrFaq from "../JrFaq.jsx/JrFaq";

import "./WhatsIncluded.css";


function WhatsIncluded() {
  return (
    <div>
      <WiHero />
      <TopRatedPrograms />
      <section className="cup">
        <h2>Customize your program</h2>
        <p>
          Design your program with the help of our experts to fit your needs.{" "}
        </p>
        <a href="mailto:someone@example.com"><button className="jr-landing-btn">Contact Us</button></a>
      </section>
      <WhatsIncludedWhySongbee />
      <div className="bottom-howitworks wsbP">
        <p>
          As an educator, I love working with <br /> Songbee. The learning and clinical <br />
          applications of the songs written for <br /> our Lower School are extremely <br />
          broad and are enhancing many of <br /> our existing programs and services.
          <br />
          -Amrit Daryanani, PHD
        </p>
      </div>
      <div className="ws-yellowLine">
        <img src="/junior/YellowLine.png" alt="" className="yellowLine" />{" "}
        <img className="whysong-Bee" src="/junior/Bee.png" alt="" />
      </div>
      <JrFaq />
    </div>
  );
}

export default WhatsIncluded;
