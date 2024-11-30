import axios from 'axios'
import {  useFormik } from 'formik'
import  { useState } from 'react'
import { useParams } from 'react-router-dom'
import * as Yup from 'yup'


const Address = () => {
const {cartId}=useParams()
  const [errorMsg,seterrorMsg]=useState('')
const [isloading, setisloading] = useState(false)

const validationSchema= Yup.object({
  details:Yup.string().required('Details is required'),
  city:Yup.string().required('City is required'),
  phone:Yup.string().matches(/^01[0125][0-9]{8}$/,"Enter Egyptian number").required("phone is required") 
 })

const{values,errors,handleChange,handleSubmit,handleBlur,touched,isValid}=useFormik({
  initialValues:{
    details: "",
    city: "", 
    phone: "",
  
  },
  onSubmit:async()=>{
    seterrorMsg('')
    setisloading(true)
    try {
     const {data}=await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}`,{
     
     shippingAddress:{
      details:values.details,
      phone: values.phone,
      city: values.city
      }
     
    
     },{

      headers:{
        token:localStorage.getItem('userToken')
      },
      params:{
        url:'http://localhost:3000'
      }

     })
window.open(data.session.url,'_self')
      
    } catch (error) {
      console.log(error.response.data.message)
      seterrorMsg(error.response.data.message)
    }

  setisloading(false)

  },validationSchema

})

  return (
<>

<form className='form m-auto my-5 p-3 rounded-3 w-50' onSubmit={handleSubmit}>
<h1 className='head-form text-center '>address</h1>

  <label htmlFor="details" className='my-1 '>Details :</label>
  <input type="text" className='form-control my-2' value={values.details} onChange={handleChange} onBlur={handleBlur} id='details'/>
 {errors.details&&touched.details&&<div className='alert alert-danger'>{errors.details}</div>} 


  <label htmlFor="city" className='my-1'>City :</label>
  <input type="text" className='form-control my-2' value={values.city} onChange={handleChange} onBlur={handleBlur} id='city'/>
  {errors.city&&touched.city&&<div className='alert alert-danger'>{errors.city}</div>}


  <label htmlFor="phone" className='my-1'>Phone :</label>
  <input type="tel" className='form-control my-2' value={values.phone} onChange={handleChange} onBlur={handleBlur} id='phone'/>
  {errors.phone&&touched.phone&&<div className='alert alert-danger'>{errors.phone}</div>}


{errorMsg? <div className='alert alert-danger'>{errorMsg}</div>
:''}

<button disabled={isloading||!isValid} className='btn btn-dark d-block ms-auto mt-4'>{isloading?<i className="fa-sharp fa-solid fa-spinner fa-spin"></i>:'ChekOut'}</button>

</form>



</>  )
}

export default Address