import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './layout/Main/Main';
import Subscribe from './components/Subscribe/Subscribe';
import BackpackCollection from './components/BackpackCollection/BackpackCollection';
import ShoesContainer from './components/ShoesContainer/ShoesContainer';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        { path: 'shoes', element: <ShoesContainer></ShoesContainer> },
        { path: '/backpack', element: <BackpackCollection></BackpackCollection> },
        { path: '/subscribe', element: <Subscribe></Subscribe> }
      ]
    },

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>


    </div>
  );
}

export default App;
