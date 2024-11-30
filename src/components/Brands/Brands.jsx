import axios from 'axios'
import  { useEffect, useState } from 'react'


export default function Brands() {

  const [brands, setbrands] = useState([])
  const [isloading, setisloading] = useState(true)

   async function getAllBrands(){
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
    console.log(data.data)
    setbrands(data.data)
    setisloading(false)
   }
   useEffect(() => {
    getAllBrands()
   }, [])

  return (
    <>
   
    {isloading?<div className='vh-100 d-flex justify-content-center align-items-center'>
  <span className="loader"></span>
</div>
   
   :
    <div className='row g-3 py-5 '>
  {brands.map((brand , index)=>{
    return <div className='col-lg-3 col-md-4 col-sm-6 p-3 border-brands' key={index} >
      <img src={brand.image}  alt="" />

    </div>
  })} 
  </div>}
    </>
  )
}
