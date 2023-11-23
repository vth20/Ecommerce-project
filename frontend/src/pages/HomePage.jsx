import React from 'react'
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../components/Events/Events";
import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";
import Navbar from '../components/Layout/Navbar';
import Newsletter from '../components/Layout/Newletter';
import ProudProducts from '../components/Products/ProundProducts';
import Banner1 from "../img/banner/banner1.jpg"
import Banner from '../components/Layout/Banner';
import TrendingSlider from '../components/Layout/TrendingSlider';
import Banner2 from "../img/banner/banner2.jpg"
import BannerReverse from '../components/Layout/BannerReverse';



const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProudProducts />
      <Banner
        title="Creative harmonious living"
        text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
        img={Banner1}
      />
      <TrendingSlider />
      <BannerReverse
        title="Comfortable & Elegante Living"
        text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
        img={Banner2}
      />
      <Newsletter />
      <Footer />
    </>
  )
}

export default HomePage