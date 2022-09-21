import moment from "moment/moment";

// hàm thay đổi format ngày giờ thành MM/DD/YYYY
export function formatDate(datetime) {
  if(datetime) {
    return moment(datetime).format('DD/MM/YYYY')
  } else {
    return undefined;
  }
}

// hàm thay đổi format ngày giờ thành YYYY/MM/DD
export function formatDateInput(datetime) {
  if(datetime) {
    return moment(datetime).format('YYYY-MM-DD')
  } else {
    return undefined;
  }

}