import './GridView.css'
import products from '../../API/products'
import ProductCard from '../FeaturedProducts/ProductCard'
import { useSelector } from 'react-redux'

const GridView = () => {
  const filterArray = useSelector(state => state.filterArray)
  return (
    <div className="grid-view-list">
        {filterArray.map((item)=>{
        return (<>
            <ProductCard key={item.id} productObj={item} name={item.name} image={item.image} liked={false}/>
        </>)
      })}
    </div>
  )
}

export default GridView