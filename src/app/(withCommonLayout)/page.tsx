import FoundReport from "@/components/UI/HomePage/FoundReport";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import LostReport from "@/components/UI/HomePage/HeroSection/LostReport";
import Tips from "@/components/UI/HomePage/HeroSection/Tips";
import Container from "@/components/shared/Container/Container";
import AboutUs from "./../../components/UI/HomePage/HeroSection/AboutUs";
import Different from "@/components/UI/HomePage/HeroSection/Different";
import Banner from "@/components/UI/HomePage/HeroSection/Banner";

const HomePage = () => {
  return (
    <>
      <Container>
        <Banner></Banner>
        <LostReport></LostReport>

        <HeroSection />
        <FoundReport></FoundReport>
        <Tips></Tips>
        <AboutUs></AboutUs>

        <Different></Different>
      </Container>
    </>
  );
};

export default HomePage;
