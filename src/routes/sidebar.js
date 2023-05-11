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
    path: "/app/loans",
    icon: "FormsIcon",
    name: "Loans",
  },

  {
    path: "/app/account",
    icon: "CardsIcon",
    name: "Account",
  },
  {
    path: "/app/transactions",
    icon: "ButtonsIcon",
    name: "Transactions",
  },
  {
    path: "/app/transfers-and-payments",
    icon: "ChartsIcon",
    name: "Transfer & Payments",
  },

  {
    path: "/app/network",
    icon: "ChartsIcon",
    name: "My Network",
  },
];

export default routes;
