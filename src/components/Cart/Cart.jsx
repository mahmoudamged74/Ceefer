import { useEffect, useState } from 'react'

import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function Cart() {
    const [cart, setIsCart] = useState({});
    const [cartId, setcartId] = useState()

    async function getCartProducts(){
      let {data}= await axios.get("https://ecommerce.routemisr.com/api/v1/cart",
        {headers:{
            token:localStorage.getItem("userToken")
        }}
      )
      setcartId(data.data._id )
      setIsCart(data)
      console.log(data);
      
    }

     function removeItemCart(productId){
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
          let {data}= await axios.delete("https://ecommerce.routemisr.com/api/v1/cart/"+productId,{
            headers:{
              token:localStorage.getItem("userToken")
            }
          })
          setIsCart(data)
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      })
      

    }

    async function updataCartProductCount(productId, count){
      let {data}= await axios.put("https://ecommerce.routemisr.com/api/v1/cart/"+productId,
        {
        count
      },{headers:{
        token:localStorage.getItem("userToken")
      }})
      setIsCart(data)
    }
    
    useEffect(()=>{
      getCartProducts()
    },[]);

  return <>
  <section className="top-background">
        <div className="container">
            <div className="back-color pt-50 text-center">
                <h3>Cart</h3>
                <ul className="p-0 m-0">
                    <li><NavLink className="text-white" to="/">Home</NavLink></li>
                    <li className="icon"><i className="fa fa-chevron-right"></i></li>
                    <li><a className="text-white">Contact Us</a></li>
                </ul>
            </div>
        </div>
    </section>

    <section className="cart col-12">
      <div className="container">
        <form>
          <div className="row pb-20">
            {/* Display cart products */}
            {cart.data?.products.length > 0 ? <> <div  className="col-lg-7" style={{ overflow: 'auto' }}>
                <table className="table basket-tbl mb-0 mt-20">
                  <tbody>
                  {cart?.data?.products?.map((cartProduct, index) => (
                    <tr key={index}>
                      <td className="img-product">
                        <img src={cartProduct.product?.imageCover} alt={cartProduct.product?.title || 'Product Image'} />
                      </td>
                      <td>
                        <p>{cartProduct.product?.brand?.name}</p>
                      </td>
                      <td style={{ minWidth: '100px' }}>
                        <div className="currency">
                          <input
                            type="text"
                            name="price"
                            id="price"
                            className="price form-control p-2"
                            value={`${cartProduct.price} EGP`}
                            readOnly
                          />
                        </div>
                      </td>
                      <td style={{ width: '130px' }} className="count-price">
                        <div className="qty d-flex" >
                          <input
                            type="text"
                            name="qty"
                            id="qty"
                            className="qty form-control"
                            value={cartProduct.count}
                            readOnly
                          />
                         <div className="outer-button">
                          <div onClick={()=> updataCartProductCount(cartProduct.product?._id , cartProduct.count + 1)} className="inc button"><i className="fa fa-plus"></i></div>
                         <div onClick={()=> updataCartProductCount(cartProduct.product?._id , cartProduct.count - 1)} className="dec button"><i className="fa fa-minus"></i></div>
                         </div>
                          
                        </div>
                        
                        
                      </td>
                      <td style={{ minWidth: '100px' }}>
                        <div className="currency">
                          <input
                            type="text"
                            name="cost"
                            id="cost"
                            className="cost form-control p-2"
                            value={`${cartProduct.count * cartProduct.price} EGP` }
                            readOnly
                          />
                        </div>
                      </td>
                      <td className="text-center">
                        <i onClick={() =>removeItemCart(cartProduct.product?._id)} className="fa fa-trash-alt"></i>
                      </td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="col-lg-5 mt-20">
            <div className="col-12 p-0 total-price" style={{ overflow: 'auto' }}>
              <h4>Cart total</h4>
              <div className="col-12">
                <table className="table result-tbl mb-0">
                  <tbody>
                    <tr>
                      <td>
                        <h6>Items</h6>
                      </td>
                      <td>
                        <div className="currency">
                          <input type="text" name="subtotal" className="subtotal" id="subtotal" value="" readOnly />
                          <span>{cart.data?.totalCartPrice} EGP</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>VAT @ 20%</h6>
                      </td>
                      <td>
                        <div className="currency">
                          <input type="text" name="vat" className="vat" id="vat" value="" readOnly />
                          <span> {cart.data?.totalCartPrice * 20/100 } EPG </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Total Cost</h6>
                      </td>
                      <td>
                        <div className="currency">
                          <input type="text" name="total" className="total" id="total" value="" readOnly />
                          <span> {cart.data?.totalCartPrice + cart.data?.totalCartPrice * 20/100 } EPG </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <NavLink to={`/address/` + cartId } className="btn btn-color1 mt-10 mb-15" style={{ width: '100%' }}>
                  Checkout
                </NavLink>
              </div>
            </div>
            <p className="notes">
              <i className="fa fa-exclamation-triangle"></i> Shipping online is Free
            </p>
          </div></> 
          : 
          <><h2 className='alert alert-warning text-center my-5'>No Products in your cart</h2></>}
             
            
          </div>
          
        </form>
      </div>
    </section>
    
  </>
}
