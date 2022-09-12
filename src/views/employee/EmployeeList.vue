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
  <EmployeeDetail></EmployeeDetail>
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
import EmployeeDetail from "./EmployeeDetail.vue";
export default {
  components: { MButton, EmployeeDetail },
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
