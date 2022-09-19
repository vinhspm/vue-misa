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
            <input type="checkbox" name="checkAll" />&nbsp;
          </th>
          <th
            class="text-align--left"
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
          v-for="emp in dataSource"
          :key="emp.EmployeeId"
          @dblclick="toggleDialog(emp)"
        >
          <td v-if="showCheckbox" class="sticky_body_left text-align--center">
            <input type="checkbox" name="checkItem" />&nbsp;
          </td>
          <td
            v-for="(item, index) in headers"
            :key="index"
            :class="item.CellClass"
          >
            {{ emp[item.Field] ? emp[item.Field] : "-" }}
          </td>
          <td v-if="isShowFunctionDropdown">
            <button id="editButton" @click="toggleDialog(emp)">Sửa</button>
            <div class="dropdown" style="float: right">
              <button
                class="dropbtn"
                @click="showDropdownFuntion(emp)"
              ></button>
              <!-- @blur="closeFuntionDropdown()" -->
              <div
                class="dropdown-content"
                v-show="clickedEmployee.EmployeeId == emp.EmployeeId"
                @focusout="closeFuntionDropdown"
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
  <!-- <m-paging></m-paging> -->
</template>
<script>
// import MBaseControl from "../MBaseControl.vue";
// import MPaging from "./MPaging.vue";
export default {
  // extends: MBaseControl,
  components: {
    // MPaging,
  },
  name: "MDropdown",
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
      default: () => [
        {
          Address: null,
          CreatedBy: null,
          CreatedDate: "2022-09-19T15:04:08",
          DateOfBirth: "2022-09-19T00:00:00",
          DepartmentCode: null,
          DepartmentId: null,
          DepartmentName: null,
          EducationalBackground: null,
          EducationalBackgroundName: null,
          Email: "muny@gmail.com",
          EmployeeCode: "NV202212121",
          EmployeeId: "a3831c51-37f1-11ed-96f1-00163e06abee",
          FirstName: null,
          FullName: "muny",
          Gender: 1,
          GenderName: "Nữ",
          IdentityDate: "2022-09-19T00:00:00",
          IdentityNumber: "444555",
          IdentityPlace: "ha noi",
          JoinDate: null,
          LastName: null,
          MartialStatus: null,
          MartialStatusName: null,
          ModifiedBy: null,
          ModifiedDate: "2022-09-19T15:10:35",
          NationalityId: null,
          NationalityName: null,
          PersonalTaxCode: "",
          PhoneNumber: "087ttt",
          PositionCode: null,
          PositionId: null,
          PositionName: null,
          QualificationId: null,
          QualificationName: null,
          Salary: null,
          WorkStatus: 1,
        },
      ],
    },
  },
  data() {
    return {
      clickedEmployee: {},
    };
  },
  created() {
    // console.log(this.dataSource);
  },
  watch: {},
  methods: {
    toggleDialog(emp) {
      this.$emit("toggle-dialog", emp);
    },

    // ẩn hiện dropdown chức năng xoá
    showDropdownFuntion: function (emp) {
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
      this.$emit('warning-delete', emp);
    }
  },
};
</script>
<style scoped>
@import url(../../css/page/employee.css);
</style>
