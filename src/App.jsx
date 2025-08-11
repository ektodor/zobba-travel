import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "@/routers/index.js";

const router = createBrowserRouter(routes);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
