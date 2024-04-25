import React from "react";
import "./WhySongbee.css";
import WsFeatures from "./WS-Features";
import WsMusic from "./WS-Music";
import WsHowItWorks from "./WS-HowItWorks";
import JrFaq from "../JrFaq.jsx/JrFaq";
import JrFooter from "../JrFooter/JrFooter";

function WhySongbee() {
  return (
    <div className="whySongbee">
      <div className="ws-hero">
        <img src="/junior/whySongbee/whySongbeeHero.jpg" alt="" />
        <div className="ws-heroContents">
          <h1>Why Songbee?</h1>
          <button className="jr-landing-btn">Get Started</button>
        </div>
      </div>
      <img
        src="/junior/YellowLine.png"
        alt=""
        className="yellowLine ws-yellowLine"
      />
      <WsFeatures />
      <WsMusic />
      <WsHowItWorks />
      <div className="bottom-howitworks">
        <p>
          As an educator, I love working with Songbee. The learning and clinical
          applications of the songs written for our Lower School are extremely
          broad and are enhancing many of our existing programs and services. We
          are looking forward to building out future programs across all of our
          school divisions that promotes a positive developmental trajectory and
          that enhances individual well-being. - Amrit Daryanani, PHD
        </p>
      </div>
      <div className="ws-yellowLine">
        <img src="/junior/YellowLine.png" alt="" className="yellowLine" />{" "}
        <img className="whysong-Bee" src="/junior/Bee.png" alt="" />
      </div>
      <JrFaq/>
      <JrFooter/>
    </div>

  );
}

export default WhySongbee;
