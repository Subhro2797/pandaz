import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './layout/Main/Main';
import Subscribe from './components/Subscribe/Subscribe';
import BackpackCollection from './components/BackpackCollection/BackpackCollection';
import ShoesContainer from './components/ShoesContainer/ShoesContainer';
import Productdetail from './components/Productdetail/Productdetail';
import Gallery from './components/Gallery/Gallery';
import Cart from './components/Cart/Cart';
import { createContext } from 'react';
import nike1 from './images/shoes/shoe-1.png';
import nike2 from './images/shoes/shoe-2.png';
import nike3 from './images/shoes/shoe-3.png';
import bag1 from './images/bags/bag-1.png';
import bag2 from './images/bags/bag-2.png';
import bag3 from './images/bags/bag-3.png';

const data = {
  data1: {
    name: 'Nike Ordem',
    text: "The Ordem, released in 2014, is the first Nike football to have panels bonded together, rather than stitched. It is claimed to be rounder and to perform more uniformly regardless of where it is hit, and being almost waterproof.",
    price: '$420',
    img: `${nike1}`,
    id: 'shoe1'
  },
  data2: {
    name: 'Nike 360',
    text: "The shoes feature some sneakerhead favorites including the Safrai print, patent leather, mesh upper, and even a crackle print that is reminiscent of the Jordan elephant print. ",
    price: '$699',
    img: `${nike2}`,
    id: 'shoe2'

  },
  data3: {
    name: 'Air Max',
    text: "The shoes feature some sneakerhead favorites including the Safrai print, patent leather, mesh upper, and even a crackle print that is reminiscent of the Jordan elephant print.",
    price: '$899',
    img: `${nike3}`,
    id: 'shoe3'

  },
  data4: {
    name: 'Safari',
    price: '$50',
    img: `${bag1}`,
    id: 'bag1',
    description: "Carry your backpack with ease owing to the Soft Padded Handle or by sliding it in your luggage trolley with the Smart Sleeve"
  },
  data5: {
    price: '$70',
    name: 'Wildcraft',
    img: `${bag2}`,
    id: 'bag2',
    description: "Engineered for performance, this polyester fabric has high-tenacity durability and is water and dust resistant."

  },
  data6: {
    name: 'Sky Bags',
    price: '$80',
    img: `${bag3}`,
    id: 'bag3',
    description: "A dedicated compartment to keep your Laptop and Tablet organized."

  }


}

export const OriginalContext = createContext(data);



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/', element: <Home></Home>
        },
        { path: '/pandaz', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        { path: '/products', element: <Cart></Cart> },
        { path: '/products', element: <Gallery></Gallery> },
        { path: '/products', element: <Home></Home> },
        { path: '/shoes', element: <ShoesContainer></ShoesContainer> },
        { path: '/backpack', element: <BackpackCollection></BackpackCollection> },
        { path: '/subscribe', element: <Subscribe></Subscribe> },
        { path: '/products/gallery', element: <Gallery></Gallery> },
        { path: '/cart', element: <Cart></Cart> },
        {
          path: 'shoes/:shoeId',

          element: <Productdetail></Productdetail>
        }
      ]
    }

  ])
  return (
    <OriginalContext.Provider value={data}>
      <div className="App">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </OriginalContext.Provider>


  );
}

export default App;
