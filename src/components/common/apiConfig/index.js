import axios from "axios";
// import { getRandomNumber } from "../../method/getRandomNumber";

const AxiosCustom = (_config, _data) => {
  let userLocal = localStorage.getItem("persist:admin")
    ? JSON.parse(localStorage.getItem("persist:admin")).user
    : null;

  let { token, member_id } = userLocal
    ? JSON.parse(userLocal)
    : {
        token: "3cf61fab-b50a-410f-9d59-3357ee4706fe",
        member_id: "_0zehXYBdxxYGfkX5_wd",
      };

  let config = {
    // baseURL: `http://192.168.231.65:${getRandomNumber(7004, 7040)}/GradDB/V1/`,
    baseURL: getUrl(),
    // baseURL: "http://newadmin.mobinsb.net/GradDB/V1/",
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    ..._config,
    data: {
      api_key: "d025488f-8ec6-4434-afbe-b6a5343815a7",
      token: token,
      member_id: member_id,
      ..._data,
      // table: "",
      // method_type: "login",
      // data: {
      //     "user": "ERFAN",
      //     "pass": "ERF1234"
      // }
    },
  };

  return axios(config);
};

export function getUrl() {
  let protocol = window.location.protocol;
  let hostName = window.location.hostname;

  if (!protocol || !hostName || hostName === "localhost") {
    //   return "http://clubadmin.mobinsb.net/GradDB/V1/"
    return "http://192.168.231.65:7001/GradDB/V1/";
    // return "https://pishrobroker.ir/GradDB/V1/";
  }

  return `${protocol}//${hostName}/GradDB/V1/`;
}

export default AxiosCustom;
