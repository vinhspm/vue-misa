import { createApp } from "vue";
import App from "./App.vue";
import MCombobox from "ms-combobox";
import EmployeeList from "./views/employee/EmployeeList.vue";
// import CustomerList from "./views/customer/CustomerList.vue";
// import ReportList from "./views/report/ReportList.vue";

import { createRouter, createWebHistory } from "vue-router";

//B2: Định nghĩa các router:
const routers = [
  { path: "/tong-quan", component: {} },
  { path: "/nhan-vien", component: EmployeeList },
  { path: "/tien-gui", component: {} },
  { path: "/mua-hang", component: {} },
  { path: "/3", component: {} },
  { path: "/4", component: {} },
  { path: "/5", component: {} },
  { path: "/6", component: {} },
  { path: "/7", component: {} },
  { path: "/8", component: {} },
  { path: "/9", component: {} },
  { path: "/10", component: {} },
  { path: "/11", component: {} },
  { path: "/12", component: {} },
  { path: "/13", component: {} },
  { path: "/14", component: {} },
  { path: "/15", component: {} },
  { path: "/16", component: {} },
];
// B3: Khởi tạo router:
const router = createRouter({
  history: createWebHistory(),
  routes: routers,
});

//ROUTES
//STORE
const app = createApp(App);
app.component("MCombobox", MCombobox);
// B3: sử dụng router:
app.use(router);
app.mount("#app");
