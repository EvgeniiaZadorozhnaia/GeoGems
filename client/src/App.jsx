import "./App.css";
import Root from "./Root";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import List from "./components/List/List";
import HomePage from "./pages/HomePage/HomePage";
import SigninPage from "./pages/SigninPage/SigninPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import Contacts from "./pages/Contacts/Contacts";
import Catalog from "./pages/Catalog/Catalog";
import More from "./pages/More/More";
import { useEffect, useState } from "react";
import axiosInstance, { setAccessToken } from "./axiosInstance";
import Favorites from "./pages/Favorites/Favorites";
import About from "./pages/About_us/About";

function App() {
  const [user, setUser] = useState();
  const [favorites, setFavorites] = useState([]);
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    price: "",
    url: "",
  });
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axiosInstance(`${import.meta.env.VITE_API}/tokens/refresh`).then((res) => {
      setUser(res.data.user);
      setAccessToken(res.data.accessToken);
    });
  }, []);

  const isAdmin = user && user.isAdmin;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root user={user} setUser={setUser} />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/signin",
          element: <SigninPage setUser={setUser} />,
        },
        {
          path: "/signup",
          element: <SignupPage setUser={setUser} />,
        },
        {
          path: "/contacts",
          element: <Contacts />,
        },
        {
          path: "/catalog",
          element: (
            <Catalog
              user={user}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ),
        },
        {
          path: "/favorites",
          element: (
            <Favorites
              user={user}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ),
        },
        {
          path: "/catalog/:id",
          element: <More />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: '/adminPage',
          element: isAdmin ? (
            <List
              inputs={inputs}
              setInputs={setInputs}
              entries={entries}
              setEntries={setEntries}
              user={user}
            />
          ) : (
            <Navigate to="/" />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
