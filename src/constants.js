import { formatDate } from "@/js/base.js";

// route path và data của menu
export const MENU_ITEMS = [
  {
    text: "Tổng quan",
    iconCoordinates: [29, 1628],
    activeClass: "dashboard_icon__active",
    route: "/tong-quan",
  },
  {
    text: "Tiền mặt",
    iconCoordinates: [73, 1629],
    activeClass: "cash_icon__active",
    route: "/nhan-vien",
  },
  {
    text: "Tiền gửi",
    iconCoordinates: [117, 1630],
    activeClass: "deposit_icon__active",
    route: "/tien-gui",
  },
  {
    text: "Mua hàng",
    iconCoordinates: [161, 1631],
    activeClass: "buy_icon__active",
    route: "/mua-hang",
  },
  {
    text: "Bán hàng",
    iconCoordinates: [206, 1628],
    activeClass: "sell_icon__active",
    route: "/ban-hang",
  },
  {
    text: "Quản lý hoá đơn",
    iconCoordinates: [249, 1629],
    activeClass: "bill_icon__active",
    route: "/quan-ly-hoa-don",
  },
  {
    text: "Kho",
    iconCoordinates: [291, 1630],
    activeClass: "warehouse_icon__active",
    route: "/kho",
  },
  {
    text: "Công cụ dụng cụ",
    iconCoordinates: [336, 1630],
    activeClass: "tool_icon__active",
    route: "/cong-cu-dung-cu",
  },
  {
    text: "Tài sản cố định",
    iconCoordinates: [380, 1630],
    activeClass: "static_asset_icon__active",
    route: "/tai-san-co-dinh",
  },
  {
    text: "Tiền lương",
    iconCoordinates: [471, 1661],
    activeClass: "salary_icon__active",
    route: "/tien-luong",
  },
  {
    text: "Thuế",
    iconCoordinates: [425, 1631],
    activeClass: "tax_icon__active",
    route: "/thue",
  },
  {
    text: "Giá thành",
    iconCoordinates: [470, 1630],
    activeClass: "price_icon__active",
    route: "/gia-thanh",
  },
  {
    text: "Tổng hợp",
    iconCoordinates: [514, 1629],
    activeClass: "summary_icon__active",
    route: "/tong-hop",
  },
  {
    text: "Ngân sách",
    iconCoordinates: [381, 1659],
    activeClass: "budget_icon__active",
    route: "/ngan-sach",
  },
  {
    text: "Báo cáo",
    iconCoordinates: [551, 1631],
    activeClass: "report_icon__active",
    route: "/bao-cao",
  },
  {
    text: "Phân tích tài chính",
    iconCoordinates: [207, 1664],
    activeClass: "analyze_icon__active",
    route: "/phan-tich-tai-chinh",
  },
];

// thông tin phòng ban
export const DEPARTMENT_DATA = [
  {
    DepartmentId: "3f8e6896-4c7d-15f5-a018-75d8bd200d7c",
    DepartmentCode: "NL20",
    DepartmentName: "Phòng Công Nghệ Thông Tin",
    Description:
      "Dolor sed enim repellat. Qui quo atque. Omnis delectus sunt non. Tempora maiores enim reprehenderit tenetur. Impedit modi inventore. Eum porro omnis...",
    CreatedDate: "1970-01-01T02:13:43",
    CreatedBy: "Norris Calderon",
    ModifiedDate: "1995-09-03T01:46:10",
    ModifiedBy: "Elwood Ligon",
  },
  {
    DepartmentId: "45ac3d26-18f2-18a9-3031-644313fbb055",
    DepartmentCode: "VT66",
    DepartmentName: "Phòng Hành Chính",
    Description:
      "Dolore suscipit est ipsa. Suscipit voluptas et omnis. Iste sed distinctio ab sint. Deleniti eius ea? Sunt labore vel; ut eum dolorem.",
    CreatedDate: "2019-08-18T04:11:30",
    CreatedBy: "Aileen Pitts",
    ModifiedDate: "1990-08-11T03:13:17",
    ModifiedBy: "Courtney Abernathy",
  },
  {
    DepartmentId: "78aafe4a-67a7-2076-3bf3-eb0223d0a4f7",
    DepartmentCode: "AB88",
    DepartmentName: "Phòng Nhân Sự",
    Description:
      "Et modi reprehenderit. Vero est sed alias voluptatem nostrum facilis! Iste voluptatem magni impedit temporibus odit ducimus.",
    CreatedDate: "2013-07-11T21:55:48",
    CreatedBy: "Trey Christopher",
    ModifiedDate: "1991-12-19T17:39:26",
    ModifiedBy: "Natashia Blaylock",
  },
  {
    DepartmentId: "7c4f14d8-66fb-14ae-198f-6354f958f4c0",
    DepartmentCode: "IU61",
    DepartmentName: "Phòng Kế Toán",
    Description:
      "Impedit beatae aspernatur dignissimos voluptatem et in. Eum nisi nostrum quidem ullam fugiat eum.",
    CreatedDate: "2000-08-12T09:34:24",
    CreatedBy: "Alaine Hickey",
    ModifiedDate: "1992-12-16T06:21:27",
    ModifiedBy: "Rose Aiello",
  },
];

// các loại vị trí
export const POSITION_DATA = [
  {
    PositionId: "30d41e52-5e66-72bc-6c1c-b47866e0b131",
    PositionCode: "VT-79",
    PositionName: "Trưởng phòng",
    Description: "Ut aut consectetur officia error dolor sequi.",
    ParentId: null,
    CreatedDate: "2020-01-01T00:00:55",
    CreatedBy: null,
    ModifiedDate: null,
    ModifiedBy: null,
  },
  {
    PositionId: "548dce5f-5f29-4617-725d-e2ec561b0f41",
    PositionCode: "VT-53",
    PositionName: "Quản trị hệ thống",
    Description:
      "Beatae modi aliquam aperiam atque soluta. Qui blanditiis amet. Dolorem expedita ut. Perspiciatis eos qui. Eos omnis eum; non aut unde.",
    ParentId: null,
    CreatedDate: "2021-04-12T22:47:34",
    CreatedBy: null,
    ModifiedDate: null,
    ModifiedBy: null,
  },
  {
    PositionId: "589edf01-198a-4ff5-958e-fb52fd75a1d4",
    PositionCode: "VT-92",
    PositionName: "Nhân viên",
    Description:
      "Maiores totam facere. Numquam error earum incidunt et laudantium accusamus. Dolor sint perspiciatis. Voluptas repellendus soluta; labore nisi dicta. Quia.",
    ParentId: null,
    CreatedDate: "2021-05-22T00:33:33",
    CreatedBy: null,
    ModifiedDate: null,
    ModifiedBy: null,
  },
  {
    PositionId: "5bd71cda-209f-2ade-54d1-35c781481818",
    PositionCode: "VT-67",
    PositionName: "Trưởng nhóm",
    Description:
      "Dolorum animi hic recusandae non laudantium voluptatem. Modi dicta magni et autem magni eum.",
    ParentId: null,
    CreatedDate: "2021-12-16T08:52:40",
    CreatedBy: null,
    ModifiedDate: null,
    ModifiedBy: null,
  },
  {
    PositionId: "68daa090-552d-1bc6-e8e4-8adc5263917a",
    PositionCode: "VT-63",
    PositionName: "Giám đốc",
    Description:
      "Voluptates iste repudiandae; consequatur aut fuga facilis omnis; ipsa ut veritatis dolor aliquam ducimus sed? Quod sapiente quo. Veritatis rerum nisi. Unde.",
    ParentId: null,
    CreatedDate: "2022-02-16T11:08:52",
    CreatedBy: null,
    ModifiedDate: null,
    ModifiedBy: null,
  },
];

// loại popup cảnh báo
export const DIALOG_TYPE = {
  ALERT: "alert",
  WARNING: "warning",
  SELECTABLE: "selectable",
  ASK_CANCELABLE: "ask",
};

// text cảnh báo 
export const WARNING_TXT = {
  DELETE: "Bạn có thực sự muốn xoá ",
  DATA_CHANGED: "Dữ liệu đã bị thay đổi. Bạn có muốn cất không?",
  REQUIRE: " không được để trống",
  dataNotInList: (fieldName) => {
    return "Dữ liệu <" + fieldName + "> không tồn tại trong danh mục";
  },
};

//text thông tin
export const INFO_TXT = {
  DELETE_SUCCESS: "Xoá thành công",
  DELETE_FAIL: "Xoá thất bại",
};

// dữ liệu các header của bảng nhân viên
export const EMPLOYEE_HEADER = [
  {
    Class: "text-align--left sticky_header_left_1",
    CellClass: "sticky_body_left_1",
    Caption: "Mã nhân viên",
    Field: "EmployeeCode",
    Width: "130",
  },
  {
    Class: "text-align--left",
    CellClass: "text-align--left",
    Caption: "Tên nhân viên",
    Field: "FullName",
    Width: "200",
  },
  {
    Class: "text-align--left",
    CellClass: "text-align--left",
    Caption: "Giới tính",
    Field: "GenderName",
    Width: "100",
  },
  {
    Class: "text-align--center",
    CellClass: "text-align--center",
    Caption: "Ngày sinh",
    dataFormat: (date) => {
      return formatDate(date);
    },
    Field: "DateOfBirth",
    Width: "150",
  },
  {
    Class: "text-align--left",
    CellClass: "text-align--left",
    Caption: "số cmnd",
    Field: "IdentityNumber",
    Width: "150",
  },
  {
    Class: "text-align--left",
    CellClass: "text-align--left",
    Caption: "chức danh",
    Field: "PositionName",
    Width: "200",
  },
  {
    Class: "text-align--left",
    CellClass: "text-align--left",
    Caption: "tên đơn vị",
    Field: "DepartmentName",
    Width: "250",
  },
  {
    Class: "text-align--left",
    CellClass: "text-align--left",
    Caption: "số tài khoản",
    Field: "BankAccount",
    Width: "200",
  },
  {
    Class: "text-align--left",
    CellClass: "text-align--left",
    Caption: "tên ngân hàng",
    Field: "BankName",
    Width: "250",
  },
  {
    Class: "text-align--left",
    CellClass: "text-align--left",
    Caption: "chi nhánh tk ngân hàng",
    Field: "BankBranch",
    Width: "350",
  },
];

//lựa chọn số bản ghi trên 1 trang
export const PAGING_OPTION = [
  { Value: "10", Name: "10 bản ghi trên 1 trang" },
  { Value: "20", Name: "20 bản ghi trên 1 trang" },
  { Value: "30", Name: "30 bản ghi trên 1 trang" },
  { Value: "50", Name: "50 bản ghi trên 1 trang" },
  { Value: "100", Name: "100 bản ghi trên 1 trang" },
];

//dữ liệu radio input giới tính
export const GENDER_RADIO_DATA = [
  {
    value: 0,
    name: "cbxGender",
    labelTxt: "Nam",
  },
  {
    value: 1,
    name: "cbxGender",
    labelTxt: "Nữ",
  },
  {
    value: 2,
    name: "cbxGender",
    labelTxt: "Khác",
  },
];

//text tiếng việt của các trường
export const FIELD_NAME_VN = {
  CODE: "Mã nhân viên",
  EmployeeCode: "Mã nhân viên",
  FULLNAME: "Họ và tên",
  FullName: "Họ và tên",
  DEPARTMENT: "Đơn vị",
  DepartmentId: "Đơn vị",
  POSITION: "Vị trí",
  EMPLOYEE: 'Nhân viên'
};

// giá trị mặc định của phân trang
export const DEFAULT_PARAMS = {
  pageSize: 20,
  pageNumber: 1,
  employeeFilter: "",
};

// rules validate của các trường
export const EMPLOYEE_FIELD_RULES = {
  EmployeeCode: ['require'],
  FullName: ['require'],
  DepartmentId: ['require'],
  
}

// code các rules validate
export const RULE_CODES = {
  REQUIRE: 'require',
}
