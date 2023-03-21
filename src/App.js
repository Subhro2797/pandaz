import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './layout/Main/Main';
import Subscribe from './components/Subscribe/Subscribe';
import BackpackCollection from './components/BackpackCollection/BackpackCollection';
import ShoesContainer from './components/ShoesContainer/ShoesContainer';
import Productdetail from './components/Productdetail/Productdetail';
import Gallery from './components/Gallery/Gallery';
import Slider from './components/Slider/Slider';




function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        { path: '/products', element: <Home></Home> },
        { path: '/shoes', element: <ShoesContainer></ShoesContainer> },
        { path: '/backpack', element: <BackpackCollection></BackpackCollection> },
        { path: '/subscribe', element: <Subscribe></Subscribe> },
        { path: '/gallery', element: <Gallery></Gallery> },
        {
          path: 'shoes/:shoeId',

          element: <Productdetail></Productdetail>
        }
      ]
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
