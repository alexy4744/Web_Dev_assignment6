import { Outlet, createBrowserRouter } from "react-router-dom";

import { ErrorFallback } from "./components/ErrorFallback";

import { Author } from "./pages/Author";
import { AuthorBooks } from "./pages/AuthorBooks";
import { Home } from "./pages/Home";
import { RandomBooks } from "./pages/RandomBooks";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      errorElement: <ErrorFallback />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "author",
          element: (
            <>
              <Author />
              <Outlet />
            </>
          ),
          children: [
            {
              path: "books",
              element: <AuthorBooks />,
            },
          ],
        },
        {
          path: "random-books/:genre",
          element: <RandomBooks />,
        },
      ],
    },
  ],
  {
    basename: "/Web_Dev_assignment6",
  }
);
