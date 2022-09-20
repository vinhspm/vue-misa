<template>
  <loading-layer v-if="isLoading"></loading-layer>
  <m-popup :componentWidth="900" @close-dialog="buttonCloseDialogClicked">
    <template #header>
      <div class="title">Thông tin nhân viên</div>
      <div class="employee__type__container">
        <div>
          <input
            type="checkbox"
            name="employeeType"
            id="customerTypeCheckbox"
          />
          <label for="customerTypeCheckbox">Là khách hàng</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="employeeType"
            id="supplierTypeCheckbox"
          />
          <label for="supplierTypeCheckbox">Là nhà cung cấp</label>
        </div>
      </div>
    </template>
    <template #content>
      <div class="row">
        <div class="col">
          <div class="row">
            <div class="col w-30">
              <label>Mã (<span class="input--required">*</span>)</label>
              <m-input
                type="text"
                :modelValue="employeeDetailData.EmployeeCode"
                @update:modelValue="employeeDetailData.EmployeeCode = $event"
              />
            </div>
            <div class="col w-70">
              <label>Họ và tên (<span class="input--required">*</span>)</label>
              <m-input
                type="text"
                :modelValue="employeeDetailData.FullName"
                @update:modelValue="employeeDetailData.FullName = $event"
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label>Đơn vị (<span class="input--required">*</span>)</label>
              <select
                v-model="employeeDetailData.DepartmentId"
                name=""
                id="cbxDepartment"
              >
                <option
                  v-for="dpm in departments"
                  :key="dpm.DepartmentId"
                  :value="dpm.DepartmentId"
                >
                  {{ dpm.DepartmentName }}
                </option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label>Vị trí</label>
              <select
                v-model="employeeDetailData.PositionId"
                name=""
                id="cbxPosition"
              >
                <option
                  v-for="pst in positions"
                  :key="pst.PositionId"
                  :value="pst.PositionId"
                >
                  {{ pst.PositionName }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <div class="col w-40">
              <label>Ngày sinh</label>
              <date-picker
                inputFormat="dd/MM/yyyy"
                v-model="employeeDetailData.DateOfBirth"
                id="dtDateOfBirth"
                class="input__form"
              />
            </div>
            <div class="col w-60">
              <label>Giới tính</label>
              <div class="row align-center h-32">
                <div>
                  <input
                    v-model="employeeDetailData.Gender"
                    type="radio"
                    id="genderMale"
                    name="cbxGender"
                    value="0"
                  />
                  <label for="genderMale">Nam</label>
                </div>
                <div class="ml-10">
                  <input
                    v-model="employeeDetailData.Gender"
                    type="radio"
                    id="genderFemale"
                    name="cbxGender"
                    value="1"
                  />
                  <label for="genderFemale">Nữ</label>
                </div>
                <div class="ml-10">
                  <input
                    v-model="employeeDetailData.Gender"
                    type="radio"
                    id="genderOther"
                    name="cbxGender"
                    value="2"
                  />
                  <label for="genderOther">Khác</label>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col w-60">
              <label>Số CMND</label>
              <m-input
                type="text"
                :modelValue="employeeDetailData.IdentityNumber"
                @update:modelValue="employeeDetailData.IdentityNumber = $event"
              />
            </div>
            <div class="col w-40">
              <label>Ngày cấp</label>
              <!-- <input
                v-model="employeeDetailData.IdentityDate"
                id="dtDateOfRegistration"
                type="date"
                class="input__form"
              /> -->
              <m-input
                type="date"
                :modelValue="employeeDetailData.IdentityDate"
                @update:modelValue="employeeDetailData.IdentityDate = $event"
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label>Nơi cấp</label>
              <m-input
                type="text"
                :modelValue="employeeDetailData.IdentityPlace"
                @update:modelValue="employeeDetailData.IdentityPlace = $event"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <label for="">Địa chỉ</label>
          <m-input
            type="text"
            :modelValue="employeeDetailData.Address"
            @update:modelValue="employeeDetailData.Address = $event"
          />
        </div>
      </div>
      <div class="row">
        <div class="col w-25">
          <label for="">ĐT di động</label>
          <m-input
            type="text"
            :modelValue="employeeDetailData.PhoneNumber"
            @update:modelValue="employeeDetailData.PhoneNumber = $event"
          />
        </div>
        <div class="col w-25">
          <label for="">ĐT cố định</label>
          <m-input
            type="text"
            :modelValue="employeeDetailData.HomePhoneNumber"
            @update:modelValue="employeeDetailData.HomePhoneNumber = $event"
          />
        </div>
        <div class="col w-25">
          <label for="">Email</label>
          <m-input
            type="email"
            :modelValue="employeeDetailData.Email"
            @update:modelValue="employeeDetailData.Email = $event"
          />
        </div>
      </div>
      <div class="row" style="margin-bottom: 30px">
        <div class="col w-25">
          <label for="">Tài khoàn ngân hàng</label>
          <m-input
            type="text"
            :modelValue="employeeDetailData.BankAccount"
            @update:modelValue="employeeDetailData.BankAccount = $event"
          />
        </div>
        <div class="col w-25">
          <label for="">Tên ngân hàng</label>
          <m-input
            type="text"
            :modelValue="employeeDetailData.BankName"
            @update:modelValue="employeeDetailData.BankName = $event"
          />
        </div>
        <div class="col w-25">
          <label for="">Chi nhánh</label>
          <m-input
            type="text"
            :modelValue="employeeDetailData.BankBranch"
            @update:modelValue="employeeDetailData.BankBranch = $event"
          />
        </div>
      </div>
    </template>
    <template #footer>
      <button class="button button--cancel" @click="closeDialog">Hủy</button>
      <div>
        <button @click="onSaveOnly" class="button button--saveonly">Cất</button>
        <button
          @click="saveAndContinue"
          class="button button__icon icon icon--save"
        >
          Cất và Thêm
        </button>
      </div>
    </template>
  </m-popup>
  <m-warning
    v-if="isShowWarning"
    :text="warningText"
    :dialogType="DIALOG_TYPE.ASK_CANCELABLE"
    @close-warning="closeWarning"
    @ok-warning="okWarning"
    @denied-warning="deniedWarning"
  ></m-warning>
</template>
<script>
import {
  DEPARTMENT_DATA,
  POSITION_DATA,
  DIALOG_TYPE,
  WARNING_TXT,
} from "../../constants.js";

export default {
  name: "EmployeeDetail",
  data() {
    return {
      isEdit: false,
      employeeDetailData: {},
      departments: [],
      positions: [],
      bodyRequest: {},
      isLoading: false,
      isContinue: false,
      DIALOG_TYPE: DIALOG_TYPE,
      isShowWarning: false,
      warningText: WARNING_TXT.DATA_CHANGED,
    };
  },
  props: {
    selectedEmployee: Object,
  },
  methods: {
    // kích hoạt sự kiện đóng form chi tiết
    closeDialog: function () {
      this.$emit("close-dialog");
    },

    buttonCloseDialogClicked() {
      if (
        JSON.stringify(this.employeeDetailData) ===
        JSON.stringify(this.selectedEmployee)
      ) {
        console.log("same");
        this.closeDialog();
      } else {
        console.log("diff");
        this.isShowWarning = true;
      }
    },

    //hàm tương ứng với nút cất, sẽ đẩy thông tin lên server rồi đóng form
    onSaveOnly: function () {
      this.bodyRequest = {
        address: this.employeeDetailData.Address,
        bankAccount: this.employeeDetailData.BankAccount,
        bankBranch: this.employeeDetailData.BankBranch,
        bankName: this.employeeDetailData.BankName,
        dateOfBirth: this.employeeDetailData.DateOfBirth,
        departmentId: this.employeeDetailData.DepartmentId,
        email: this.employeeDetailData.Email,
        employeeCode: this.employeeDetailData.EmployeeCode,
        employeeId: this.employeeDetailData.EmployeeId,
        fullName: this.employeeDetailData.FullName,
        gender: this.employeeDetailData.Gender,
        identityDate: this.employeeDetailData.IdentityDate,
        identityNumber: this.employeeDetailData.IdentityNumber,
        identityPlace: this.employeeDetailData.IdentityPlace,
        phoneNumber: this.employeeDetailData.PhoneNumber,
        positionId: this.employeeDetailData.PositionId,
        homePhoneNumber: this.employeeDetailData.HomePhoneNumber,
      };
      console.log(this.bodyRequest);
      if (this.isEdit) {
        this.updateEmployee();
      } else {
        this.addNewEmployee();
      }
      // console.log(this.bodyRequest);
    },

    //hàm đẩy thông tin lên server nhưng không đóng form mà clear form để thêm mới
    saveAndContinue() {
      this.isContinue = true;
      this.onSaveOnly();
    },

    //làm mới form chi tiết để thêm mới
    clearForm() {
      this.employeeDetailData = {};
      this.isEdit = false;
      this.bodyRequest = {};
      this.isContinue = false;
      this.getNextEmpId();
    },

    // gọi api thêm mới nhân viên
    // author: VinhKt
    addNewEmployee: function () {
      this.isLoading = true;
      fetch("https://cukcuk.manhnv.net/api/v1/Employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.bodyRequest),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.isLoading = false;
          if (this.isContinue) {
            this.clearForm();
          } else {
            this.closeDialog();
          }
          this.$emit("reload-data");
        })
        .catch((res) => {
          this.isLoading = false;
          console.log(res);
        });
    },

    // gọi api update nhân viên
    //author: VinhKT
    updateEmployee: function () {
      this.isLoading = true;
      fetch(
        "https://cukcuk.manhnv.net/api/v1/Employees/" +
          this.employeeDetailData.EmployeeId,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.bodyRequest),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.isLoading = false;
          if (this.isContinue) {
            this.clearForm();
          } else {
            this.closeDialog();
          }
          this.$emit("reload-data");
        })
        .catch((res) => {
          this.isLoading = false;
          alert(res);
          this.closeDialog();
        });
    },

    //tắt popup cảnh báo
    closeWarning() {
      this.isShowWarning = false;
    },

    // xác nhận người dùng đồng ý với popup cảnh báo
    okWarning() {
      this.onSaveOnly();
      this.closeWarning();
    },

    //
    deniedWarning() {
      this.closeWarning();
      // this.clearForm();
      this.closeDialog();
    },

    // lấy mã nhân viên kế tiếp với form thêm mới bằng api
    // author: VinhKT
    getNextEmpId: async function () {
      const response = await fetch(
        "https://cukcuk.manhnv.net/api/v1/Employees/NewEmployeeCode"
      );
      if (!response.ok) {
        console.log(response);
        throw new Error(`Error! status: ${response.status}`);
      } else {
        this.employeeDetailData.EmployeeCode = await response.text();
        // console.log();
      }
    },
  },

  //kiểm tra xem người dùng đang update hay thêm mới nhân viên
  //gán thông tin nhân viên được chọn để update vào data của component để có thể binding hai chiều
  created() {
    if (
      Object.prototype.hasOwnProperty.call(
        this.selectedEmployee,
        "EmployeeCode"
      )
    ) {
      // console.log(this.selectedEmployee);
      this.employeeDetailData = {...this.selectedEmployee};
      console.log("edit");
      console.log(this.employeeDetailData.DateOfBirth);
      this.isEdit = true;
    } else {
      this.isEdit = false;
      this.getNextEmpId();
      console.log("add new");
    }
    this.departments = DEPARTMENT_DATA;
    this.positions = POSITION_DATA;
  },
};
</script>
<style scoped>
@import url(../../css/page/employee_detail.css);
</style>
