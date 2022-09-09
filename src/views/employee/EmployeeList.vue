<template>
    <div class="page__header">
        <div class="page__header--title heading">Nhân viên</div>
        <button id="btnAdd" class="page__header--button button button__icon button__icon--employee">Thêm mới nhân
            viên</button>
    </div>
    <!-- <div class="page__toolbar">
        <div class="page__toolbar--left">
            <input type="text" class="input input__icon input__icon--search">
        </div>
        <div class="page__toolbar--right">
            <button id="btnDelete"></button>
            <button id="btnDuplicate"></button>
            <button id="btnRefresh"></button>
        </div>
    </div> -->
    <div class="page__table">
        <div class="page__toolbar">
            <div class="page__toolbar--left">
                <input type="text" class="input input__icon input__icon--search" placeholder="Tìm theo mã, tên nhân viên">
            </div>
            <div class="page__toolbar--right">
                <button id="btnRefresh"></button>
            </div>
        </div>
        <div class="table__content">
            <table id="tbEmployeeList" class="table" border="0">
                <thead style="text-transform:uppercase">
                    <tr>
                        <th class="text-align--left" title="Số thứ tự" style="width:50px">STT</th>
                        <th class="text-align--left" style="width:100px">Mã nhân viên</th>
                        <th class="text-align--left">Tên nhân viên</th>
                        <th class="text-align--left" style="width:50px">Giới tính</th>
                        <th class="text-align--center" style="width:100px">Ngày sinh</th>
                        <th class="text-align--left" style="width:100px">Điện thoại</th>
                        <th class="text-align--left" style="width:150px">Email</th>
                        <th class="text-align--left" style="width:200px">Vị trí</th>
                        <th class="text-align--left" style="width:200px">Phòng ban</th>
                        <th class="text-align--right" style="width:150px">Mức lương cơ bản</th>
                        <th class="text-align--left" style="width:150px">Tình trạng công việc</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(emp,index) in employees" :key="emp.EmployeeId">
                        <td>{{index + 1}}</td>
                        <td>{{emp.EmployeeCode}}</td>
                        <td>{{emp.FullName}}</td>
                        <td>{{emp.GenderName}}</td>
                        <td class="text-align--center"></td>
                        <td>09466826887</td>
                        <td>Stratton@misa.com</td>
                        <td>Giám đốc</td>
                        <td>Phòng Công Nghệ Thông Tin</td>
                        <td class="text-align--right"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>NV-522328</td>
                        <td>Võ Thị Dương</td>
                        <td>Nữ</td>
                        <td class="text-align--center">1/9/1958</td>
                        <td>09366854222</td>
                        <td>AdelaAbney@misa.com</td>
                        <td>Trưởng phòng</td>
                        <td>Phòng Công Nghệ Thông Tin</td>
                        <td class="text-align--right">22178937</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>NV-723225</td>
                        <td>Võ Thị Dương</td>
                        <td>Nữ</td>
                        <td class="text-align--center">1/9/1958</td>
                        <td>09366854222</td>
                        <td>AdelaAbney@misa.com</td>
                        <td>Trưởng phòng</td>
                        <td>Phòng Công Nghệ Thông Tin</td>
                        <td class="text-align--right">22178937</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="table__paging">
            <div class="table__paging--left">
                Hiển thị <b>01-10/200</b> nhân viên
            </div>
            <div class="table__paging--center">
                <button class="paging__button paging__button--first"></button>
                <button class="paging__button paging__button--prev"></button>
                <div class="paging__button--group">
                    <button class="paging__number paging__number--selected">1</button>
                    <button class="paging__number">2</button>
                    <button class="paging__number">3</button>
                    <button class="paging__number">4</button>
                    <button class="paging__number">5</button>
                    <button class="paging__number">6</button>
                </div>
                <button class="paging__button paging__button--next"></button>
                <button class="paging__button paging__button--last"></button>
            </div>
            <div class="table__paging--right">
                <select name="" class="combobox">
                    <option value="10">10 nhân viên/ trang</option>
                    <option value="20">10 nhân viên/ trang</option>
                    <option value="30">10 nhân viên/ trang</option>
                    <option value="40">10 nhân viên/ trang</option>
                </select>
            </div>
        </div>
    </div>
    <!-- DIALOG CHI TIẾT NHÂN VIÊN -->
    <div id="dlgEmployeeDetail" class="dialog" style="display: none;">
        <div class="dialog__content">
            <div class="dialog__button--close"></div>
            <div class="dialog__header title">Thông tin nhân viên</div>
            <div class="dialog__body">
                <div class="row">
                    <div class="col">
                        <label>Mã nhân viên (<span class="input--required">*</span>)</label>
                        <input id="txtEmployeeCode" required="" name-property="Mã nhân viên" type="text" class="input">
                    </div>
                    <div class="col">
                        <label>Họ và tên (<span class="input--required">*</span>)</label>
                        <input id="txtFullName" name-property="Họ và tên" required="" type="text" class="input">
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
                        <input id="dtDateOfBirth" type="date" class="input">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label>Email (<span class="input--required">*</span>)</label>
                        <input id="txtEmail" name-property="Email" required="" type="text" class="input">
                    </div>
                    <div class="col">
                        <label>Số điện thoại (<span class="input--required">*</span>)</label>
                        <input id="txtPhoneNumber" name-property="Số điện thoại" required="" type="text" class="input">
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
                <button id="btnSave" class="button  button__icon icon icon--save" style="order:1">Cất</button>
                <button class="button button--cancel" style="order:2">Hủy</button>
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
    <div v-if="isLoading" class="loading"></div>
</template>
<script>
export default {
    name:"EmployeeList",
    created() {
        // Gọi api lấy dữ liệu:
        this.isLoading = true;
        fetch("https://cukcuk.manhnv.net/api/v1/Employees",{method:"GET"})
        .then(res=>res.json())
        .then(data=>{
            this.employees = data;
            console.log(data);
            this.isLoading = false;
        })
        .catch(res=>{
            console.log(res);
            this.isLoading = false;
        })
    },
    data() {
        return {
            employees:[],
            isLoading:false
        }
    },
}
</script>
<style scoped>
@import url(../../css/page/employee.css);
.loading{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom:0;
    background-color: #0000005b;
}
</style>