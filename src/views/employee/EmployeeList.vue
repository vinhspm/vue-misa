<template>
  <div class="page__header">
    <div class="page__header--title heading">Nhân viên</div>
    <m-button
      id="btnAdd"
      class="page__header--button button button__icon button__icon--employee"
      text="Thêm mới nhân viên"
    >
    </m-button>
  </div>

  <div class="page__table">
    <div class="page__toolbar">
      <div class="page__toolbar--left">
        <input
          type="text"
          class="input input__icon input__icon--search"
          placeholder="Tìm theo mã, tên nhân viên"
        />
      </div>
      <div class="page__toolbar--right">
        <button id="btnRefresh"></button>
      </div>
    </div>
    <div class="table__content">
      <table id="tbEmployeeList" class="table">
        <thead class="table__header">
          <tr>
            <th
              class="text-align--center sticky_header_left"
              title=""
              style="min-width: 40px"
            >
              <input type="checkbox" name="checkAll" />&nbsp;
            </th>
            <th
              class="text-align--left sticky_header_left_1"
              style="min-width: 150px"
            >
              Mã nhân viên
            </th>
            <th class="text-align--left" style="min-width: 200px">
              Tên nhân viên
            </th>
            <th class="text-align--left" style="min-width: 150px">Giới tính</th>
            <th class="text-align--left" style="min-width: 150px">Ngày sinh</th>
            <th class="text-align--left" style="min-width: 150px">số cmnd</th>
            <th class="text-align--left" style="min-width: 200px">chức danh</th>
            <th class="text-align--left" style="min-width: 250px">
              tên đơn vị
            </th>
            <th class="text-align--left" style="min-width: 200px">
              Số tài khoản
            </th>
            <th class="text-align--left" style="min-width: 250px">
              Tên ngân hàng
            </th>
            <th class="text-align--left" style="min-width: 350px">
              chi nhánh tk ngân hàng
            </th>
            <th
              class="text-align--left sticky_header_right"
              style="min-width: 100px"
            >
              chức năng
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="emp in employees" :key="emp.EmployeeId">
            <td class="sticky_body_left text-align--center">
              <input type="checkbox" name="checkItem" />&nbsp;
            </td>
            <td class="sticky_body_left_1">{{ emp.EmployeeCode }}</td>
            <td>{{ emp.FullName }}</td>
            <td>{{ emp.GenderName }}</td>
            <td>22/08/1996</td>
            <td>001929838172</td>
            <td>Giám đốc</td>
            <td>Phòng Công Nghệ Thông Tin</td>
            <td>1902093827182711</td>
            <td></td>
            <td></td>
            <th class="sticky_col_right">
              <button id="editButton">Sửa</button>
              <div class="dropdown" style="float: right">
                <button class="dropbtn"></button>
                <div class="dropdown-content">
                  <a href="#">Nhân bản</a>
                  <a href="#">Xoá</a>
                  <a href="#">Ngưng sử dụng</a>
                </div>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table__paging">
      <div class="table__paging--left">
        Tổng số: <b>{{ employees.length }}</b> bản ghi
      </div>

      <div class="table__paging--right">
        <select name="" class="combobox">
          <option value="10">10 nhân viên/ trang</option>
          <option value="20">20 nhân viên/ trang</option>
          <option value="30">30 nhân viên/ trang</option>
          <option value="40">40 nhân viên/ trang</option>
        </select>
        <div class="table__paging--center">
          <button class="paging__button">Trước</button>
          <div class="paging__button--group">
            <button class="paging__number paging__number--selected">1</button>
            <button class="paging__number">2</button>
            <button class="paging__number">3</button>
            <button class="paging__number">4</button>
            <button class="paging__number">5</button>
            <button class="paging__number">6</button>
          </div>
          <button class="paging__button">Sau</button>
        </div>
      </div>
    </div>
  </div>
  <!-- DIALOG CHI TIẾT NHÂN VIÊN -->
  <div id="dlgEmployeeDetail" class="dialog" style="display: none">
    <div class="dialog__content">
      <div class="dialog__button--close"></div>
      <div class="dialog__header title">Thông tin nhân viên</div>
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
  <!-- DIALOG CẢNH BÁO -->
  <div class="dialog dialog--warning" hidden="">
    <div class="dialog__content">
      <div class="dialog__button--close"></div>
      <div class="dialog__header title">Thông báo</div>
      <div class="dialog__body">
        <div class="dialog__msg-item">
          Thông tin này không được phép để trống
        </div>
        <div class="dialog__msg-item">
          Thông tin này không được phép để trống
        </div>
        <div class="dialog__msg-item">
          Thông tin này không được phép để trống
        </div>
      </div>
      <div class="dialog__footer">
        <button id="btnOk" class="button">Đồng ý</button>
      </div>
    </div>
  </div>
  <div v-if="isLoading" class="loading">
    <div class="loadingio-spinner-bean-eater-nk8yggr3a7">
      <div class="ldio-5z24u53wm2o">
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MButton from "../../components/base/MButton.vue";
export default {
  components: { MButton },
  name: "EmployeeList",
  created() {
    // Gọi api lấy dữ liệu:
    this.isLoading = true;
    fetch("https://cukcuk.manhnv.net/api/v1/Employees", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.employees = data;
        console.log(data);
        this.isLoading = false;
      })
      .catch((res) => {
        console.log(res);
        this.isLoading = false;
      });
  },
  data() {
    return {
      employees: [],
      isLoading: false,
    };
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
