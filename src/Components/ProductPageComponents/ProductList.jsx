import './ProductList.css'
import ListView from './ListView'
import GridView from './GridView'
import { useSelector } from 'react-redux'

const ProductList = () => {
  const isGridView = useSelector(state => state.isGrid)
  console.log(isGridView)
  return (
    <div className='ProductList'>
      {isGridView ? <GridView/> : <ListView/>}
    </div>
  )
}

export default ProductList