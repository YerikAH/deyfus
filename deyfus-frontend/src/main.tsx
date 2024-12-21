import createRouter from "@/routes";
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={createRouter} />
);
