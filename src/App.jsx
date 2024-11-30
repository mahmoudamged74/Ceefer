import './App.css'
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Products from './components/Products/Products';
import Brands from './components/Brands/Brands';
import Categories from './components/Categories/Categories';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import UserContextProvider from './Context/userContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Contact from './components/Contact/Contact';
import AboutUs from './components/AboutUs/AboutUs';
import Content from './components/Content/Content';
import Account from './components/Account/Account';
import { ToastContainer } from 'react-toastify';
import Address from './components/Address/Address';




let router = createBrowserRouter([
  {path:"", element:<Layout/>,children:[
    {index:true ,element:<ProtectedRoute><Home/></ProtectedRoute> },
    {path:"cart" , element:<ProtectedRoute><Cart/></ProtectedRoute> },
    {path:"products" , element:<ProtectedRoute><Products/></ProtectedRoute> },
    {path:"brands" , element:<ProtectedRoute><Brands/></ProtectedRoute> },
    {path:"categories" , element: <ProtectedRoute><Categories/></ProtectedRoute>},
    {path:"productDetails/:cartId" , element: <ProtectedRoute><ProductDetails/></ProtectedRoute>},
    {path:"address/:_id" , element: <ProtectedRoute><Address/></ProtectedRoute>},
    {path:"login" , element:<Login/>},
    {path:"contact" , element:<ProtectedRoute><Contact/></ProtectedRoute>},
    {path:"about" , element:<ProtectedRoute><AboutUs/></ProtectedRoute>},
    {path:"content" , element:<ProtectedRoute><Content/></ProtectedRoute>},
    {path:"account" , element:<ProtectedRoute><Account/></ProtectedRoute>},
    {path:"*" , element:<NotFound/>},
  ]}
])
function App() {

  return <>
  <UserContextProvider>
  <RouterProvider router={router}/>
  </UserContextProvider>
  <ToastContainer />
    </>
    
  
}

export default App
