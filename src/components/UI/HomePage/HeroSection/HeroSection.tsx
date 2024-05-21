"use client";

import Container from "@/components/shared/Container/Container";
import Spline from "@splinetool/react-spline";
const HeroSection = () => {
  return (
    <Container>
      <h1 className="mt-20 font-bold    text-red-600 text-4xl  ">
        This is Home page
      </h1>

      <div className="hero__animation__container">
        <Spline
          // width={200}
          className="hero__animation__frame"
          scene="https://prod.spline.design/oWQ3tAUJvgE8nK8t/scene.splinecode"
        />
      </div>
    </Container>
  );
};

export default HeroSection;
