import { createHashRouter, RouterProvider } from "react-router";
import routes from "@/routers/index.js";

const router = createHashRouter(routes);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
