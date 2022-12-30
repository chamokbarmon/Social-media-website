import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Main/Main';
import Home from './Pages/Home/Home';
import Postwrite from './Pages/Media/Post/Postwrite';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: '/write-post',
        element: <Postwrite/>

      }

    ]
  }
])
function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
