import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./common.css";
import { RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import router from "./Routes/routes";
import AuthProvider from "./Providers/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
            <RouterProvider router={router}></RouterProvider>
          </HelmetProvider>
        </QueryClientProvider>
      </AuthProvider>
  </React.StrictMode>
);
