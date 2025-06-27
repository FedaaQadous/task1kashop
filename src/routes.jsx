import { createBrowserRouter } from "react-router";
import MainLayout from "./layout/MainLayout.jsx"
import ErrorPage from "./pages/error/ErrorPage.jsx";
import Home from "./pages/home/Home.jsx";
import Shop from "./pages/shop/Shop.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Forgotpass from './pages/forgotpassword/Forgotpass.jsx';
import Resetpass from './pages/resetpass/Resetpass.jsx';




const routes = createBrowserRouter([
    {
       path: '/',
       element: <MainLayout/>  ,
       errorElement :<ErrorPage /> ,
       children:[
        {
            path:'/',
            element:<Home />,
        },
          {
            path:'/shop',
            element:<Shop />,
        }, 

          {
            path:'/cart',
            element:<Cart />,
        },
             {
            path:'/login',
            element:<Login />,
        },
          {
            path:'/register',
            element:<Register />,
        },
        {
         path:'/forgotpassword',
            element:<Forgotpass />,
        },
         {
         path:'/resetpass',
            element:<Resetpass />,
        },

       ] ,
    

}

]);

export default routes;