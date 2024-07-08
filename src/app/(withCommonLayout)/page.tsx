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
import PricePlan from "@/components/UI/HomePage/HeroSection/PricePlan";
import PhoneSlider from "@/components/UI/HomePage/HeroSection/Phoneslider/PhoneSlider";
import OurPartner from "@/components/UI/HomePage/HeroSection/OurPartner";
import IBanner from "@/components/UI/HomePage/HeroSection/IBanner";
import FoundReport from "@/components/UI/HomePage/HeroSection/FoundReport";
import RotatingIcons from "@/components/UI/HomePage/HeroSection/RotatingIcons";
import CostumerSupport from "@/components/UI/HomePage/HeroSection/CostumerSupport";
import CostumerSupportWorldWide from "@/components/UI/HomePage/HeroSection/CostumerSupportWorldWide";

const HomePage = () => {
  return (
    <>
      <Banner></Banner>

      <Container>
        <IBanner></IBanner>

        <PhoneSlider></PhoneSlider>
        <LostReport></LostReport>

        <HeroSection />
        <FoundReport></FoundReport>
        <Tips></Tips>
        <RotatingIcons />
        <ParallaxSection></ParallaxSection>
        <TeamMember></TeamMember>
        <Different></Different>

        <PricePlan></PricePlan>
        <AboutUs></AboutUs>
        <CostumerSupport></CostumerSupport>
        <OurPartner></OurPartner>
        <CostumerSupportWorldWide></CostumerSupportWorldWide>
        <Review></Review>
        <Contact></Contact>
      </Container>
    </>
  );
};

export default HomePage;
