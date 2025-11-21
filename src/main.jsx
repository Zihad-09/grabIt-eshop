import './index.css'
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root';
import Home from './Page/Home/About/Blog/Contact/ShopNow/Home';
import About from './Page/Home/About/Blog/Contact/ShopNow/About';
import Contact from './Page/Home/About/Blog/Contact/ShopNow/Contact';
import ShopNow from './Page/Home/About/Blog/Contact/ShopNow/ShopNow';
import Blog from './Page/Home/About/Blog/Contact/ShopNow/Blog';
import SingleProductPage from './Components/SharedComponent/SingleProductPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home/> },
      { path: "/About", element: <About/> },
      { path: "/Contact", element: <Contact/> },
      { path: "/Shop", element: <ShopNow/> },
      { path: "/Blog", element: <Blog/> },
      { path: "/Shop/:id", element: <SingleProductPage/> },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);

