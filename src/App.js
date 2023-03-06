import './styles/app.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Layout from "./pages/Layout";
function App() {
  const router=createBrowserRouter([
      {
         path:"/",
         element:<Layout/>,
         children:[
            {
              path:"/",
              element:<Home/>
            },
            {
              path:"/cart",
              element:<Cart/>
            }
         ]
      }
  ])
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
