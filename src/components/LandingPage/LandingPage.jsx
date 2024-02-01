import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
import HeroSection from "./Hero";
import RegisterForm from "../RegisterForm/RegisterForm";
import HowSongBeeWorks from "./HowSongBeeWorks";
import TestimonialSection from "./Testimonials";

function LandingPage() {
  const [heading, setHeading] = useState("Welcome");
  const history = useHistory();

  const onLogin = (event) => {
    history.push("/login");
  };

  return (
    <div className="container">
      <HeroSection />
      <HowSongBeeWorks />
      <TestimonialSection />
    </div>
  );
}

export default LandingPage;
