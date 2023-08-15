import 'react-multi-carousel/lib/styles.css';
import products from '../../API/products'
import DifferentCategory from './DifferentCategory/DifferentCategory';

const mobile = products.filter((product) => product.catogeries=== "Electronics")
const fashion = products.filter((product) => product.catogeries=== "fashion")
const BeautyCosmetics = products.filter((product) => product.catogeries=== "Beauty and Cosmetics")
const Sports = products.filter((product) => product.catogeries=== "Sports")

const CategoryProduct = () => {
  
  return (
    <>
        <DifferentCategory heading={"Phone"} items={mobile} desktopItem={4}/>
        <DifferentCategory heading={"Fashion"} items={fashion} desktopItem={4}/>
        <DifferentCategory heading={"Beauty & Cosmetics"} items={BeautyCosmetics} desktopItem={4}/>
        <DifferentCategory heading={"Sports"} items={Sports} desktopItem={4}/>
    </>
  )
}

export default CategoryProduct