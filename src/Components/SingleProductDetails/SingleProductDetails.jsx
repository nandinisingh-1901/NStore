import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import products from "../../API/products";
import { getProductByID } from "../../helpers/products";
import { checkArraySanity, checkObjectSanity } from "../../helpers/utils";
import './SingleProductDetails.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { addToCart, addToCartFromProduct, decreaseQuantity, increaseQuantity } from "../../Redux/Actions/product";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import Alert from '@mui/material/Alert';

import ReactStars from 'react-stars'
import { render } from 'react-dom'
import ReviewCard from "../ReviewCard/ReviewCard";
 
const ratingChanged = (newRating) => {
  console.log(newRating)
}

const prashantImage = "https://scontent.fbho4-2.fna.fbcdn.net/v/t39.30808-6/333095990_1677699749354768_8491086715967028261_n.jpg?stp=c0.216.1392.1392a_dst-jpg_s851x315&_nc_cat=107&ccb=1-7&_nc_sid=da31f3&_nc_ohc=UPbYrRQZ2GIAX-R4oYl&_nc_ht=scontent.fbho4-2.fna&oh=00_AfC2UQ8chrehjwi1hvaf3XLt7mzijDWOfgC-Y0K6hOZlZQ&oe=649C563C"
const SingleProductDetails = () => {
  const [productInfo, setProductInfo] = useState();
  const [addedToCart, setAddedToCart] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [selected, setSelected] = useState({
    S: true,
    M: false,
    L: false,
  });
  
  const [selectedImage, setSelectedImage] = useState(productInfo?.image[0]);
  const navigate = useNavigate();
  const { productID } = useParams();
  const [quantity, setQuantity] = useState(1);

    

  useEffect(() => {
    const selectedPRoduct = getProductByID(productID);
    if (!checkObjectSanity(selectedPRoduct)) {
      navigate("/");
    }
    setProductInfo(selectedPRoduct);
    setSelectedImage(selectedPRoduct?.image[0]);
    console.log(selectedPRoduct);
  }, [productID]);
  const checkQuantity = () =>{
    const index = cart.findIndex((item)=>item.id === productID);
    if(index === -1){
      setQuantity(1);
    }else{
      setQuantity(cart[index].quantity);
    }
  }

  const increaceQuantityHandler = () =>{
    dispatch(increaseQuantity(productID));
    setQuantity((prev)=>prev+1);
    setAddedToCart(false);
  }
  const decreaseQuantityHandler = () =>{
    if(quantity > 0){
      dispatch(decreaseQuantity(productID))
      setQuantity((prev)=>prev-1);
      setAddedToCart(false);
    }
  }
  const addToCartHandler = () => {
    if(quantity === 0){
      toast.error("Please select quantity");
      return;
    }
    // dispatch(addToCart(productInfo));
    dispatch(addToCartFromProduct(productInfo, quantity));
    setAddedToCart(true);
    toast.success("Added to Cart");
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    checkQuantity();
  }, []);
  const isCloths = productInfo?.catogeries === "fashion" || productInfo?.catogeries === "Sports" || productInfo?.catogeries === "Beauty and Cosmetics" ;
  const isPhone = productInfo?.catogeries === "phone";
  
  const sizeSection = <div className="single-product-size">
                        <div className="size-top">Available Size</div>
                        <div className="size-bottom">
                          <div className={`size ${selected.S && "size-selected"}`} onClick={()=>{setSelected((prev)=>{
                            return {
                              S: true,
                              M: false,
                              L: false,
                            }
                          })}}>S</div>
                          <div className={`size ${selected.M && "size-selected"}`} onClick={()=>{setSelected((prev)=>{
                            return {
                              S: false,
                              M: true,
                              L: false,
                            }
                          })}}>M</div>
                          <div className={`size ${selected.L && "size-selected"}`} onClick={()=>{setSelected((prev)=>{
                            return {
                              S: false,
                              M: false,
                              L: true,
                            }
                          })}}>L</div>
                        </div>
                      </div>
  const phoneSection = <div className="single-product-size">
                        <div className="size-top">Available RAM</div>
                        <div className="size-bottom" >
                          <div style={{padding:"0px 10px"}} className={`size ${selected.S && "size-selected"}`} onClick={()=>{setSelected((prev)=>{
                            return {
                              S: true,
                              M: false,
                              L: false,
                            }
                          })}}>4 GB</div>
                          <div  style={{padding:"0px 10px"}} className={`size ${selected.M && "size-selected"}`} onClick={()=>{setSelected((prev)=>{
                            return {
                              S: false,
                              M: true,
                              L: false,
                            }
                          })}}>8 GB</div>
                          <div  style={{padding:"0px 10px"}} className={`size ${selected.L && "size-selected"}`} onClick={()=>{setSelected((prev)=>{
                            return {
                              S: false,
                              M: false,
                              L: true,
                            }
                          })}}>16 GB</div>
                        </div>
                      </div>
  const goToCart = <div className="product-cart-icon" >
                    <button className='add-to-cart cartaddicon' onClick={()=>{navigate('/cart')}} >
                      Go to Cart
                    </button>
                  </div>
  const addToCartButton = <div className="product-cart-icon" >
                            <button className='add-to-cart cartaddicon' onClick={addToCartHandler} disabled={addedToCart}>
                              Add to Cart
                            </button>
                          </div>      
  const showProductInfo = () =>{
    toast.success(productInfo?.name);
  }                                                      
  return (
    <>
    <div className="navigation-menu">
      <div onClick={()=>{navigate('/')}}>PMart</div>
      <div>{" > "}</div>
      <div onClick={()=>{navigate('/products')}}>Product</div>
      <div>{" > "}</div>
      <div onClick={showProductInfo}>{`${productID}`}</div>
    </div>
    <div className="product-details-container">
      <div className="product-details-top">
        <div className="product-details-top-left">
          <div className="image-top-container">
            <img src={selectedImage} alt="" className="image-top"/>
          </div>
          <div className="image-bottom-container">
            <img src={productInfo?.image[0]} alt="" className="image-bottom" onClick={()=>{setSelectedImage(productInfo?.image[0])}}/>
            <img src={productInfo?.image[1]} alt="" className="image-bottom" onClick={()=>{setSelectedImage(productInfo?.image[1])}}/>
            <img src={productInfo?.image[2]} alt="" className="image-bottom" onClick={()=>{setSelectedImage(productInfo?.image[2])}}/>
            <img src={productInfo?.image[3]} alt="" className="image-bottom" onClick={()=>{setSelectedImage(productInfo?.image[3])}}/>
          </div>
        </div>
        <div className="product-details-top-right">
          <div className="single-product-name">{productInfo?.name}</div>
          <div className="single-product-rating">
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            value={productInfo?.rating}
            color2={'#ffd700'} />
          </div>
          <div className="single-product-price">{productInfo?.price}</div>
          {isCloths && sizeSection}
          {isPhone && phoneSection}
          <div className="single-product-quantity">
            <div className="quantity-top">Quantity</div>
            <div className="quantity-bottom">
              <div className="quantity">
                <div className="add-quantity" onClick={increaceQuantityHandler}>+</div>
                <div className="quantity-number">{quantity}</div>
                <div className="sub-quantity" onClick={decreaseQuantityHandler}>-</div>
            </div>
            
            {!addedToCart && addToCartButton}
            {addedToCart && goToCart}
            </div>
          </div>
        </div>
      </div>
      <div className="product-details-bottom">Review
        <div className="Review-Section">
          {/* <ReviewCard image={"https://mui.com/static/images/avatar/1.jpg"} name={"Prashant"} review={"Good Product"}/>
          <ReviewCard image={"https://mui.com/static/images/avatar/1.jpg"} name={"Prashant Srivastava"} review={"Unboxed this phone 2 hours ago and I was finding everything good until I opened the camera and tried different options there. The camera and video options are working fine but as soon as you click on portrait option, the camera gets stuck on a black screen and closes automatically with an error message."}/>
          <ReviewCard image={"https://mui.com/static/images/avatar/1.jpg"} name={"Shashank"} review={"Good Product"}/>
          <ReviewCard image={"https://mui.com/static/images/avatar/1.jpg"} name={"NSJ"} review={"Good Product"}/>
          <ReviewCard image={"https://mui.com/static/images/avatar/1.jpg"} name={"Pushpendra"} review={"Good Product"}/> */}
          {productInfo?.review.map((item)=>{
            return <ReviewCard image={prashantImage} name={"Prashant"} review={item}/>
          })
          }
        </div>
      </div>
    </div>
    </>
  );
};

export default SingleProductDetails;
