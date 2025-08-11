import { Cart } from "@/views/Cart";
import { Index } from "@/views/Index";
import { Layout } from "@/views/Layout";
import { LocationSearch } from "@/views/LocationSearch";
import { Login } from "@/views/Login";
import { LoginLayout } from "@/views/LoginLayout";
import { ProductionIntro } from "@/views/ProductIntro";
import { Register } from "@/views/Register";
import { UserInfo } from "@/views/UserInfo";

const routes = [
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "",
        Component: Index,
      },
      {
        path: "location-search",
        Component: LocationSearch,
      },
      {
        path: "product",
        Component: ProductionIntro,
      },
      {
        path: "cart",
        Component: Cart,
      },
      {
        path: "",
        Component: LoginLayout,
        children: [
          {
            path: "login",
            Component: Login,
          },
          {
            path: "register",
            Component: Register,
          },
        ],
      },

      {
        path: "user-info",
        Component: UserInfo,
      },
    ],
  },
];

export default routes;
