import { useEffect } from "react";
import Brands from "../Brands/Brands";
import CategoryProduct from "../CategoryProduct/CategoryProduct";
import CurratedPicks from "../CurratedPicks/CurratedPicks";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Offer from "../Offer/Offer";
import TopCarousel from "../TopCarousel/TopCarousel";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <TopCarousel />
      <Brands />
      <CurratedPicks />
      <FeaturedProducts />
      <Offer />
      <CategoryProduct />
    </div>
  );
};

export default Home;
