import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./common.css";

import { RouterProvider } from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import router from "./Routes/routes";
const queryClient = new QueryClient();


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
      </>
  </React.StrictMode>
);
