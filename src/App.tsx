import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home  from './pages/Home'
import Shop from'./pages/shop'
import AboutUs from './pages/about'





  const App: React.FC = () => {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <Home/>,
        // errorElement: <Error />,
      },
      {
        path: 'Shop',
        element: <Shop/>,
        // errorElement: <Error />,
      },
      {
        path: 'AboutUs',
        element: <AboutUs/>,
        // errorElement: <Error />,
      }
      
      
      
   
     
      
      
      
      
      
     


   
   
        
   
   
   
   
   
   
      
   
   
    ]);
    return (
      <RouterProvider router={router} />
    );
}

export default App
