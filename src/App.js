
import { createBrowserRouter,RouterProvider,createRoutesFromElements,Route} from "react-router-dom";
import HomePage from './pages/Home'
import Products  from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import ProductDetails from "./pages/ProductDetails";

// const router=createBrowserRouter([
//     { path:'/',element:<HomePage/>},
//     { path:'/products',element:<Products/>}
// ])

// const routerDefinitions=createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage/>}/>
//     <Route path="/products" element={<Products/>}/>
//   </Route>
// )

// const router=createBrowserRouter(routerDefinitions)


// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<RootLayout/>,
//     errorElement:<ErrorPage/>,
//     children:[
//       {path:'/',element:<HomePage/>},
//       {path:'/products',element:<Products/>},
//       {path:'/products/:productId',element:<ProductDetails/>}
//     ]
//   }
// ])

const router=createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {index:true,element:<HomePage/>},  //path:''
      {path:'products',element:<Products/>},
      {path:'products/:productId',element:<ProductDetails/>}
    ]
  }
])
function App(){
   return <RouterProvider router={router}/>
}


export default App;