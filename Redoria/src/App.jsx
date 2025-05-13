import React from "react"

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BooksCarousel from "./components/BooksCarousel";
import Home from "./pages/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/bookscarousel",
      element: <BooksCarousel/>,
    },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
