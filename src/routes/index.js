import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import("../pages/Dashboard"));
const EarningsAndCommissionsPage = lazy(() =>
  import("../pages/dashboard/EarningsAndCommissionsPage")
);
const AccountBalancePage = lazy(() =>
  import("../pages/dashboard/accountBalance/AccountBalancePage")
);
const PortfolioSummary = lazy(() =>
  import("../pages/dashboard/accountBalance/PortfolioSummary")
);
const LoanManagementDashboardPage = lazy(() =>
  import("../pages/loanManagement/LoanManagementDashboardPage")
);
const ApproveDeclinePage = lazy(() =>
  import("../pages/approveDeclineLoanRequests/ApproveDeclinePage")
);
const AccountManagementDashboard = lazy(() =>
  import("../pages/accountManagement/AccountManagementDashboard")
);
const TransactionsDashboard = lazy(() => import("../pages/transactions/Index"));

const NetworkDashboard = lazy(() => import("../pages/network/Index"));

const TransfersAndPayments = lazy(() =>
  import("../pages/transfersAndPayments/TransfersAndPayments")
);
const Forms = lazy(() => import("../pages/Forms"));
const Cards = lazy(() => import("../pages/Cards"));
const Charts = lazy(() => import("../pages/Charts"));
const Buttons = lazy(() => import("../pages/Buttons"));
const Modals = lazy(() => import("../pages/Modals"));
const Tables = lazy(() => import("../pages/Tables"));
const Page404 = lazy(() => import("../pages/404"));
const Blank = lazy(() => import("../pages/Blank"));

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: "/dashboard", // the url
    component: Dashboard, // view rendered
  },
  {
    path: "/loans",
    component: LoanManagementDashboardPage,
  },
  {
    path: "/account",
    component: AccountManagementDashboard,
  },
  {
    path: "/transactions",
    component: TransactionsDashboard,
  },
  {
    path: "/transfers-and-payments",
    component: TransfersAndPayments,
  },
  {
    path: "/network",
    component: NetworkDashboard,
  },
];

export default routes;
