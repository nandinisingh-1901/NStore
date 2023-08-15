import { NavLink } from "react-router-dom";
import products from '../../API/products'
import './ListView.css'
import ProductCard from "../FeaturedProducts/ProductCard";
import ListElement from "./ListElement";
import { useSelector } from "react-redux";
const ListView = () => {
  const filterArray = useSelector(state => state.filterArray)
  return (
    <>
        <div className="list-view">
                {filterArray.map((item)=>{
                    return (<>
            <ListElement key={item.id} productObj={item} name={item.name} image={item.image} liked={false}/>
        </>)
      })}
      </div>
    </>
  );
};

{/* <NavLink to={`/product/${id}`} className="btn-main">
        <button className="btn">Read More</button>
      </NavLink> */}
              


export default ListView;