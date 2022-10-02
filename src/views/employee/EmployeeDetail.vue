<template>
  <loading-layer v-if="isLoading"></loading-layer>
  <m-popup
    :componentWidth="900"
    @close-dialog="buttonCloseDialogClicked"
  >
    <template #header>
      <div class="title">Thông tin nhân viên</div>
      <div class="employee__type__container">
        <div>
          <m-input
            type="checkbox"
            name="employeeType"
            id="customerTypeCheckbox"
          />
          <label for="customerTypeCheckbox">Là khách hàng</label>
        </div>
        <div>
          <m-input
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
                :isRequire="true"
                :fieldNameTxt="fieldNameVnTxt.CODE"
                @field-invalid="(title) => addError(title)"
                @field-valid="(title) => removeError(title)"
                :isValidProp="fieldValid.EmployeeCode"
              />
            </div>
            <div class="col w-70">
              <label>Họ và tên (<span class="input--required">*</span>)</label>
              <m-input
                type="text"
                :modelValue="employeeDetailData.FullName"
                @update:modelValue="employeeDetailData.FullName = $event"
                :isRequire="true"
                :fieldNameTxt="fieldNameVnTxt.FULLNAME"
                @field-invalid="(title) => addError(title)"
                @field-valid="(title) => removeError(title)"
                :isValidProp="fieldValid.FullName"
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label>Đơn vị (<span class="input--required">*</span>)</label>
              <m-department-combobox
                :data="departments"
                fieldKey="DepartmentId"
                fieldCode="DepartmentCode"
                fieldName="DepartmentName"
                :modelValue="employeeDetailData.DepartmentId"
                @update:modelValue="employeeDetailData.DepartmentId = $event"
                :isRequire="true"
                :fieldNameTxt="fieldNameVnTxt.DEPARTMENT"
                @field-invalid="(title) => addError(title)"
                @field-valid="(title) => removeError(title)"
                :isValidProp="fieldValid.DepartmentId"
              >
              </m-department-combobox>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label>Vị trí</label>
              <m-combobox
                :data="positions"
                fieldKey="PositionId"
                fieldName="PositionName"
                :modelValue="employeeDetailData.PositionId"
                @update:modelValue="employeeDetailData.PositionId = $event"
                :fieldNameTxt="fieldNameVnTxt.POSITION"
                @field-invalid="(title) => addError(title)"
                @field-valid="(title) => removeError(title)"
              >
              </m-combobox>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <div class="col w-40">
              <label>Ngày sinh</label>
              <m-input
                type="date"
                :modelValue="employeeDetailData.DateOfBirth"
                @update:modelValue="employeeDetailData.DateOfBirth = $event"
              />
            </div>
            <div class="col w-60">
              <label>Giới tính</label>
              <div class="row align-center h-32">
                <m-radio
                  :data="genderData"
                  :selected="employeeDetailData.Gender"
                  @update:selectedItem="employeeDetailData.Gender = $event? $event: employeeDetailData.Gender"
                ></m-radio>
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
  <m-warning
    v-if="isShowError"
    :text="errorText"
    :dialogType="DIALOG_TYPE.ALERT"
    @close-warning="closeWarning"
  >
  </m-warning>
</template>
<script>
import {
  DIALOG_TYPE,
  WARNING_TXT,
  GENDER_RADIO_DATA,
  FIELD_NAME_VN,
  EMPLOYEE_FIELD_RULES,
} from "../../constants.js";
import { toCamel } from "@/js/base.js";
import {
  getNextEmployee,
  postEmployee,
  putEmployee,
} from "@/axios/employeeController/employeeController.js";
import {getDepartments} from "@/axios/departmentController/departmentController.js";
import {getPositions} from "@/axios/positionController/departmentController.js";

import { BaseValidateMixins } from "@/components/base/BaseValidateMixins.js";

export default {
  mixins: [BaseValidateMixins],
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
      isShowError: false,
      warningText: WARNING_TXT.DATA_CHANGED,
      genderData: GENDER_RADIO_DATA,
      fieldNameVnTxt: FIELD_NAME_VN,
      errorList: [],
      errorText: "",
      isFormTouched: false,
      fieldValid: {
        EmployeeCode: {
          value: true,
          msg: "",
        },
        FullName: {
          value: true,
          msg: "",
        },
        DepartmentId: {
          value: true,
          msg: "",
        },
      },
    };
  },
  props: {
    selectedEmployee: Object,
  },

  watch: {
    employeeDetailData: {
      handler() {
        if (this.isFormTouched) {
          this.updateValidateData();
          this.updateListError();
        }
      },
      deep: true,
    },
  },

  methods: {
    /**
     * kích hoạt sự kiện đóng form chi tiết
     * author: vinhkt
     * created: 19/09/2022
     */
    closeDialog: function () {
      this.$emit("close-dialog");
    },

    /**
     * khi đóng form kiểm tra dữ liệu có bị thay đổi không và hiện warning
     * author: vinhkt
     * created: 19/09/2022
     */
    buttonCloseDialogClicked() {
      if (
        JSON.stringify(this.employeeDetailData) ===
        JSON.stringify(this.selectedEmployee)
      ) {
        this.closeDialog();
      } else {
        this.isShowWarning = true;
        console.log(JSON.stringify(this.employeeDetailData));
        console.log(JSON.stringify(this.selectedEmployee));

      }
    },

    /**
     * hàm update data mixins dành cho việc validate
     * author: vinhkt
     * created: 24/09/2022
     */
    updateValidateData() {
      const fieldRules = EMPLOYEE_FIELD_RULES;
      for (const key of Object.keys(fieldRules)) {
        const obj = {
          rules: fieldRules[key],
          value: this.employeeDetailData[key],
        };
        this.needValidateData[key] = obj;
      }
      for (const key of Object.keys(this.employeeDetailData)) {
        const obj = {
          rules: fieldRules[key],
          value: this.employeeDetailData[key],
        };
        this.needValidateData[key] = obj;
      }
    },

    /**
     * hàm update listError để truyền vào component con
     * author: vinhkt
     * created: 21/09/2022
     */
    updateListError() {
      const listError = this.validateData();
      console.log(listError);
      for (let key of Object.keys(this.fieldValid)) {
        if (listError[key]) {
          this.fieldValid[key].value = false;
          this.fieldValid[key].msg = listError[key];
        } else {
          this.fieldValid[key].value = true;
          this.fieldValid[key].msg = "";
        }
      }
    },

    /**
     * hàm tương ứng với nút cất, sẽ đẩy thông tin lên server rồi đóng form
     * author: vinhkt
     * created: 21/09/2022
     */
    onSaveOnly: function () {
      this.isFormTouched = true;
      this.updateValidateData();
      this.updateListError();
      for (let key of Object.keys(this.fieldValid)) {
        if (!this.fieldValid[key].value) {
          this.errorText = this.fieldValid[key].msg;
          this.isShowError = true;
          return;
        }
      }
      if (this.errorList.length) {
        this.errorText = this.errorList[0];
        this.isShowError = true;
      } else {
        this.bodyRequest = toCamel(this.employeeDetailData);
        console.log(this.bodyRequest);
        if (this.isEdit) {
          this.updateEmployee();
        } else {
          this.addNewEmployee();
        }
      }
    },

    /**
     * hàm tương ứng với nút cất và thêm, sẽ đẩy thông tin lên server rồi clear form để thêm mới
     * author: vinhkt
     * created: 21/09/2022
     */
    saveAndContinue() {
      this.isContinue = true;
      this.onSaveOnly();
    },

    /**
     * làm mới form chi tiết để thêm mới
     * author: vinhkt
     * created: 16/09/2022
     */
    clearForm() {
      this.employeeDetailData = {};
      this.isEdit = false;
      this.bodyRequest = {};
      this.isContinue = false;
      this.getNextEmpId();
    },

    /**
     * api thêm mới nhân viên
     * author: vinhkt
     * created: 21/09/2022
     */
    addNewEmployee: async function () {
      this.isLoading = true;
      const body = this.bodyRequest;
      try {
        const response = await postEmployee(body);
        if (response) {
          console.log(response);
          this.isLoading = false;
          if (this.isContinue) {
            this.clearForm();
          } else {
            this.closeDialog();
          }
          this.$emit("reload-data");
        }
      } catch (error) {
        console.log(error);
        this.closeDialog();
        this.isLoading = false;
      }
    },

    /**
     * api update nhân viên
     * author: vinhkt
     * created: 21/09/2022
     */
    updateEmployee: async function () {
      this.isLoading = true;
      const body = this.bodyRequest;
      const id = this.employeeDetailData.EmployeeId;
      try {
        const response = await putEmployee(id, body);
        if (response) {
          console.log(response);
          this.isLoading = false;
          if (this.isContinue) {
            this.clearForm();
          } else {
            this.closeDialog();
          }
          this.$emit("reload-data");
        }
      } catch (error) {
        console.log(error);
        this.closeDialog();
        this.isLoading = false;
      }
    },

    /**
     * tắt popup cảnh báo
     * author: vinhkt
     * created: 21/09/2022
     */
    closeWarning() {
      this.isShowWarning = false;
      this.isShowError = false;
    },

    /**
     * xác nhận người dùng đồng ý với popup cảnh báo
     * author: vinhkt
     * created: 21/09/2022
     */
    okWarning() {
      this.onSaveOnly();
      this.closeWarning();
    },

    /**
     * xác nhận người dùng đồng ý với popup cảnh báo
     * author: vinhkt
     * created: 16/09/2022
     */
    deniedWarning() {
      this.closeWarning();
      this.closeDialog();
    },

    /**
     * lấy mã nhân viên kế tiếp với form thêm mới bằng api
     * author: vinhkt
     * created: 16/09/2022
     */
    getNextEmpId: async function () {
      try {
        const response = await getNextEmployee();
        if (response) {
          this.employeeDetailData.EmployeeCode = response.data.toString();
          this.isLoading = false;
        }
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },

    /**
     * hàm thêm một lỗi của trường nhập liệu vào danh sách nếu chưa có
     * author: VinhKT
     * created: 21/09/2022
     */
    addError(title) {
      if (this.errorList.includes(title)) {
        return;
      } else {
        this.errorList.push(title);
        console.log(this.errorList);
      }
    },

    /**
     * hàm xoá một lỗi của trường nhập liệu khỏi danh sách
     * author: VinhKT
     * created: 21/09/2022
     */
    removeError(title) {
      if (this.errorList.includes(title)) {
        const index = this.errorList.indexOf(title);
        if (index > -1) {
          this.errorList.splice(index, 1);
          console.log(this.errorList);
        }
      } else {
        return;
      }
    },

    /**
     * lấy dữ liệu đầu vào cho combobox vị trí và đơn vị
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
     }
  },

  /**
   * kiểm tra xem người dùng đang update hay thêm mới nhân viên
   * gán thông tin nhân viên được chọn để update vào data của component để có thể binding hai chiều
   * author: vinhkt
   * created: 18/09/2022
   */
  created() {
    this.getDepartmentAndPositionData();
    if (
      Object.prototype.hasOwnProperty.call(
        this.selectedEmployee,
        "EmployeeCode"
      )
    ) {
      this.employeeDetailData = { ...this.selectedEmployee };
      console.log("edit");
      console.log(this.employeeDetailData.DateOfBirth);
      this.isEdit = true;
    } else {
      this.isEdit = false;
      this.getNextEmpId();
      
      console.log("add new");
    }
    

  },
};
</script>
<style scoped>
@import url(../../css/page/employee_detail.css);
</style>
