import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";

import LearningPackVideo from "./PacksVideo";
import LearningMadeEasy from "./MadeEasy";
import OtherPacks from "./OtherPacks";
import ViewFaq from "./ViewFaq";
import WhyFamiliesLoveUs from "./WhyFamsLoveUs";

import { motion } from "framer-motion";


function LearningPackView({ routeVariants }) {

  const dispatch = useDispatch()
  const { id } = useParams()
  const history = useHistory()

  const learningPack = useSelector(store => store.currentPack)
  const requestData = useSelector((store) => store.jrCheckoutData)
  useEffect(() => {
    dispatch({ type: 'FETCH_CURRENT_PACK', payload: Number(id) })
  }, [id]);



  const handleGetStarted = () => {
    dispatch({
      type: "SET_JR_CHECKOUT_DATA",
      payload: { ...requestData, pack_id: learningPack.id },
    });

      history.push('/jrcheckout')
  }

  return (
    <motion.div
      className="learning-packs"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <section className="pack-view-hero">
        <div className="pack-view-img">
          <img src={learningPack?.image} alt="" />
        </div>
        <div className="pack-view-content">
          <h1>{learningPack?.title} Learning Pack</h1>
          <p className="pv-age">{learningPack?.min_age} - {learningPack?.max_age} Months old</p>
          <p className="pv-pricing">{learningPack?.max_age >= 12 ? "$120/month" : "$80/month"}</p>
          <p className="pv-delivery"> {learningPack?.max_age >= 12 ? "Every 2 months" : "Every 3 months"}</p>
          <button className="jr-landing-btn pv-button" onClick={handleGetStarted}> Get Started</button>
          <p className="pv-skip">Skip a month | Cancel any time</p>
          <div className="lp-dots pack-view-dots"></div>
          <div className="pv-about">
            <h2>About</h2>
            <p>{learningPack?.description}</p>
          </div>
          <h2>What is included?</h2>
          <ul className="pv-included">
              {learningPack.song1_name && <li>{learningPack.song1_name}</li>}
              {learningPack.song2_name && <li>{learningPack.song2_name}</li>}
              {learningPack.song3_name && <li>{learningPack.song3_name}</li>}
              {learningPack.song4_name && <li>{learningPack.song4_name}</li>}
              {learningPack.song5_name && <li>{learningPack.song5_name}</li>}
              {learningPack.song6_name && <li>{learningPack.song6_name}</li>}
              {learningPack.song7_name && <li>{learningPack.song7_name}</li>}
              {learningPack.song8_name && <li>{learningPack.song8_name}</li>}
              {learningPack.song9_name && <li>{learningPack.song9_name}</li>}
              {learningPack.song10_name && <li>{learningPack.song10_name}</li>}
              {learningPack.song11_name && <li>{learningPack.song11_name}</li>}
              {learningPack.song12_name && <li>{learningPack.song12_name}</li>}
              {learningPack.song13_name && <li>{learningPack.song13_name}</li>}
          </ul>
        </div>
      </section>
      <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076677/Songbee/YellowLine_kbce6u.png" alt="" className="yellowLine" />

      <LearningPackVideo />
      <LearningMadeEasy />
      <WhyFamiliesLoveUs />
      <ViewFaq />
      <OtherPacks />
    </motion.div>
  );
}

export default LearningPackView;
