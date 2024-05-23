import FoundReport from "@/components/UI/HomePage/FoundReport";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import LostReport from "@/components/UI/HomePage/HeroSection/LostReport";
import Container from "@/components/shared/Container/Container";

const HomePage = () => {
  return (
    <>
      <Container>
        <HeroSection />
        <LostReport></LostReport>
        <FoundReport></FoundReport>
      </Container>
    </>
  );
};

export default HomePage;
