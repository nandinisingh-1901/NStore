import products from '../../API/featured'
import ProductCard from "./ProductCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const FeaturedProducts = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      // slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="FeaturedProducts">
      <h1>Featured Products</h1>
      <div className="product-slider">
            <Carousel responsive={responsive} showDots={true} infinite={true} swipeable={true}>
              {products.map((product) => { 
                return(
                <ProductCard key={product.id} name={product.name} image={product.image} productObj={product}/>
              )})}
            </Carousel>
      </div>
    </div>
  );
};

export default FeaturedProducts;
