import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LoginScreen from './pages/LoginScreen.jsx'
import RegisterScreen from './pages/RegisterScreen.jsx'
import Product_page from './pages/product_page.jsx'
import Profile from './pages/profile.jsx'
import Admin from './pages/admin.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Cart from './pages/cart.jsx'
import Order from './pages/order.jsx'
const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/login',
      element:<LoginScreen/>
    },
    {
      path:'/register',
      element:<RegisterScreen/>
    },
    {
      path:'/products',
      element:<Product_page/>
    },
    {
      path:'/cart',
      element:<Cart/>
    },
    {
      path:'/order',
      element:<Order/>
    },
    {
      path:'/admin',
      element:<Admin/>
    },
    {
      path:'/profile',
      element:<Profile/>
    }
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
