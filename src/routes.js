import Home from "./views/Home";
import Shop from "./views/Shop";
import ProductDetail from "./views/ProductDetail";
import Collections from "./views/Collections";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/category/:categoryName",
    exact: true,
    component: Shop,
  },
  {
    path: "/product/:id",
    exact: true,
    component: ProductDetail,
  },

  {
    path: "/collections",
    exact: true,
    component: Collections,
  },
];
