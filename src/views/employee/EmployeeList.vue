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
      <div
        class="page__toolbar--left"
        @click="showDropdownFunction"
        v-click-away="closeDropdownFunction"
      >
        <div>Thực hiện hàng loạt</div>
        <div class="dropdown">
          <button class="dropdown-btn"></button>
          <div class="multiple_item__dropdown_content" v-if="isShowDropdown">
            <a href="#">Nhân bản</a>
            <a href="#" @click="warningMultipleDelete()">Xoá</a>
            <a href="#">Ngưng sử dụng</a>
          </div>
        </div>
      </div>
      <div class="page__toolbar--right">
        <div class="page__toolbar--search">
          <input
            type="text"
            class="input input__icon input__icon--search"
            v-model="searchInputValue"
            placeholder="Tìm theo mã, tên nhân viên"
            @input="onSearch"
          />
          <button @click="onSearch"></button>
        </div>
        <div class="page__toolbar--reload">
          <button id="btnRefresh" @click="reloadData"></button>
        </div>
      </div>
    </div>
    <m-table
      :headers="employeeHeader"
      :dataSource="employees"
      @toggle-dialog="(index) => toggleDialog(index)"
      @warning-delete="(emp) => warningDelete(emp)"
      @update:selectEmployees="selectEmployees = $event"
    >
    </m-table>

    <m-paging
      :recordPerPageProps="params.pageSize"
      :totalRecord="totalRecord"
      :totalPage="totalPage"
      @update:recordPerPage="params.pageSize = $event"
      @update:currentPage="params.pageNumber = $event"
      :currentPageProp="params.pageNumber"
    ></m-paging>
  </div>
  <!-- DIALOG CHI TIẾT NHÂN VIÊN -->
  <EmployeeDetail
    v-if="isShow"
    @close-dialog="toggleDialog"
    :selectedEmployee="selectedEmployee"
    @reload-data="reloadData"
  ></EmployeeDetail>
  <!-- POPUP CẢNH BÁO XOÁ  -->
  <m-warning
    v-if="isShowWarning"
    :text="warningText"
    :dialogType="DIALOG_TYPE.SELECTABLE"
    @close-warning="closeWarning"
    @ok-warning="okWarning"
  ></m-warning>
  <m-warning
    v-if="isShowWarningMultipleDelete"
    :text="warningText"
    :dialogType="DIALOG_TYPE.SELECTABLE"
    @close-warning="closeWarning"
    @ok-warning="okWarningMultipleDelete"
  ></m-warning>
  <m-warning
    v-if="isShowResult"
    :text="resultText"
    :dialogType="DIALOG_TYPE.WARNING"
    @close-warning="closeWarning"
  ></m-warning>
  <loading-layer v-if="isLoading"></loading-layer>
</template>
<script>
import MButton from "../../components/base/MButton.vue";
import LoadingLayer from "../../components/base/LoadingLayer.vue";
import EmployeeDetail from "./EmployeeDetail.vue";
import {
  DIALOG_TYPE,
  WARNING_TXT,
  EMPLOYEE_HEADER,
  DEFAULT_PARAMS,
  INFO_TXT,
  FIELD_NAME_VN,
} from "../../constants.js";
import { formatDateInput } from "../../js/base.js";
import {
  getEmployeesFilter,
  deleteEmployee,
} from "@/axios/employeeController/employeeController.js";
// import MWarning from "@/components/base/MWarning.vue";
import _ from "lodash";
export default {
  components: { MButton, EmployeeDetail, LoadingLayer },
  name: "EmployeeList",

  created() {
    // Gọi api lấy dữ liệu:
    this.params = { ...DEFAULT_PARAMS };
    this.getData();
  },

  data() {
    return {
      employees: [],
      totalPage: 0,
      totalRecord: 0,
      selectedEmployee: {},
      selectEmployees: [],
      isLoading: false,
      isShow: false,
      searchInputValue: "",
      DIALOG_TYPE: DIALOG_TYPE,
      warningText: "",
      isShowWarning: false,
      clickedEmployee: {},
      clickedEmployeeDelete: {},
      employeeHeader: EMPLOYEE_HEADER,
      params: [],
      selectedCheckboxItems: [],
      isShowDropdown: false,
      isShowWarningMultipleDelete: false,
      isShowResult: false,
      resultText: "",
    };
  },
  watch: {
    searchInputValue: {
      handler(val) {
        this.params.employeeFilter = val;
      },
    },

    "params.pageNumber": {
      handler() {
        this.getData();
      },
      deep: true,
    },
    "params.pageSize": {
      handler() {
        this.getData();
      },
      deep: true,
    },
  },
  methods: {
    /**
     * bật / tắt form chi tiết nhân viên, đổi format datetime phù hợp
     * author: vinhkt
     * created: 18/09/2022
     * @param {index employee} index
     */
    toggleDialog: function (index) {
      this.isShow = !this.isShow;
      if (this.isShow) {
        if (typeof index == "number") {
          if (this.employees[index].EmployeeId) {
            this.selectedEmployee = { ...this.employees[index] };
            this.selectedEmployee.DateOfBirth = formatDateInput(
              this.selectedEmployee.DateOfBirth
            );
            this.selectedEmployee.IdentityDate = formatDateInput(
              this.selectedEmployee.IdentityDate
            );
            console.log("selected", this.selectedEmployee);
          }
        }
      } else {
        this.selectedEmployee = {};
      }
    },

    /**
     * cảnh báo xoá 1 nhân viên
     * author: vinhkt
     * created: 18/09/2022
     * @param {emp} emp
     */
    warningDelete: function (emp) {
      this.clickedEmployeeDelete = emp;
      this.isShowWarning = true;
      this.warningText =
        WARNING_TXT.DELETE + "Nhân viên <" + emp.EmployeeCode + "> không ?";
    },

    /**
     * cảnh báo xoá nhiều nhân viên
     * author: vinhkt
     * created: 23/09/2022
     */
    warningMultipleDelete: function () {
      this.isShowWarningMultipleDelete = true;
      this.warningText = WARNING_TXT.DELETE + "Những nhân viên đã chọn không ?";
    },

    /**
     * reload data trong bảng
     * author: vinhkt
     * created: 18/09/2022
     */
    reloadData() {
      this.searchInputValue = "";
      this.params = { ...DEFAULT_PARAMS };
      console.log(DEFAULT_PARAMS);
      this.getData();
      console.log();
    },

    /**
     * lấy tắt cả dữ liệu từ bảng nhân viên theo filter và paging
     * author: vinhkt
     * created: 23/09/2022
     */
    getData: async function () {
      this.isLoading = true;
      try {
        const response = await getEmployeesFilter(this.params);
        if (response.status === 200) {
          this.employees = response.data.Data;
          this.totalPage = response.data.TotalPage;
          this.totalRecord = response.data.TotalRecord;
          this.isLoading = false;
        } else {
          // this.reloadData();
          this.isLoading = false;
          this.employees = [];
          this.totalPage = 0;
          this.totalRecord = 0
        }
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },

    /**
     * tắt popup cảnh báo
     * author: vinhkt
     * created: 18/09/2022
     */
    closeWarning() {
      this.isShowWarning = false;
      this.isShowWarningMultipleDelete = false;
      this.isShowResult = false;
    },

    /**
     * xác nhận người dùng đồng ý với popup cảnh báo xoá 1 nhân viên
     * author: vinhkt
     * created: 18/09/2022
     * */
    okWarning() {
      this.deleteEmployee();
      this.closeWarning();
    },

    /**
     * xác nhận người dùng đồng ý với popup cảnh báo xoá nhiều nhân viên
     * author: vinhkt
     * created: 23/09/2022
     * */
    okWarningMultipleDelete() {
      this.deleteMultipleEmployees();
      this.closeWarning();
    },

    /**
     * gọi api xoá 1 nhân viên
     * author: vinhkt
     * created: 18/09/2022
     * */
    async deleteEmployee() {
      this.isLoading = true;
      const id = this.clickedEmployeeDelete.EmployeeId;
      try {
        const response = await deleteEmployee(id);
        if (response) {
          this.isLoading = false;
          this.getData();
        }
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },

    /**
     * xoá nhiều nhân viên
     * author: vinhkt
     * created: 23/09/2022
     * */
    async deleteMultipleEmployees() {
      this.isLoading = true;
      try {
        let responseArray = [];
        for (let i = 0; i < this.selectEmployees.length; i++) {
          const id = this.selectEmployees[i];
          const response = await deleteEmployee(id);
          if (response) {
            responseArray.push(response);
          }
        }
        const countSuccessRequests = responseArray.filter((item) => {
          return item.status === 200;
        }).length;
        const countFailRequests = responseArray.length - countSuccessRequests;
        console.log(countSuccessRequests, countFailRequests);
        this.getData();
        this.isShowResult = true;
        this.resultText =
          INFO_TXT.DELETE_SUCCESS +
          " " +
          countSuccessRequests +
          " " +
          FIELD_NAME_VN.EMPLOYEE +
          " | " +
          INFO_TXT.DELETE_FAIL +
          " " +
          countFailRequests +
          " " +
          FIELD_NAME_VN.EMPLOYEE;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },

    /**
     * hàm tìm kiếm nhân viên theo mã và tên
     * author: vinhkt
     * created: 18/09/2022
     */
    onSearch: _.debounce(function () {
      this.params.pageNumber = 1;
      this.getData();
    }, 500),
    /**
     * ẩn hiện dropdown chức năng
     * author: vinhkt
     * created: 18/09/2022
     */
    showDropdownFunction() {
      this.isShowDropdown = !this.isShowDropdown;
    },

    /**
     * ẩn dropdown chức năng
     * author: vinhkt
     * created: 18/09/2022
     */
    closeDropdownFunction() {
      this.isShowDropdown = false;
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
