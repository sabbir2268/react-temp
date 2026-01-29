import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router/dom";
import { router } from "./router/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
<<<<<<< HEAD
  </StrictMode>
=======
  </StrictMode>,
>>>>>>> 212b909 (modified template with a bisic layout connected with router, and proffessional file structure)
);
