import React from "react";
import MainBanner from "../components/home/MainBanner";
import SlideBanner from "../components/home/SlideBanner";
import BeautyPick from "../components/home/BeautyPick";
import Category from "../components/home/Category";
import StylePick from "../components/home/StylePick";
import RecentZip from "../components/home/RecentZip";
import RollingBanner from "../components/home/RollingBanner";
// import RollingBanner from "../components/home/common/RollingBanner";

//스타일

//출력
const Home = () => {
  return (
    <>
      <MainBanner />
      <SlideBanner />
      <BeautyPick />
      <Category />
      <StylePick />
      <RollingBanner />
      <RecentZip />
    </>
  );
};

export default Home;
