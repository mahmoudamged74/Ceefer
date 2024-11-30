
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Product(product) {  

 async function addToCart(productId){

  let {data}= await axios.post("https://ecommerce.routemisr.com/api/v1/cart",{
    productId
  },{
    headers: {
      token: localStorage.getItem("userToken")
    }
  })

  toast.success(data.message,
    {
      autoClose:1000
    })
  
 }
  
  return <>
    <div className='productts'>
      <Link to={`/productDetails/` +product?.product?.id}>
     <img src={product.product.imageCover} className='w-100' alt="" />
       <h6 className='text-main'>{product.product.category?.name}</h6>
       <h5 className='h6'>{product.product.brand?.name}</h5>
       <p className='fw-bolder'>{product.product.title?.split(" ").slice(0,2).join(" ")}</p>
       <div className='d-flex justify-content-between align-items-center my-2'>
         <span>{product.product.price} EGP</span>
         <div>
           <i className='fas fa-star rating-color'></i>
           {product.product.ratingsAverage}
         </div>
       </div>
     </Link>
         <button onClick={()=> addToCart(product?.product?.id)} className='btn bg-main text-white w-100 mb-2'>Add to cart</button>
      </div>
  </>
}
