import './Favorite.css'
import { useSelector } from "react-redux";
import ProductCard from "../FeaturedProducts/ProductCard";
import { useEffect } from 'react';

const Favourite = () => {
  const favourite = useSelector((state) => {return (state.favourite)})
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="product-details-container favourite-container">
      {!favourite.length ? <div>No Favourite Item Found</div>:
      favourite.map((item)=>{
        return (<>
            <ProductCard key={item.id} productObj={item} name={item.name} image={item.image} liked={true}/>
        </>)
      })}
    </div>
  );
};

export default Favourite;
