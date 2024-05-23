import FoundReport from "@/components/UI/HomePage/FoundReport";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import LostReport from "@/components/UI/HomePage/HeroSection/LostReport";
import Tips from "@/components/UI/HomePage/HeroSection/Tips";
import Container from "@/components/shared/Container/Container";

const HomePage = () => {
  return (
    <>
      <Container>
        <HeroSection />
        <LostReport></LostReport>
        <FoundReport></FoundReport>
        <Tips></Tips>
      </Container>
    </>
  );
};

export default HomePage;
