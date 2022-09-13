<template>
  <div id="dlgEmployeeDetail" class="dialog" style="display: block">
    <div class="dialog__content">
      <div class="dialog__button--close"></div>
      <div class="dialog__header">
        <div class="title">Thông tin nhân viên</div>
        <div class="employee__type__container">
          <div>
            <input type="checkbox" name="employeeType" id="customerTypeCheckbox">
            <span>Là khách hàng</span>
          </div>
          <div>
            <input type="checkbox" name="employeeType" id="supplierTypeCheckbox">
            <span>Là nhà cung cấp</span>
          </div>

        </div>
      </div>
      <div class="dialog__body">
        <div class="row">

          <div class="col">
            <div class="row">
              <div class="col w-30">
                <label>Mã (<span class="input--required">*</span>)</label>
                <input id="txtEmployeeCode" required="" name-property="Mã nhân viên" type="text" class="input__form" />
              </div>
              <div class="col w-70">
                <label>Họ và tên (<span class="input--required">*</span>)</label>
                <input id="txtFullName" name-property="Họ và tên" required="" type="text" class="input__form" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label>Đơn vị</label>
                <select name="" id="cbxDepartment">
                  <option value="0">Phòng tuyển dụng</option>
                  <option value="1">Phòng Nhân sự</option>
                  <option value="0">Phòng hành chính</option>
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
                <input id="dtDateOfBirth" type="date" class="input__form" />
              </div>
              <div class="col w-60">
                <label>Giới tính</label>
                <div class="row align-center h-32">
                  <div>
                    <input type="radio" id="genderMale" name="cbxGender" value="male">
                    <label for="genderMale">Nam</label>
                  </div>
                  <div class="ml-10">
                    <input type="radio" id="genderFemale" name="cbxGender" value="female">
                    <label for="genderFemale">Nữ</label>
                  </div>
                  <div class="ml-10">
                    <input type="radio" id="genderOther" name="cbxGender" value="other">
                    <label for="genderOther">Khác</label>
                  </div>

                </div>

              </div>
            </div>
            <div class="row">
              <div class="col w-60">
                <label>Số CMND</label>
                <input id="nationalID" required="" type="text" class="input__form" />
              </div>
              <div class="col w-40">
                <label>Ngày cấp</label>
                <input id="dtDateOfRegistration" type="date" class="input__form" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label>Nơi cấp</label>
                <input id="nationalID" required="" type="text" class="input__form" />
              </div>
            </div>
          </div>

        </div>

        <div class="row">
          <div class="col">
            <label for="">Địa chỉ</label>
            <input id="txtAddress" type="text" class="input__form" />
          </div>
        </div>
        <div class="row">
          <div class="col w-25">
            <label for="">ĐT di động</label>
            <input id="txtPhoneNumber" type="text" class="input__form" />
          </div>
          <div class="col w-25">
            <label for="">ĐT cố định</label>
            <input id="txtHomePhoneNumber" type="text" class="input__form" />
          </div>
          <div class="col w-25">
            <label for="">Email</label>
            <input id="txtEmail" type="email" class="input__form" />
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
        <button id="btnSave" class="button button__icon icon icon--save" style="order: 1">
          Cất
        </button>
        <button class="button button--cancel" style="order: 2">Hủy</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EmployeeDetail",
}
</script>
<style scoped>
@import url(../../css/page/employee_detail.css);
</style>