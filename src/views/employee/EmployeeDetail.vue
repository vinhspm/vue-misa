<template>
  <div id="dlgEmployeeDetail" class="dialog">
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
                <input id="txtEmployeeCode" required="" name-property="Mã nhân viên" type="text" v-model="employeeDetailData.EmployeeCode" class="input__form" />
              </div>
              <div class="col w-70">
                <label>Họ và tên (<span class="input--required">*</span>)</label>
                <input id="txtFullName" name-property="Họ và tên" required="" type="text" v-model="employeeDetailData.FullName" class="input__form" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label>Đơn vị</label>
                <select v-model="employeeDetailData.DepartmentCode" name="" id="cbxDepartment">
                  <option value="AB88">Phòng Nhân sự</option>
                  <option value="VT66">Phòng hành chính</option>
                  <option value="IU61">Phòng kế toán</option>
                  <option value="NL20">Phòng Công nghệ thông tin</option>

                </select>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label>Vị trí</label>
                <select name="" id="cbxPosition">
                  <option value="0">Giám đốc</option>
                  <option value="1">Nhân viên</option>
                  <option value="0">Trưởng phòng</option>
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
                    <input v-model="employeeDetailData.Gender" type="radio" id="genderFemale" name="cbxGender" value="1">
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
                <input v-model="employeeDetailData.IdentityNumber" id="nationalID" required="" type="text" class="input__form" />
              </div>
              <div class="col w-40">
                <label>Ngày cấp</label>
                <input v-model="employeeDetailData.IdentityDate"  id="dtDateOfRegistration" type="date" class="input__form" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label>Nơi cấp</label>
                <input v-model="employeeDetailData.IdentityPlace" id="nationalID" required="" type="text" class="input__form" />
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
            <input id="txtHomePhoneNumber" type="text" class="input__form" />
          </div>
          <div class="col w-25">
            <label for="">Email</label>
            <input v-model="employeeDetailData.Email" id="txtEmail" type="email" class="input__form" />
          </div>
        </div>
        <div class="row">
          <div class="col w-25">
            <label for="">Tài khoàn ngân hàng</label>
            <input id="txtBankAccount" type="text" class="input__form" />
          </div>
          <div class="col w-25">
            <label for="">Tên ngân hàng</label>
            <input id="txtBankName" type="text" class="input__form" />
          </div>
          <div class="col w-25">
            <label for="">Chi nhánh</label>
            <input id="txtBankBranch" type="text" class="input__form" />
          </div>
        </div>
      </div>
      <div class="dialog__footer">
        <button id="btnSave" @click="onSave" class="button button__icon icon icon--save" style="order: 1">
          {{txtSaveButton}}
        </button>
        <button class="button button--cancel" style="order: 2" @click="closeDialog">Hủy</button>
      </div>
    </div>
  </div>
</template>
<script>
import {formatDateInput} from "../../js/base.js"
import {SAVE_BUTTON_TXT} from "../../constants.js"

export default {
  name: "EmployeeDetail",
  data() {
    return {
      employeeDetailData: {},
      txtSaveButton: ""
    }
  },
  props: {
    selectedEmployee: Object
  },  
  methods: {
    closeDialog: function() {
      this.$emit('close-dialog');
    },
    onSave: function () {
      console.log('save');
    }
  },
  created() {
    if(Object.prototype.hasOwnProperty.call(this.selectedEmployee, 'EmployeeCode')) {
      console.log(this.selectedEmployee);
      this.employeeDetailData = this.selectedEmployee;
      this.employeeDetailData.DateOfBirth = formatDateInput(this.employeeDetailData.DateOfBirth);
      this.employeeDetailData.IdentityDate = formatDateInput(this.employeeDetailData.IdentityDate);
      this.txtSaveButton = SAVE_BUTTON_TXT.EDIT;
      console.log('edit');
    } else {
      this.txtSaveButton = SAVE_BUTTON_TXT.ADD_NEW;
      console.log('add new');
    }
    

  }
}
</script>
<style scoped>
@import url(../../css/page/employee_detail.css);
</style>