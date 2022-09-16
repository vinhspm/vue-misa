<template>
  <div id="dlgEmployeeDetail" class="dialog">
    <loading-layer v-if="isLoading"></loading-layer>

    <div class="dialog__content">
      <div class="dialog__button--close" @click="closeDialog"></div>
      <div class="dialog__header">
        <div class="title">Thông tin nhân viên</div>
        <div class="employee__type__container">
          <div>
            <input type="checkbox" name="employeeType" id="customerTypeCheckbox">
            <label for="customerTypeCheckbox">Là khách hàng</label>
          </div>
          <div>
            <input type="checkbox" name="employeeType" id="supplierTypeCheckbox">
            <label for="supplierTypeCheckbox">Là nhà cung cấp</label>
          </div>

        </div>
      </div>
      <div class="dialog__body">
        <div class="row">

          <div class="col">
            <div class="row">
              <div class="col w-30">
                <label>Mã (<span class="input--required">*</span>)</label>
                <input id="txtEmployeeCode" required="" name-property="Mã nhân viên" type="text"
                  v-model="employeeDetailData.EmployeeCode" class="input__form" />
              </div>
              <div class="col w-70">
                <label>Họ và tên (<span class="input--required">*</span>)</label>
                <input id="txtFullName" name-property="Họ và tên" required="" type="text"
                  v-model="employeeDetailData.FullName" class="input__form" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label>Đơn vị (<span class="input--required">*</span>)</label>
                <select v-model="employeeDetailData.DepartmentId" name="" id="cbxDepartment">
                  <option v-for="dpm in departments" :key="dpm.DepartmentId" :value="dpm.DepartmentId">
                    {{dpm.DepartmentName}}</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label>Vị trí</label>
                <select v-model="employeeDetailData.PositionId" name="" id="cbxPosition">
                  <option v-for="pst in positions" :key="pst.PositionId" :value="pst.PositionId">{{pst.PositionName}}
                  </option>
                </select>
              </div>
            </div>

          </div>
          <div class="col">
            <div class="row">
              <div class="col w-40">
                <label>Ngày sinh</label>
                <input v-model="employeeDetailData.DateOfBirth" id="dtDateOfBirth" type="date" class="input__form" />
              </div>
              <div class="col w-60">
                <label>Giới tính</label>
                <div class="row align-center h-32">
                  <div>
                    <input v-model="employeeDetailData.Gender" type="radio" id="genderMale" name="cbxGender" value="0">
                    <label for="genderMale">Nam</label>
                  </div>
                  <div class="ml-10">
                    <input v-model="employeeDetailData.Gender" type="radio" id="genderFemale" name="cbxGender"
                      value="1">
                    <label for="genderFemale">Nữ</label>
                  </div>
                  <div class="ml-10">
                    <input v-model="employeeDetailData.Gender" type="radio" id="genderOther" name="cbxGender" value="2">
                    <label for="genderOther">Khác</label>
                  </div>

                </div>

              </div>
            </div>
            <div class="row">
              <div class="col w-60">
                <label>Số CMND</label>
                <input v-model="employeeDetailData.IdentityNumber" id="nationalID" required="" type="text"
                  class="input__form" />
              </div>
              <div class="col w-40">
                <label>Ngày cấp</label>
                <input v-model="employeeDetailData.IdentityDate" id="dtDateOfRegistration" type="date"
                  class="input__form" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label>Nơi cấp</label>
                <input v-model="employeeDetailData.IdentityPlace" id="nationalID" required="" type="text"
                  class="input__form" />
              </div>
            </div>
          </div>

        </div>

        <div class="row">
          <div class="col">
            <label for="">Địa chỉ</label>
            <input v-model="employeeDetailData.Address" id="txtAddress" type="text" class="input__form" />
          </div>
        </div>
        <div class="row">
          <div class="col w-25">
            <label for="">ĐT di động</label>
            <input v-model="employeeDetailData.PhoneNumber" id="txtPhoneNumber" type="text" class="input__form" />
          </div>
          <div class="col w-25">
            <label for="">ĐT cố định</label>
            <input v-model="employeeDetailData.HomePhoneNumber" id="txtHomePhoneNumber" type="text"
              class="input__form" />
          </div>
          <div class="col w-25">
            <label for="">Email</label>
            <input v-model="employeeDetailData.Email" id="txtEmail" type="email" class="input__form" />
          </div>
        </div>
        <div class="row">
          <div class="col w-25">
            <label for="">Tài khoàn ngân hàng</label>
            <input v-model="employeeDetailData.BankAccount" id="txtBankAccount" type="text" class="input__form" />
          </div>
          <div class="col w-25">
            <label for="">Tên ngân hàng</label>
            <input v-model="employeeDetailData.BankName" id="txtBankName" type="text" class="input__form" />
          </div>
          <div class="col w-25">
            <label for="">Chi nhánh</label>
            <input v-model="employeeDetailData.BankBranch" id="txtBankBranch" type="text" class="input__form" />
          </div>
        </div>
      </div>
      <div class="dialog__footer">
        <button class="button button--cancel" @click="closeDialog">Hủy</button>
        <div>
          <button @click="onSaveOnly" class="button button--saveonly">
            Cất
          </button>
          <button @click="saveAndContinue" class="button button__icon icon icon--save">
            Cất và Thêm
          </button>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import { formatDateInput } from "../../js/base.js"
import { DEPARTMENT_DATA, POSITION_DATA } from "../../constants.js"
import LoadingLayer from "../../components/base/LoadingLayer.vue";

export default {
  components: { LoadingLayer },
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
    }
  },
  props: {
    selectedEmployee: Object
  },
  methods: {

    closeDialog: function () {
      this.$emit('close-dialog');
    },
    onSaveOnly: function () {
      this.bodyRequest = {
        "address": this.employeeDetailData.Address,
        "bankAccount": this.employeeDetailData.BankAccount,
        "bankBranch": this.employeeDetailData.BankBranch,
        "bankName": this.employeeDetailData.BankName,
        "dateOfBirth": this.employeeDetailData.DateOfBirth,
        "departmentId": this.employeeDetailData.DepartmentId,
        "email": this.employeeDetailData.Email,
        "employeeCode": this.employeeDetailData.EmployeeCode,
        "employeeId": this.employeeDetailData.EmployeeId,
        "fullName": this.employeeDetailData.FullName,
        "gender": this.employeeDetailData.Gender,
        "identityDate": this.employeeDetailData.IdentityDate,
        "identityNumber": this.employeeDetailData.IdentityNumber,
        "identityPlace": this.employeeDetailData.IdentityPlace,
        "phoneNumber": this.employeeDetailData.PhoneNumber,
        "positionId": this.employeeDetailData.PositionId,
        "homePhoneNumber": this.employeeDetailData.HomePhoneNumber,
      }
      if (this.isEdit) {
        this.updateEmployee();
      } else {
        this.addNewEmployee();
      }

      // console.log(this.bodyRequest);

    },
    saveAndContinue() {
      this.isContinue = true;
      this.onSaveOnly();
    },
    clearForm() {
      this.employeeDetailData = {};
    },
    addNewEmployee: function () {
      this.isLoading = true;
      fetch("https://cukcuk.manhnv.net/api/v1/Employees", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
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
        })
        .catch((res) => {
          this.isLoading = false;
          console.log(res);
        });
    },
    updateEmployee: function () {
      this.isLoading = true;
      fetch("https://cukcuk.manhnv.net/api/v1/Employees/" + this.employeeDetailData.EmployeeId, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
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
        })
        .catch((res) => {
          this.isLoading = false;
          console.log(res);
        });
    },
    getNextEmpId: async function () {
      const response = await fetch('https://cukcuk.manhnv.net/api/v1/Employees/NewEmployeeCode');
      if (!response.ok) {
        console.log(response);
        throw new Error(`Error! status: ${response.status}`);
      } else {
        this.employeeDetailData.EmployeeCode = response.json();
      }
    }
  },
  created() {
    if (Object.prototype.hasOwnProperty.call(this.selectedEmployee, 'EmployeeCode')) {
      // console.log(this.selectedEmployee);
      this.employeeDetailData = this.selectedEmployee;
      this.employeeDetailData.DateOfBirth = formatDateInput(this.employeeDetailData.DateOfBirth);
      this.employeeDetailData.IdentityDate = formatDateInput(this.employeeDetailData.IdentityDate);
      console.log('edit');
      this.isEdit = true;
    } else {
      this.isEdit = false;
      this.getNextEmpId();
      console.log('add new');
    }
    this.departments = DEPARTMENT_DATA;
    this.positions = POSITION_DATA;

  }
}
</script>
<style scoped>
@import url(../../css/page/employee_detail.css);
</style>