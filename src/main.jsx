import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import Root from "./Layouts/Root";
import AuthProvider from "./provider/AuthProvider";
import ProductInfoProvider from "./provider/ProductInfoProvider";
import { Tooltip } from "react-tooltip";
//

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ProductInfoProvider>
        <RouterProvider router={router}>
           <Root />
        </RouterProvider>
      </ProductInfoProvider>
    </AuthProvider>
    <Tooltip id="my-tooltip-1" place="left" variant="info" delayShow={200} delayHide={200} />
    <Tooltip id="my-tooltip-2" place="bottom" variant="dark" delayShow={200} delayHide={200} />
  </StrictMode>
);
