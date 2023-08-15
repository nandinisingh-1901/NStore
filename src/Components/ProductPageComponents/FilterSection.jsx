import { useDispatch } from 'react-redux'
import './FilterSection.css'
import { setFilterProducts} from '../../Redux/Actions/product'
import products from '../../API/products'
import { useEffect, useState } from 'react'

const mobile = products.filter((product) => product.catogeries=== "Electronics")
const fashion = products.filter((product) => product.catogeries=== "fashion")
const BeautyCosmetics = products.filter((product) => product.catogeries=== "Beauty and Cosmetics")
const Sports = products.filter((product) => product.catogeries=== "Sports")

const FilterSection = () => {
  const [isSelect, setIsSelect] = useState({
    all: false,
    mobile: false,
    fashion: false,
    beautycosmetics: false,
    sports: false
  })

  const dispatch = useDispatch()
  const filterAllHandler = () => {
    dispatch(setFilterProducts(products))
    setIsSelect({ all: true, mobile: false,fashion: false,beautycosmetics: false,sports: false})
  }
  const filterMobileHandler = () => {
    dispatch(setFilterProducts(mobile))
    setIsSelect({ all: false, mobile: true,fashion: false,beautycosmetics: false,sports: false})
  }
  const filterSportsHandler = () => {
    dispatch(setFilterProducts(Sports))
    setIsSelect({ all: false, mobile: false,fashion: false,beautycosmetics: false,sports: true})
  }
  const filterBeautyHandler = () => {
    dispatch(setFilterProducts(BeautyCosmetics))
    setIsSelect({ all: false, mobile: false,fashion: false,beautycosmetics: true,sports: false})
  }

  const filterFashionHandler = () => {
    dispatch(setFilterProducts(fashion))
    setIsSelect({ all: false, mobile: false,fashion: true,beautycosmetics: false,sports: false})
  }
  useEffect(() => {
    filterAllHandler()
  }, [])
  return (
    <div className='FilterSection'>
      <div className='filter-section' style={{color: isSelect.all ? "rgb(108, 108, 228)":"black"}} onClick={filterAllHandler}>All</div>
      <div className='filter-section' style={{color: isSelect.mobile ? "rgb(108, 108, 228)":"black"}} onClick={filterMobileHandler}>Electronics</div>
      <div className='filter-section' style={{color: isSelect.sports ? "rgb(108, 108, 228)":"black"}} onClick={filterSportsHandler}>Sports</div>
      <div className='filter-section' style={{color: isSelect.beautycosmetics ? "rgb(108, 108, 228)":"black"}} onClick={filterBeautyHandler}>Beauty</div>
      <div className='filter-section' style={{color: isSelect.fashion ? "rgb(108, 108, 228)":"black"}} onClick={filterFashionHandler}>Fashion</div>
    </div>
  )
}

export default FilterSection