<template>
  <div class="table__content">
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
            <input type="checkbox" v-model="selected" :value="emp.EmployeeId" />
            <!-- <m-checkbox
              name="checkItem"
              :value="emp.EmployeeId"
              @update:selectedItem="checkBoxItemSelected($event)"
            />&nbsp; -->
          </td>
          <td
            v-for="(item, index) in headers"
            :key="index"
            :class="item.CellClass"
          >
            {{
              emp[item.Field]
                ? item.dataFormat
                  ? item.dataFormat(emp[item.Field])
                  : emp[item.Field]
                : ""
            }}
          </td>

          <td v-if="isShowFunctionDropdown">
            <button id="editButton" @click="toggleDialog(index)">Sửa</button>
            <div class="dropdown" style="float: right">
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
                <a href="#">Nhân bản</a>
                <a href="#" @click="warningDelete(emp)">Xoá</a>
                <a href="#">Ngưng sử dụng</a>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
// import MBaseControl from "../MBaseControl.vue";
// import MPaging from "./MPaging.vue";
export default {
  // extends: MBaseControl,
  components: {
    // MPaging,
  },
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
    };
  },
  created() {
    console.log(this.dataSource);
  },
  computed: {
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
  watch: {},
  methods: {
    toggleDialog(emp) {
      this.$emit("toggle-dialog", emp);
    },

    // ẩn hiện dropdown chức năng xoá
    showDropdownFunction: function (emp) {
      if (this.clickedEmployee.EmployeeId === emp.EmployeeId) {
        this.clickedEmployee = {};
      } else {
        this.clickedEmployee = emp;
      }
    },

    // ẩn dropdown
    closeFuntionDropdown: function () {
      this.clickedEmployee = {};
    },

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
