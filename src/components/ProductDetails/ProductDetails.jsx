import  { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
export default function ProductDetails() {

  const {id}= useParams();
  console.log(id);
  

  const [productDetails, setProductDetails] = useState({});
  const [isLoading, setisLoading] = useState(false);

  async function getProductDetalis(){
    setisLoading(true)
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/`+ id)
    setProductDetails(data.data);
    setisLoading(false)
  }
    
    useEffect(()=>{
      getProductDetalis();
    },[]);

  return <>

  {isLoading ?
  <div className='d-flex justify-content-center align-items-center my-5 py-5'>
  <div className="spinner-border " role="status">
  <span className="sr-only">Loading...</span>
  </div>
  </div>
  
  : 
  
  <div className="row align-items-center py-5">
    <div className="col-md-3">
      <img src={productDetails.imageCover} className='w-100' alt="" />

    </div>
    <div className="col-md-9">
        <p className='fw-bolder'>{productDetails?.title}</p>
        <h6>{productDetails?.Category?.name}</h6>      
        <h6>{productDetails?.description}</h6>      
        <div className='d-flex justify-content-between align-items-center my-3'>
          <span>{productDetails?.price} EGP</span>
          <div>
            <i className='fas fa-star rating-color'></i>
            {productDetails?.ratingsAverage}
          </div>
        </div>
      
          <button className='btn bg-main text-white w-100 mb-3'>Add to cart</button>
       </div>
  </div>}
  
    
  </>
}
