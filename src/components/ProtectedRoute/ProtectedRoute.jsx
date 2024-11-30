import { Navigate } from "react-router-dom"


export default function ProtectedRoute(x) {  
  
  if(localStorage.getItem("userToken")!==null)
    {
    return  x.children 
     }
  else{
   return  <Navigate to={"/login"}/>
  }


}
