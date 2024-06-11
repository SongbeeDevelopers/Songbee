import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./WhySongbee.css";
import WsFeatures from "./WS-Features";
import WsMusic from "./WS-Music";
import WsHowItWorks from "./WS-HowItWorks";
import JrFaq from "../JrFaq.jsx/JrFaq";
import JrFooter from "../JrFooter/JrFooter";
import JoinTheHive from "./JoinTheHive";

function WhySongbee() {
  const history = useHistory()
  return (
    <div className="whySongbee">
      <div className="ws-hero">
        <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714075147/Songbee/whySongbeeHero_qaklw8.jpg" alt="" />
        <div className="ws-heroContents">
          <h1>Why Songbee?</h1>
          <button onClick={() => history.push('/jrcheckout')} className="jr-landing-btn">Get Started</button>
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076677/Songbee/YellowLine_kbce6u.png"
        alt=""
        className="yellowLine ws-yellowLine"
      />
      {/* <WsFeatures /> */}
      <JoinTheHive/>
      <WsMusic />
      <WsHowItWorks />
      <div className="bottom-howitworks">
        <img className="top-quote" src="/junior/hive-imgs/hive-quotes.webp" alt="" />
        <p>
          As an educator, I love working with Songbee. The learning and clinical
          applications of the songs written for our Lower School are extremely
          broad and are enhancing many of our existing programs and services. We
          are looking forward to building out future programs across all of our
          school divisions that promotes a positive developmental trajectory and
          that enhances individual well-being. - Amrit Daryanani, PHD
        </p>
        <img className="bottom-quote" src="/junior/hive-imgs/hive-quotes.webp" alt="" />
      </div>
      <div className="ws-yellowLine">
        <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076677/Songbee/YellowLine_kbce6u.png" alt="" className="yellowLine" />{" "}
        <img className="whysong-Bee" src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076528/Songbee/Bee_e8eelp.png" alt="" />
      </div>
      <JrFaq/>
    </div>

  );
}

export default WhySongbee;
