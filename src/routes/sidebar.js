/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: "/app/dashboard", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Home", // name that appear in Sidebar
  },
  {
    path: "/app/forms",
    icon: "FormsIcon",
    name: "Loans",
  },

  {
    path: "/app/cards",
    icon: "CardsIcon",
    name: "Account",
  },
  {
    path: "/app/buttons",
    icon: "ButtonsIcon",
    name: "Transactions",
  },
  {
    path: "/app/charts",
    icon: "ChartsIcon",
    name: "Transfer & Payments",
  },

  {
    icon: "PagesIcon",
    name: "My Network",
    routes: [
      // submenu
      {
        path: "/login",
        name: "Login",
      },
      {
        path: "/create-account",
        name: "Create account",
      },
      {
        path: "/forgot-password",
        name: "Forgot password",
      },
      {
        path: "/app/404",
        name: "404",
      },
      {
        path: "/app/blank",
        name: "Blank",
      },
    ],
  },
];

export default routes;
