import { createApp } from "vue";
import App from "./App.vue";
import EmployeeList from "./views/employee/EmployeeList.vue";
import MPopup from "@/components/base/MPopup.vue";
import MWarning from "@/components/base/MWarning.vue";
import MButton from "@/components/base/MButton.vue";
import MInput from "@/components/base/MInput/MInput.vue";
import MCombobox from "@/components/base/MCombobox/MCombobox.vue";
import MPaging from "@/components/base/MPaging/MPaging.vue";
import MDepartmentCombobox from "@/components/base/MCombobox/MDepartmentCombobox.vue";
import LoadingLayer from "@/components/base/LoadingLayer.vue";
import MTable from "@/components/base/MTable.vue";
import MRadio from "@/components/base/MInput/MRadio.vue";
import MCheckbox from "@/components/base/MInput/MCheckbox.vue";
import Datepicker from 'vue3-datepicker'
import VueClickAway from "vue3-click-away";
import { createRouter, createWebHistory } from "vue-router";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import '@/css/main.css'
import vi from 'element-plus/es/locale/lang/vi'
//B2: Định nghĩa các router:
const routers = [
  { path: "/", redirect: "nhan-vien", name: "/" },
  { path: "", redirect: "nhan-vien", name: "" },
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
app.component("MDepartmentCombobox", MDepartmentCombobox);
app.component("MButton", MButton);
app.component("MPopup", MPopup);
app.component("MInput", MInput);
app.component("MWarning", MWarning);
app.component("loading-layer", LoadingLayer);
app.component("MTable", MTable);
app.component('date-picker', Datepicker);
app.component('MPaging', MPaging);
app.component("MRadio", MRadio);
app.component("MCheckbox", MCheckbox);



// B3: sử dụng router:
app.use(ElementPlus, {
  locale: vi,
});
app.use(VueClickAway);
app.use(router);
app.mount("#app");
