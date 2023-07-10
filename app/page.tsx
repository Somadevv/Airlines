"use client";
import { Header } from "@/components/organisms/Header/Header";
import { Banner } from "@/components/organisms/Banner/Banner";
import data from "../data/navigation.json";
const Home = () => {
  return (
    <main>
      <Header data={data} />
      <Banner />
    </main>
  );
};

export default Home;
