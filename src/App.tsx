import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home  from './pages/Home'
import Shop from'./pages/shop'
import AboutUs from './pages/about'
import Contact from './pages/contacts'
 import Explore from './pages/explore'
import LocationPage from './pages/location'





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
      },
      {
        path: 'contacts',
        element: <Contact/>,
        // errorElement: <Error />,
      },
       {
        path: 'LocationPage',
        element: <LocationPage/>,
        // errorElement: <Error />,
      },
      {
        path: 'Explore',
        element: <Explore/>,
        // errorElement: <Error />,
      }
      
      
      
      
      
   
     
      
      
      
      
      
     


   
   
        
   
   
   
   
   
   
      
   
   
    ]);
    return (
      <RouterProvider router={router} />
    );
}

export default App
