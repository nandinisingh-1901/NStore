import React, { useEffect } from 'react'
import products from '../../../API/products'
import ProductCard from '../../FeaturedProducts/ProductCard'

const mobile = products.filter((product) => product.catogeries=== "Electronics")
const fashion = products.filter((product) => product.catogeries=== "fashion")
const BeautyCosmetics = products.filter((product) => product.catogeries=== "Beauty and Cosmetics")
const Sports = products.filter((product) => product.catogeries=== "Sports")

const ShopWomen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="product-details-container favourite-container">
        {BeautyCosmetics.map((item)=>{
          return (
            <ProductCard key={item.id} name={item.name} image={item.image} productObj={item} />
          )
        })}
    </div>
  )
}
export default ShopWomen