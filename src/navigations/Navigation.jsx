import { createBrowserRouter, RouterProvider } from 'react-router';

import Home from '../Home';
import Count from '../Count';
import Login from '../Login';

const paths = createBrowserRouter([{
    path: '/',
    element: <Home/>
  },{
    path: '/count',
    element: <Count />
  },{
    path: '/login',
    element: <Login/>
  }])

const Navigation = () => {
    return(
        <RouterProvider router={paths} />
    )
}

export default Navigation;