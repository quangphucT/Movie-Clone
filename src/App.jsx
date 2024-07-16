import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home";
import MovieManagement from "./pages/movie-management";
import Login from "./components/Login";
import DetailsPage from "./pages/details-page";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/movie-management",
          element: <MovieManagement />,
        },
        {
          path: "/details-page/:id",
          element: <DetailsPage />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
