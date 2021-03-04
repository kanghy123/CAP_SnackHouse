/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import AddCircle from "@material-ui/icons/AddCircle";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Notifications from "@material-ui/icons/Notifications";
// import Unarchive from "@material-ui/icons/Unarchive";
// core components/views for Admin layout
import DashboardPage from "./views/Dashboard/Dashboard.js";
// import UserProfile from "./views/UserProfile/UserProfile.js";
// import TableList from "./views/TableList/TableList.js";
import Typography from "./views/Typography/Typography.js";
import Icons from "./views/Icons/Icons.js";
import NotificationsPage from "./views/Notifications/Notifications.js";
// import UpgradeToPro from "./views/UpgradeToPro/UpgradeToPro.js";

import Account from "./views/Account";
import CreateAccount from "./views/CreateAccount";
import PageAccount from "./containers/PageAccount/index.js";
import PageWarehouse from "./containers/PageWarehouse/index.js";
// import CreateMaterial from "./views/CreateMaterial"; // buoc 3
// core components/views for RTL layout
// MENU

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Thống kê",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Tài khoản",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: PageAccount,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Kho",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: PageWarehouse,
    layout: "/admin",
  },
  {
    path: "/account",
    name: "Tài khoản",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: Account,
    layout: "/admin",
  },
  {
    path: "/createAccount",
    name: "Tạo tài khoản",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: CreateAccount,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Nguyên liệu",
    rtlName: "طباعة",
    icon: AddCircle,
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Chi nhánh",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Báo cáo",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
  },
  // {
  //   path: "/upgrade-to-pro",
  //   name: "Upgrade To PRO",
  //   rtlName: "التطور للاحترافية",
  //   icon: Unarchive,
  //   component: UpgradeToPro,
  //   layout: "/admin"
  // },
  // {
  //   path: "/createMaterial", // URL 1
  //   name: "Upgrade To PRO",
  //   rtlName: "التطور للاحترافية",
  //   icon: Unarchive,
  //   component: CreateMaterial, // Component 2
  //   layout: "/admin"
  // },
];

export default dashboardRoutes;
