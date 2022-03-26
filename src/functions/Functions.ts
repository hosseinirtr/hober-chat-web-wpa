import moment from "jalali-moment";

export function isRealValue(obj: any) {
  return (
    obj &&
    obj !== null &&
    obj !== "null" &&
    obj !== undefined &&
    obj !== "undefined" &&
    obj !== "" &&
    obj !== " " &&
    obj !== "  "
  );
}

export function checkMobile() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}

export function findOrCreateThread(userId: string, id: string, socket: any) {
  if (socket) {
    socket.send(
      JSON.stringify({
        type: "FIND_THREAD",
        data: [userId, id]
      })
    );
  }
}
export function compareDateWithToday(date: string) {
  const todayJalali = moment().locale("fa").format("YYYY/MM/DD");
  return date <= todayJalali;
}
export function isDateBeforeToday(date: string) {
  const today = moment().locale("en").format("YYYY-MM-DD");
  return date < today;
}
export function formatBirthDate(raw: string, divider: string = "/") {
  if (!raw) {
    return raw;
  }
  const value = raw.replace(/\D+/g, "");
  const length = value.length;

  if (length <= 4) {
    if (value > "1280") {
      console.info("find");
    }
    return value;
  }
  if (length <= 6) {
    return [value.substr(0, 4), value.substr(4)].join(divider);
  }
  return [value.substr(0, 4), value.substr(4, 2), value.substr(6, 2)].join(
    divider
  );
}
export function validateNationalCode(meliCode: string) {
  if (!meliCode || meliCode.length !== 10) {
    return false;
  }
  if (meliCode.length === 10) {
    if (
      meliCode === "0000000000" ||
      meliCode === "1111111111" ||
      meliCode === "2222222222" ||
      meliCode === "3333333333" ||
      meliCode === "4444444444" ||
      meliCode === "5555555555" ||
      meliCode === "6666666666" ||
      meliCode === "7777777777" ||
      meliCode === "8888888888" ||
      meliCode === "9999999999"
    ) {
      return false;
    }
    const n: number =
      parseInt(meliCode.charAt(0), 0) * 10 +
      parseInt(meliCode.charAt(1), 0) * 9 +
      parseInt(meliCode.charAt(2), 0) * 8 +
      parseInt(meliCode.charAt(3), 0) * 7 +
      parseInt(meliCode.charAt(4), 0) * 6 +
      parseInt(meliCode.charAt(5), 0) * 5 +
      parseInt(meliCode.charAt(6), 0) * 4 +
      parseInt(meliCode.charAt(7), 0) * 3 +
      parseInt(meliCode.charAt(8), 0) * 2;
    const c = parseInt(meliCode.charAt(9), 0);
    const r = n - parseInt((n / 11).toString(), 0) * 11;
    if (
      (r === 0 && r === c) ||
      (r === 1 && c === 1) ||
      (r > 1 && c === 11 - r)
    ) {
      return true;
    } else {
      return false;
    }
  }
  return true;
}
export function validateAccountNumber(accountNumber: string) {
  if (!accountNumber || accountNumber.length !== 13) {
    return false;
  }
  if (accountNumber.length === 13) {
    if (accountNumber === "0000000000000") {
      return false;
    }
    const n: number =
      parseInt(accountNumber.charAt(0), 0) * 47 +
      parseInt(accountNumber.charAt(1), 0) * 43 +
      parseInt(accountNumber.charAt(2), 0) * 41 +
      parseInt(accountNumber.charAt(3), 0) * 37 +
      parseInt(accountNumber.charAt(4), 0) * 31 +
      parseInt(accountNumber.charAt(5), 0) * 29 +
      parseInt(accountNumber.charAt(6), 0) * 23 +
      parseInt(accountNumber.charAt(7), 0) * 19 +
      parseInt(accountNumber.charAt(8), 0) * 17 +
      parseInt(accountNumber.charAt(9), 0) * 13 +
      parseInt(accountNumber.charAt(10), 0) * 7 +
      parseInt(accountNumber.charAt(11), 0) * 5;
    if (n == 0 && accountNumber.length == 13) {
      return false;
    } else {
      let result = n % 11;
      if (result == 1) {
        return false;
      } else {
        result = 11 - result;
        return (
          (result != 11 || parseInt(accountNumber.charAt(12), 0) == 0) &&
          (result == 11 || result == parseInt(accountNumber.charAt(12), 0))
        );
      }
    }
  }
}

export function mobileFormat(str: string) {
  const m = /^09(9[0-9]|1[0-9]|2[0-9]|3[0-9])-?[0-9]{3}-?[0-9]{4}/;
  return m.test(str);
}

export function telephoneFormat(str: string) {
  const m = /^0[^9][^a-z]+$/;
  return m.test(str);
}
export function dateFormatChecker(str: string) {
  const m =
    /^[1-4]\d{3}\/((0[1-6]\/((3[0-1])|([1-2][0-9])|(0[1-9])))|((1[0-2]|(0[7-9]))\/(30|31|([1-2][0-9])|(0[1-9]))))$/;
  return m.test(str);
}
export function validateGregorianDate(gdate: string) {
  return gdate.length == 10 && moment(gdate, "YYYY/MM/DD").isValid();
}
export function justNumber(str: string) {
  const p = /^[0-9]*$/;
  return p.test(str);
}
export function convertToPersianDate(gDate: string) {
  return moment(gDate, "YYYY-MM-DD").locale("fa").format("YYYY/MM/DD");
}
export function converToGeorgianDate(gDate: string) {
  return moment.from(gDate, "fa", "YYYY/MM/DD").format("YYYY-MM-DD");
}

export function sibaEditedStatusString(code: string, title: string) {
  switch (code) {
    case "SYNCHRONIZED":
      return ["موفق", "green", false, title];
    case "NOT_SYNCHRONIZED":
      return ["ناموفق", "red", true, title];
    case "WAITING":
      return ["درحال بروزرسانی", "orange", false, title];
    default:
      return ["نامشخص", "black", false, title];
  }
}

export function notSynchronizedSiba(telescopeModel: any[]) {
  if (!isRealValue(telescopeModel)) {
    return;
  }
  if (!telescopeModel.length) {
    return;
  }
  const filteredNo = telescopeModel.filter(
    (item) => item.editStatus.code === "NOT_SYNCHRONIZED"
  );
  if (!filteredNo.length) {
    return false;
  }
  return true;
}

export function formatCurrency(str: any) {
  if (str) {
    str = str.toString().replace(/\,/g, "");
    const objRegex = new RegExp("(-?[0-9]+)([0-9]{3})");

    while (objRegex.test(str)) {
      str = str.replace(objRegex, "$1,$2");
    }
  }
  return str;
}
export function checkJwtFormat(str: any) {
  const jwt = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/;
  return jwt.test(str);
}

export function getAge(dateString: any) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
export function checkValidJsonFromStringyfy(str: string) {
  if (!str) {
    return false;
  }
  if (
    /^[\],:{}\s]*$/.test(
      str
        .replace(/\\["\\\/bfnrtu]/g, "@")
        .replace(
          /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
          "]"
        )
        .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
    )
  ) {
    return true;
  } else {
    return false;
  }
}

export function checkPermission(props: {
  accessPermission: string;
  component: string;
}) {
  const { permissions } = JSON.parse(localStorage.currentUser);
  var allPermissions = permissions?.map(
    (value: { title: any }, index: any) => value.title
  );
  const { accessPermission } = props;
  let find = false;
  for (const key of allPermissions) {
    if (key == accessPermission) {
      find = true;
      return true;
    }
  }
  if (!find) {
    return false;
  }
}
