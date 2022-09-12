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
  { path: "/ban-hang", component: {} },
  { path: "/quan-ly-hoa-don", component: {} },
  { path: "/kho", component: {} },
  { path: "/cong-cu-dung-cu", component: {} },
  { path: "/tai-san-co-dinh", component: {} },
  { path: "/tien-luong", component: {} },
  { path: "/thue", component: {} },
  { path: "/gia-thanh", component: {} },
  { path: "/tong-hop", component: {} },
  { path: "/ngan-sach", component: {} },
  { path: "/bao-cao", component: {} },
  { path: "/phan-tich-tai-chinh", component: {} },
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
