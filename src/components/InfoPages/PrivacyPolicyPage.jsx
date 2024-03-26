import React from "react";

import { motion } from "framer-motion";

import privacyPolicy from "../../../public/data/privacyPolicy";

import './InfoPages.css'

function PrivacyPolicyPage({ routeVariants }) {

  return (

    <motion.div
      className="container"
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <h1 className="headerP">{privacyPolicy.title}</h1>
      <p className="policyP">{privacyPolicy.subTitle}</p>

      <h2 className="policyP-two">{privacyPolicy.article1.title}</h2>
      {privacyPolicy.article1.details.map((item) => (
        <div key={privacyPolicy.article1.details.indexOf(item)}>
          <p className="policyP">{item.description}</p>

          <ul>
            {item.bullets.map((bullet) => (
              <li key={item.bullets.indexOf(bullet)}>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p>{privacyPolicy.article1.details2}</p>


      <h2 className="policyP-two">{privacyPolicy.article2.title}</h2>
      <p className="policyP">{privacyPolicy.article2.details}</p>

      <h2>{privacyPolicy.article3.title}</h2>
      <p>{privacyPolicy.article3.details}</p>

      <h2>{privacyPolicy.article4.title}</h2>
      <p>{privacyPolicy.article4.details}</p>

      <h2>{privacyPolicy.article4.title}</h2>
      <p>{privacyPolicy.article4.details}</p>

      <h2>{privacyPolicy.article5.title}</h2>
      <p>{privacyPolicy.article5.details}</p>

      <h2>{privacyPolicy.article36title}</h2>
      <p>{privacyPolicy.article6.details}</p>

      <h2>{privacyPolicy.article7.title}</h2>
      <p>{privacyPolicy.article7.details}</p>

      <h2>{privacyPolicy.article8.title}</h2>
      <p>{privacyPolicy.article8.details}</p>

      <h2>{privacyPolicy.article9.title}</h2>
      <p>{privacyPolicy.article9.details}</p>

      <h2>{privacyPolicy.article10.title}</h2>
      {privacyPolicy.article10.details.map((item) => (
        <p>{item}</p>
      ))}
    </motion.div>
  );
}

export default PrivacyPolicyPage;
