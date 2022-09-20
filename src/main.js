import { createApp } from "vue";
import App from "./App.vue";
import MCombobox from "ms-combobox";
import EmployeeList from "./views/employee/EmployeeList.vue";
import MPopup from "@/components/base/MPopup.vue";
import MWarning from "@/components/base/MWarning.vue";
import MButton from "@/components/base/MButton.vue";
import MInput from "@/components/base/MInput/MInput.vue";
import LoadingLayer from "@/components/base/LoadingLayer.vue";
import MTable from "@/components/base/MTable.vue";
import Datepicker from 'vue3-datepicker'

// import CustomerList from "./views/customer/CustomerList.vue";
// import ReportList from "./views/report/ReportList.vue";

import { createRouter, createWebHistory } from "vue-router";

//B2: Định nghĩa các router:
const routers = [
  { path: "/", redirect: "nhan-vien", name: "/" },
  { path: "/tong-quan", component: {}, name: "/tong-quan" },
  { path: "/nhan-vien", component: EmployeeList, name: "/nhan-vien" },
  { path: "/tien-gui", component: {}, name: "/tien-gui" },
  { path: "/mua-hang", component: {}, name: "/mua-hang" },
  { path: "/ban-hang", component: {}, name: "/ban-hang" },
  { path: "/quan-ly-hoa-don", component: {}, name: "/quan-ly-hoa-don" },
  { path: "/kho", component: {}, name: "/kho" },
  { path: "/cong-cu-dung-cu", component: {}, name: "/cong-cu-dung-cu" },
  { path: "/tai-san-co-dinh", component: {}, name: "/tai-san-co-dinh" },
  { path: "/tien-luong", component: {}, name: "/tien-luong" },
  { path: "/thue", component: {}, name: "/thue" },
  { path: "/gia-thanh", component: {}, name: "/gia-thanh" },
  { path: "/tong-hop", component: {}, name: "/tong-hop" },
  { path: "/ngan-sach", component: {}, name: "/ngan-sach" },
  { path: "/bao-cao", component: {}, name: "/bao-cao" },
  { path: "/phan-tich-tai-chinh", component: {}, name: "/phan-tich-tai-chinh" },
  { path: "/15", component: {}, name: "/" },
  { path: "/16", component: {}, name: "/" },
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
app.component("MPopup", MPopup);
app.component("MInput", MInput);
app.component("MWarning", MWarning);
app.component("loading-layer", LoadingLayer);
app.component("MTable", MTable);
app.component('date-picker', Datepicker);


// B3: sử dụng router:
app.use(router);
app.mount("#app");
