import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './component/Navbar';
import Restaurant from './component/Restaurant'; // Ensure correct import
import Stocks from './component/Stocks';
import Shoes from './component/Shoes';
import Home from './component/Home';

import Restodetails from './component/Restodetails'; // Ensure correct import
import DisplayDetail from './component/DisplayDetail';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: '/shoes',
      element: (
        <>
          <Navbar />
          <Shoes />
        </>
      ),
    },
    {
      path: '/restro',
      element: (
        <>
          <Navbar />
          <Restaurant />
        </>
      ),
    },
    {
      path: '/stocks',
      element: (
        <>
          <Navbar />
          <Stocks />
        </>
      ),
    },
    {
      path: '/shoes/:id',
      element: (
        <>
          <Navbar />
          <DisplayDetail/>
        </>
      ),
    },
    {
      path: '/restro/:id', // Ensure this path matches the navigation
      element: (
        <>
          <Navbar />
          <Restodetails />
        </>
      ),
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;


  

