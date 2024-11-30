
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export let UserContext = createContext();

export default function UserContextProvider(x)

{
  const [userLogin, setuserLogin] = useState(null)

  useEffect(()=>{
          if(localStorage.getItem("userToken")!==null){
            setuserLogin(localStorage.getItem("userToken"))
          }
  },[])

    return <UserContext.Provider value={{userLogin, setuserLogin}}>
          {x.children}
    </UserContext.Provider>
}