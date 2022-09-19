import { createApp } from "vue";
import App from "./App.vue";
import MCombobox from "ms-combobox";
import EmployeeList from "./views/employee/EmployeeList.vue";
import MPopup from "@/components/base/MPopup.vue";
import MWarning from "@/components/base/MWarning.vue";
import MButton from "@/components/base/MButton.vue";
import MInput from "@/components/base/MInput/MInput.vue";
import LoadingLayer from "@/components/base/LoadingLayer.vue";

// import CustomerList from "./views/customer/CustomerList.vue";
// import ReportList from "./views/report/ReportList.vue";

import { createRouter, createWebHistory } from "vue-router";

//B2: Định nghĩa các router:
const routers = [
  { path: "/", redirect: 'nhan-vien' },
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
app.component("MButton", MButton);
app.component('MPopup', MPopup);
app.component('MInput', MInput);
app.component('MWarning', MWarning);
app.component('loading-layer', LoadingLayer);

// B3: sử dụng router:
app.use(router);
app.mount("#app");
