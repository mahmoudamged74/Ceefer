import "./Login.module.css"
import {useFormik} from "formik"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import * as Yup from 'yup';
import { useContext, useState } from "react";
import { UserContext } from "../../Context/userContext";



export default function Login() {
  const [errorApi, seterrorApi] = useState("")
  const [isLoading, setisLoading] = useState(false)
  const [isLoginVisible, setIsLoginVisible] = useState(true);

  let navigate = useNavigate();

 let {setuserLogin}= useContext(UserContext);


  let validationSchema = Yup.object().shape({

    email:Yup.string().email("email is invalid").required("email is Required"),
    password:Yup.string().matches(/^(?=.*[a-zA-Z])?(?=.*\d)?[a-zA-Z\d\W_]{6,10}$/,"The password must be more than 6 letters and less than 10 letters and You can use letters, numbers and symbols ").required("password is Required"),
   
    
  })

  async function handleLogin(formvalues){
    setisLoading(true)
    try {
      let {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", formvalues)
      if(data.message == "success"){
        localStorage.setItem("userToken", data.token)
        setuserLogin(data.token)
        navigate("/")
    setisLoading(false)

      }

    } catch (error) {
      seterrorApi(error?.response?.data?.message)
    setisLoading(false)

  
    }
      
  }

  let validationSchemaa = Yup.object().shape({
    name:Yup.string().min(3,"name minlength is 3").max(10,'name maxlength is 10').required("Name is Required"),
    email:Yup.string().email("email is invalid").required("email is Required"),
    password:Yup.string().matches(/^(?=.*[a-zA-Z])?(?=.*\d)?[a-zA-Z\d\W_]{6,10}$/,"The password must be more than 6 letters and less than 10 letters and You can use letters, numbers and symbols ").required("password is Required"),
    rePassword:Yup.string().oneOf([Yup.ref("password")],"password and rePassword must be match").required("rePassword is Required"),
    phone:Yup.string().matches(/^01[0125][0-9]{8}$/,"Enter Egyptian number").required("phone is required") 
  })



  async function handleRegister(formvalues){
      setisLoading(true)
    try {
      let {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", formvalues)
      
      
      if(data.message == "success"){
        localStorage.setItem("userToken", data.token)
        setuserLogin(data.token)
        navigate("/")
        setisLoading(false)
      }

    } catch (error) {
      seterrorApi(error?.response?.data?.message)
      setisLoading(false)
  
    }
      
  }

  let formikRegister = useFormik({
    initialValues:{
    name: "",
    email:"",
    password:"",
    rePassword:"",
    phone:""
    },
    validationSchema:validationSchemaa,
    onSubmit:handleRegister
  }); 



let formik = useFormik({
  initialValues:{
  email:"",
  password:"",
  },
  validationSchema,
  onSubmit:handleLogin
}); 


return <>
{errorApi? <div className="alert alert-danger my-5 p-2 w-25 text-center d-flex m-auto" role="alert">
        {errorApi}
        </div>: null}
<section className="login col-12">
      <div className="container">
        <div className="user_options">
          <div className="options-text d-flex align-items-center">
            <div className="user_options-registered">
              <h2 className="text-center mt-50 mb-30 text-white">Have an account?</h2>
              <p className="text-center mb-40">
                If you do have an account login now <br /> to see last updates
              </p>
              <button
                className="btn btn-color1 text-white mx-auto d-block"
                onClick={() => setIsLoginVisible(true)}
              >
                Login
              </button>
            </div>
            <div className="user_options-registered">
              <h2 className="text-center text-white mt-50 mb-30">New user?</h2>
              <p className="text-center mb-40">
                If you do not have an account on our site, you can now easily
                and easily subscribe and enjoy the site
              </p>
              <button
                className="btn btn-color1 text-white mx-auto d-block"
                onClick={() => setIsLoginVisible(false)}
              >
                Register
              </button>
            </div>
          </div>
          <div
            className={`options-forms d-flex align-items-center ${
              isLoginVisible ? "login-visible" : "register-visible"
            }`}
            id="user_options-forms"
          >
            {isLoginVisible ? (
              <div className="user_login">
                <h2 className="forms_title text-center">Login</h2>
                <form onSubmit={formik.handleSubmit} className="forms_form">
                  <div className="form-group">
                  <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}  type="email" className="form-control" id="InputEmail" name='email' placeholder="Enter Email"/>
                  </div>
                  
                  <div className="form-group">
                  <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password}  type="password" className="form-control" id="InputPassword" name='password' placeholder="Enter Password"/>
                  </div>
                
                  <div className="form-group mt-50">
                  <button type="submit" className="btn btn-color1 mt-2">
                  {isLoading? <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                        </div>:"Login"}
                      </button>
                  </div>
                  <div className="col-12 text-center mt-40">
                    <a href="" className="forms_buttons-forgot">
                      Forget password
                    </a>
                  </div>
                </form>
              </div>
            ) : (
              <div className="user_signup">
                <h2 className="forms_title text-center">Register</h2>
                <form  onSubmit={formikRegister.handleSubmit}  className="forms_form">
                  <div className="form-group">
                  <input onBlur={formikRegister.handleBlur}  onChange={formikRegister.handleChange} value={formikRegister.values.name}  type="text" className="form-control" id="InputName" name='name' placeholder="Enter Name"/>
                  </div>
                  
                  

                  <div className="form-group">
                  <input onBlur={formikRegister.handleBlur} onChange={formikRegister.handleChange} value={formikRegister.values.email}  type="email" className="form-control" id="InputEmail" name='email' placeholder="Enter Email"/>
                  </div>
                  


                  <div className="form-group">
                  <input onBlur={formikRegister.handleBlur} onChange={formikRegister.handleChange} value={formikRegister.values.password}  type="password" className="form-control" id="InputPassword" name='password' placeholder="Enter Password"/>
                  </div>



                  <div className="form-group">
                  <input onBlur={formikRegister.handleBlur} onChange={formikRegister.handleChange} value={formikRegister.values.rePassword}  type="password" className="form-control" id="InputrePassword" name='rePassword' placeholder="Enter rePassword"/>
                  </div>
                  

                  <div className="form-group">
                  <input onBlur={formikRegister.handleBlur} onChange={formikRegister.handleChange} value={formikRegister.values.phone} type="tel" className="form-control" id="InputPhone" name='phone' placeholder="Enter Phone"/>
                  </div>
                  
                  
                  <div className="form-group mt-40">
                  <button type="submit" className="btn btn-color1 mt-2">
    {isLoading?<div className="spinner-border m-0 p-0" role="status">
  <span className="sr-only">Loading...</span>
 </div>: "Register"}
    
    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>

{/* <div>
{errorApi? <div className="alert alert-danger my-1 p-2 w-25 text-center d-flex m-auto" role="alert">
        {errorApi}
        </div>: null}

  <h2 className='text-center fw-bold' >Login Now </h2>

<form onSubmit={formik.handleSubmit} className="m-auto w-25 bg-main-light p-2 rounded-4"  >


  <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}  type="email" className="form-control my-3 shadow" id="InputEmail" name='email' placeholder="Enter Email"/>
    
  {formik.errors.email && formik.touched.email?<p className="alert alert-danger" role="alert">
      {formik.errors.email}
      </p> :null }


  <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password}  type="password" className="form-control my-3 shadow" id="InputPassword" name='password' placeholder="Enter Password"/>

  {formik.errors.password && formik.touched.password?<p className="alert alert-danger" role="alert">
      {formik.errors.password}
      </p> :null }
  
<button type="submit" className="btn btn-success mt-2">
  {isLoading? <div className="spinner-border" role="status">
  <span className="sr-only">Loading...</span>
</div>:"Login"}
  </button>
  <p className="mt-2">didnt have account yet? <Link to={"/register"} className="fw-semibold">Register Now</Link> </p>
</form>
</div> */}
</>
}
