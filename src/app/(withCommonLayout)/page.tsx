import FoundReport from "@/components/UI/HomePage/FoundReport";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import LostReport from "@/components/UI/HomePage/HeroSection/LostReport";
import Tips from "@/components/UI/HomePage/HeroSection/Tips";
import Container from "@/components/shared/Container/Container";
import AboutUs from "./../../components/UI/HomePage/HeroSection/AboutUs";
import Different from "@/components/UI/HomePage/HeroSection/Different";
import Banner from "@/components/UI/HomePage/HeroSection/Banner";
import ParallaxSection from "@/components/UI/HomePage/HeroSection/ParallaxSection";
import Review from "@/components/UI/HomePage/HeroSection/Review";
import TeamMember from "@/components/UI/HomePage/HeroSection/TeamMember";
import Contact from "@/components/UI/HomePage/HeroSection/Contact/Contact";

const HomePage = () => {
  return (
    <>
      <Banner></Banner>
      <Container>
        <AboutUs></AboutUs>
        <LostReport></LostReport>

        <HeroSection />
        <FoundReport></FoundReport>
        <Tips></Tips>

        <ParallaxSection></ParallaxSection>
        <TeamMember></TeamMember>
        <Different></Different>

        <Review></Review>
        <Contact></Contact>
      </Container>
    </>
  );
};

export default HomePage;
