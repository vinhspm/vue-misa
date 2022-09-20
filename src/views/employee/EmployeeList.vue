<template>
  <div class="page__header">
    <div class="page__header--title heading">Nhân viên</div>
    <m-button
      id="btnAdd"
      class="page__header--button button button__icon button__icon--employee"
      text="Thêm mới nhân viên"
      @click="toggleDialog"
    >
    </m-button>
  </div>

  <div class="page__table">
    <div class="page__toolbar">
      <div class="page__toolbar--left">
        <input
          type="text"
          class="input input__icon input__icon--search"
          v-model="searchInputValue"
          placeholder="Tìm theo mã, tên nhân viên"
          v-on:keyup.enter="onSearch"
        />
        <button @click="onSearch"></button>
      </div>
      <div class="page__toolbar--right">
        <button id="btnRefresh" @click="getData()"></button>
      </div>
    </div>
    <m-table
      :headers="employeeHeader"
      :dataSource="employees"
      @toggle-dialog="(index) => toggleDialog(index)"
      @warning-delete="(emp) => warningDelete(emp)"
    ></m-table>
    <div class="table__paging">
      <div class="table__paging--left">
        Tổng số: <b>{{ employees.length }}</b> bản ghi
      </div>

      <div class="table__paging--right">
        <select name="" class="combobox">
          <option value="10">10 nhân viên/ trang</option>
          <option value="20">20 nhân viên/ trang</option>
          <option value="30">30 nhân viên/ trang</option>
          <option value="40">40 nhân viên/ trang</option>
        </select>
        <div class="table__paging--center">
          <button class="paging__button">Trước</button>
          <div class="paging__button--group">
            <button class="paging__number paging__number--selected">1</button>
            <button class="paging__number">2</button>
            <button class="paging__number">3</button>
            <button class="paging__number">4</button>
            <button class="paging__number">5</button>
            <button class="paging__number">6</button>
          </div>
          <button class="paging__button">Sau</button>
        </div>
      </div>
    </div>
  </div>
  <!-- DIALOG CHI TIẾT NHÂN VIÊN -->
  <EmployeeDetail
    v-if="isShow"
    @close-dialog="toggleDialog"
    :selectedEmployee="selectedEmployee"
    @reload-data="getData"
  ></EmployeeDetail>
  <!-- POPUP CẢNH BÁO XOÁ  -->
  <m-warning
    v-if="isShowWarning"
    :text="warningText"
    :dialogType="DIALOG_TYPE.SELECTABLE"
    @close-warning="closeWarning"
    @ok-warning="okWarning"
  ></m-warning>
  <loading-layer v-if="isLoading"></loading-layer>
</template>
<script>
import MButton from "../../components/base/MButton.vue";
import LoadingLayer from "../../components/base/LoadingLayer.vue";
import EmployeeDetail from "./EmployeeDetail.vue";
import { formatDate } from "../../js/base.js";
import { DIALOG_TYPE, WARNING_TXT, EMPLOYEE_HEADER } from "../../constants.js";
// import { formatDateInput } from "../../js/base.js";

// import MWarning from "@/components/base/MWarning.vue";
export default {
  components: { MButton, EmployeeDetail, LoadingLayer },
  name: "EmployeeList",
  created() {
    // Gọi api lấy dữ liệu:
    // setInterval(() => {
    //   this.functionWaitTime.canGo = true;
    // }, this.functionWaitTime.delay);
    this.getData();
  },
  data() {
    return {
      employees: [],
      selectedEmployee: {},
      isLoading: false,
      isShow: false,
      searchInputValue: "",
      DIALOG_TYPE: DIALOG_TYPE,
      warningText: "",
      isShowWarning: false,
      clickedEmployee: {},
      clickedEmployeeDelete: {},
      employeeHeader: EMPLOYEE_HEADER,

      //chỉ cho hàm nào đó chạy sau mỗi một khoảng thời gian
      functionWaitTime: {
        canGo: true,
        delay: 0, //ms
      },
    };
  },

  //TODO: search theo input nhập vào mà không cần nhấn enter
  // watch: {
  //   searchInputValue: {
  //     handler() {
  //         if (this.functionWaitTime.canGo) {
  //           this.onSearch();
  //           this.functionWaitTime.canGo = false;
  //         }
  //     },
  //   },
  // },

  methods: {
    // bật / tắt form chi tiết nhân viên, đổi format datetime phù hợp
    toggleDialog: function (index) {
      this.isShow = !this.isShow;
      if (this.isShow) {
        if (this.employees[index].EmployeeId) {
          this.selectedEmployee = this.employees[index];
          console.log("selected", this.selectedEmployee);
        }
      } else {
        this.selectedEmployee = {};
      }
    },

    // cảnh báo xoá
    warningDelete: function (emp) {
      this.clickedEmployeeDelete = emp;
      this.isShowWarning = true;
      this.warningText =
        WARNING_TXT.DELETE + "Nhân viên " + emp.EmployeeCode + " không ?";
    },

    // lấy tắt cả dữ liệu từ bảng nhân viên
    getData: function () {
      this.isLoading = true;
      fetch("https://cukcuk.manhnv.net/api/v1/Employees", { method: "GET" })
        .then((res) => res.json())
        .then((data) => {
          this.employees = data;
          // console.log(this.employees);
          for (let index = 0; index < this.employees.length; index++) {
            if (this.employees[index].DateOfBirth) {
              this.employees[index].DateOfBirth = formatDate(
                this.employees[index].DateOfBirth
              );
            }
          }
          this.isLoading = false;
        })
        .catch((res) => {
          this.isLoading = false;
          console.log(res);
        });
    },

    //tắt popup cảnh báo
    closeWarning() {
      this.isShowWarning = false;
    },

    // xác nhận người dùng đồng ý với popup cảnh báo
    okWarning() {
      this.deleteEmployee();
      this.closeWarning();
    },

    // gọi api xoá nhân viên
    deleteEmployee() {
      this.isLoading = true;
      fetch(
        "https://cukcuk.manhnv.net/api/v1/Employees/" +
          this.clickedEmployeeDelete.EmployeeId,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then(() => {
          this.isLoading = false;
          this.getData();
        })
        .catch((res) => {
          console.log(res);
          this.getData();
          this.isLoading = false;
        });
    },

    // hàm tìm kiếm nhân viên theo mã và tên
    onSearch: function () {
      fetch(
        "https://cukcuk.manhnv.net/api/v1/Employees/filter?" +
          new URLSearchParams({
            employeeFilter: this.searchInputValue,
          }),
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          this.employees = data.Data;

          for (let index = 0; index < this.employees.length; index++) {
            if (this.employees[index].DateOfBirth) {
              this.employees[index].DateOfBirth = formatDate(
                this.employees[index].DateOfBirth
              );
            }
          }
        })
        .catch((res) => {
          console.log(res);
          this.employees = [];
        });
    },
  },
};
</script>
<style scoped>
@import url(../../css/page/employee.css);

.loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #0000005b;
}
</style>
