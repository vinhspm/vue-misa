<template>
  <div class="table__content">
    <div class="table__content_body">
      <table id="tbEmployeeList" class="table">
        <thead class="table__header">
          <tr>
            <th
              v-if="showCheckbox"
              class="text-align--center sticky_header_left"
              title=""
              style="min-width: 40px"
            >
              <input type="checkbox" v-model="selectAll" />
            </th>
            <th
              :class="item.Class"
              v-for="(item, index) in headers"
              :style="{ 'min-width': item.Width + 'px' }"
              :key="index"
            >
              {{ item.Caption }}
            </th>
            <th
              v-if="isShowFunctionDropdown"
              class="text-align--left"
              style="min-width: 100px"
            >
              chức năng
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(emp, index) in dataSource"
            :key="emp.EmployeeId"
            @dblclick="toggleDialog(index)"
          >
            <td v-if="showCheckbox" class="sticky_body_left text-align--center">
              <input
                type="checkbox"
                v-model="selected"
                :value="emp.EmployeeId"
              />
            </td>
            <td
              v-for="(item, index) in headers"
              :key="index"
              :class="item.CellClass"
            >
              {{
                getValueTxt(item, emp)    
              }}
            </td>

            <td v-if="isShowFunctionDropdown" class="rowFunctionContainer">
              <button id="editButton" @click="toggleDialog(index)">Sửa</button>
              <div
                class="dropdown"
                style="float: right"
                v-click-away="clickedEmployee.EmployeeId == emp.EmployeeId? closeFunctionDropdown: ''"
              >
                <button
                  class="dropbtn"
                  @click="showDropdownFunction(emp)"
                ></button>
                <!-- @blur="closeFuntionDropdown()" -->
                <div
                  class="dropdown-content"
                  v-show="clickedEmployee.EmployeeId == emp.EmployeeId"
                  tabindex="0"
                  ref="dropdown"
                >
                  <a href="#" @click="closeFunctionDropdown">Nhân bản</a>
                  <a href="#" @click="warningDelete(emp)">Xoá</a>
                  <a href="#" @click="closeFunctionDropdown">Ngưng sử dụng</a>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import {FIELD_NAME_EN} from '@/constants.js';
import {getDepartments} from "@/axios/departmentController/departmentController.js";
import {getPositions} from "@/axios/positionController/positionController.js";
export default {
  props: {
    showCheckbox: {
      Type: Boolean,
      default: true,
    },
    isShowFunctionDropdown: {
      Type: Boolean,
      default: true,
    },
    headers: {
      Type: Array,
      default: [],
    },
    dataSource: {
      Type: Array,
      default: [],
    },
  },

  data() {
    return {
      clickedEmployee: {},
      selected: [],
      fieldName: FIELD_NAME_EN,
      departments: [],
      positions: [],
    };
  },

  created() {
    this.getDepartmentAndPositionData();
  },

  computed: {

    /**
     * thiết lập giá trị cho selectAll khi checkbox selectall được check / bỏ check
     * và check / bỏ check cho checkbox selectall khi mảng selected thay đổi
     * author: vinhkt
     * created: 23/09/2022
     */
    selectAll: {
      get: function () {
        return this.dataSource
          ? this.selected.length == this.dataSource.length
          : false;
      },
      set: function (value) {
        let selected = [];

        if (value) {
          this.dataSource.forEach(function (emp) {
            selected.push(emp.EmployeeId);
          });
        }

        this.selected = selected;
      },
    },
  },

  watch: {
    /**
     * update mảng selectedEmployees ở component cha khi mảng selected ở component con thay đổi
     * author: vinhkt
     * created: 23/09/2022
     */
    "selected.length": {
      handler() {
        this.$emit("update:selectEmployees", this.selected);
      },
    },

    /**
     * update mảng selected về rỗng khi dataSource có sự thay đổi ( khi thêm, sửa, xoá data thành công)
     * author: vinhkt
     * created: 23/09/2022
     */
    dataSource: {
      handler() {
        this.selected = [];
      },
      deep: true,
    },
  },
  methods: {
    
    /**
     * lấy dữ liệu department và position
     */
    async getDepartmentAndPositionData() {
      const departmentResponse = await getDepartments();
      const positionResponse = await getPositions();
      if(departmentResponse) {
        this.departments = departmentResponse.data;
      }
      if(positionResponse) {
        this.positions = positionResponse.data;
      }
     },

    /**
     * ẩn hiện dialog
     * author: vinhkt
     * created: 23/09/2022
     */
    toggleDialog(emp) {
      this.$emit("toggle-dialog", emp);
    },

    /**
     * hàm lấy text hiển thị trên bảng
     * @param {header_data} item 
     * @param {employeeData} emp 
     */
    getValueTxt(item, emp) {
      if(item.Field === this.fieldName.DepartmentId) {
        const index = (this.departments.findIndex(ele => {
          return ele.DepartmentId === emp[item.Field];
        }));
        if(index >= 0) {
          return this.departments[index].DepartmentName;
        } else return "";
      }
      if(item.Field === this.fieldName.PositionId) {
        const index = (this.positions.findIndex(ele => {
          return ele.PositionId === emp[item.Field];
        }));
        if(index >= 0) {
          return this.positions[index].PositionName;
        } else return "";
      }
      return item.dataFormat
              ? item.dataFormat(emp[item.Field])
              : emp[item.Field]
    },

    /**
     * ẩn hiện dropdown chức năng xoá
     * author: vinhkt
     * created: 23/09/2022
     */
    showDropdownFunction: function (emp) {
      if (this.clickedEmployee.EmployeeId === emp.EmployeeId) {
        this.clickedEmployee = {};
      } else {
        this.clickedEmployee = emp;
      }
    },

    /**
     * ẩn dropdown chức năng xoá
     * author: vinhkt
     * created: 23/09/2022
     */
    closeFunctionDropdown: function () {
      this.clickedEmployee = {};
    },

    /**
     * kích hoạt sự kiện hiện warning chức năng xoá
     * author: vinhkt
     * created: 23/09/2022
     */
    warningDelete(emp) {
      this.clickedEmployee = {};
      this.$emit("warning-delete", emp);
    },
  },
};
</script>
<style scoped>
@import url(../../css/page/employee.css);
</style>
