<template>
  <div id="dlgEmployeeDetail" class="dialog" style="display: block">
    <div class="dialog__content">
      <div class="dialog__button--close"></div>
      <div class="dialog__header">
        <div class="title">Thông tin nhân viên</div>
      </div>
      <div class="dialog__body">
        <div class="row">
          <div class="col">
            <label>Mã nhân viên (<span class="input--required">*</span>)</label>
            <input
              id="txtEmployeeCode"
              required=""
              name-property="Mã nhân viên"
              type="text"
              class="input"
            />
          </div>
          <div class="col">
            <label>Họ và tên (<span class="input--required">*</span>)</label>
            <input
              id="txtFullName"
              name-property="Họ và tên"
              required=""
              type="text"
              class="input"
            />
          </div>
        </div>
        <div class="row">
          <div class="col col-50">
            <label>Giới tính</label>
            <select name="" id="cbxGender">
              <option value="0">Nam</option>
              <option value="1">Nữ</option>
              <option value="0">Khác</option>
            </select>
          </div>
          <div class="col col-50">
            <label>Ngày sinh</label>
            <input id="dtDateOfBirth" type="date" class="input" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label>Email (<span class="input--required">*</span>)</label>
            <input
              id="txtEmail"
              name-property="Email"
              required=""
              type="text"
              class="input"
            />
          </div>
          <div class="col">
            <label
              >Số điện thoại (<span class="input--required">*</span>)</label
            >
            <input
              id="txtPhoneNumber"
              name-property="Số điện thoại"
              required=""
              type="text"
              class="input"
            />
          </div>
        </div>
        <div class="row">
          <div class="col col-50">
            <label>Vị trí</label>
            <select name="" id="cbxPosition">
              <option value="0">Giám đốc</option>
              <option value="1">Nhân viên</option>
              <option value="0">Trưởng phòng</option>
            </select>
          </div>
          <div class="col col-50">
            <label>Phòng ban</label>
            <select name="" id="cbxDepartment">
              <option value="0">Phòng tuyển dụng</option>
              <option value="1">Phòng Nhân sự</option>
              <option value="0">Phòng hành chính</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="">Địa chỉ</label>
            <textarea id="txtAddress" cols="30" rows="3"></textarea>
          </div>
        </div>
      </div>
      <div class="dialog__footer">
        <button
          id="btnSave"
          class="button button__icon icon icon--save"
          style="order: 1"
        >
          Cất
        </button>
        <button class="button button--cancel" style="order: 2">Hủy</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name : "EmployeeDetail",
  }
</script>
<style scoped>
  @import url(../../css/page/employee_detail.css);
</style>