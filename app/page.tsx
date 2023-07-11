"use client";
import { Header } from "@/components/organisms/Header/Header";
import { Banner } from "@/components/organisms/Banner/Banner";
import homepageImage from "../public/assets/images/background-image.jpg";
import trustpilotStars from "../public/assets/images/trustpilot.png";
import { TrustPilot } from "@/components/atoms/TrustPilot/TrustPilot";
import trustpilotData from "../data/trustpilot.json";

const Home = () => {
  return (
    <main>
      <Header />
      <Banner
        bannerBackground={homepageImage}
        title="Search and book flights to Australia"
        body="Buy your flights now and pay later"
      >
        <TrustPilot data={trustpilotData} />
      </Banner>
    </main>
  );
};

export default Home;
