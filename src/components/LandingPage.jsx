import React from "react";
import Pic1 from "../assets/index1.jpg";
import SGLayout from "./SGLayout";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const LandingPage = () => (
  <SGLayout>
    <img height={500} src={Pic1} alt="" />
  </SGLayout>
);

export default LandingPage;
