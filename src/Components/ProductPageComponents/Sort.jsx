import GridViewIcon from '@mui/icons-material/GridView';
import MenuIcon from '@mui/icons-material/Menu';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import TableRowsRoundedIcon from '@mui/icons-material/TableRowsRounded';
import './Sort.css'
import { useDispatch, useSelector } from 'react-redux';
import { setGridView, setListView } from '../../Redux/Actions/product';
const Sort = () => {
  const isGridView = useSelector(state => state.isGrid)
  const dispatch = useDispatch()
  const gridViewHandler = () => {
    dispatch(setGridView())
  }
  const listViewHandler = () => {
    dispatch(setListView())
  }
  return (
    <div className='sort-section'>
      {isGridView ?<GridViewRoundedIcon onClick={gridViewHandler} fontSize='medium' className='gird-icon'/>:
        <GridViewIcon onClick={gridViewHandler} fontSize='medium' className='gird-icon'/>
      }
      {isGridView ?<MenuIcon onClick={listViewHandler} fontSize='medium' className='gird-icon'/>:
        <TableRowsRoundedIcon onClick={listViewHandler} fontSize='medium' className='gird-icon'/>
      }
      
      
      
    </div>
  )
}

export default Sort