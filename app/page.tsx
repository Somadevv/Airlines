"use client";
import { Header } from "@/components/organisms/Header/Header";
import { Banner } from "@/components/organisms/Banner/Banner";
import data from "../data/navigation.json";
import homepageImage from "../public/assets/images/background-image.jpg";
import { TrustPilot } from "@/components/atoms/TrustPilot/TrustPilot";

const Home = () => {
  return (
    <main>
      <Header />
      <Banner
        bannerBackground={homepageImage}
        title="Search and book flights to Australia"
        body="Buy your flights now and pay later"
        image={{
          src: homepageImage,
          alt: "Alternative Airlines",
          caption: <TrustPilot />,
        }}
      >
        children
      </Banner>
    </main>
  );
};

export default Home;
