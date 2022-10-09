import moment from "moment/moment";

// hàm thay đổi format ngày giờ thành MM/DD/YYYY
export function formatDate(datetime) {
  if (datetime) {
    return moment(datetime).format("DD/MM/YYYY");
  } else {
    return undefined;
  }
}

// hàm thay đổi format ngày giờ thành YYYY/MM/DD
export function formatDateInput(datetime) {
  if (datetime) {
    return moment(datetime).format("YYYY-MM-DDTHH:mm:ss");
  } else {
    return undefined;
  }
}

/**
 * hàm chuyển object key sang camelCase để  gửi lên server
 * author: VinhKT
 * created on: 22/09/2022 1:54 utc
 * (object)
 * return new Object
 */
export function toCamel(object) {
  let newObject, origKey, newKey, value;
  if (object instanceof Array) {
    return object.map(function (value) {
      if (typeof value === "object") {
        value = toCamel(value);
      }
      return value;
    });
  } else {
    newObject = {};
    for (origKey in object) {
      if (Object.prototype.hasOwnProperty.call(object, origKey)) {
        newKey = (
          origKey.charAt(0).toLowerCase() + origKey.slice(1) || origKey
        ).toString();
        value = object[origKey];
        if (
          value instanceof Array ||
          (value !== null && value?.constructor === Object)
        ) {
          value = toCamel(value);
        }
        newObject[newKey] = value;
      }
    }
  }
  return newObject;
}

export function numberFormat(number) {
  return new Intl.NumberFormat("de-DE").format(number);
}
