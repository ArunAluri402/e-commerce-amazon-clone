import React from "react";
import Header from "../Header/Header";
import HeaderBottom from "../Header/HeaderBottom";
import MainSection from "../Main/MainSection";
import Product from "../Main/Product";

import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";
import banner4 from "../../images/banner4.jpg";
import banner5 from "../../images/banner5.jpg";
import banner6 from "../../images/banner6.jpg";
import banner7 from "../../images/banner7.jpg";
import banner8 from "../../images/banner8.jpg";

function Home() {
  const bannerImages = [
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner6,
    banner7,
    banner8,
  ];
  return (
    <div>
      <Header />
      <HeaderBottom />
      <MainSection images={bannerImages} />
      <Product />
    </div>
  );
}

export default Home;
