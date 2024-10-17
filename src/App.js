import React, { useState, useEffect } from "react";import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreateEdit from "./pages/CreateEdit";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import "./style.scss";




const Layout = ({ isAuthenticated, logout }) => {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar isAuthenticated={isAuthenticated} logout={logout} />
      <Outlet />
      <Footer />
    </>
  );
};

const PrivateRoute = ({ element, isAuthenticated, ...rest }) => {
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = () => {
    // localStorage.setItem("token", "your-token");
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout isAuthenticated={isAuthenticated} logout={logout} />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />, 
      },
      {
        path: "/blog/:id",
        element: <Post />,
      },
      {
        path: "/create",
        // element: <CreateEdit />,
        element: <PrivateRoute element={<CreateEdit />} isAuthenticated={isAuthenticated} />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login login={login} />,
  },
  {
    path: "/logout",
    element: <Logout logout={logout} />,
  },
]);

return (
  <div className="app">
    <div className="container">
      <RouterProvider router={router} />
    </div>
  </div>
);
};

const Logout = ({ logout }) => {
useEffect(() => {
  logout();
}, [logout]);

return <Navigate to="/login" />;
};

export default App;



