import moment from "moment/moment";

export function formatDate(datetime) {
  if(datetime) {
    return moment(datetime).format('MM/DD/YYYY')
  } else {
    return undefined;
  }
}

export function formatDateInput(datetime) {
  if(datetime) {
    return moment(datetime).format('YYYY-MM-DD')
  } else {
    return undefined;
  }

}