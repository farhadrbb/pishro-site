import axios from "axios";
import React, { useEffect } from 'react';

// import { getRandomNumber } from "../../method/getRandomNumber";
import { getUrl } from './index'

const GetUser = (_config, _data) => {


    let config = {
        // baseURL: "http://192.168.231.65:7001/GradDB/V1/",
        baseURL: getUrl(),
        // baseURL: `http://192.168.231.31:${getRandomNumber(7004,7040)}/GradDB/V1/`,
        // baseURL: "http://newadmin.mobinsb.net/GradDB/V1/",
        method: "POST",
        headers: { "content-type": "application/json", "Access-Control-Allow-Origin": "*" },
        ..._config,
        data: {
            api_key: "f8f8a4bc-62d4-4917-881b-1254004f0c0c",
            token: null,
            member_id: null,
            ..._data
            // table: "",
            // method_type: "login",
            // data: {
            //     "user": "ERFAN",
            //     "pass": "ERF1234"
            // }
        }
    }




    return axios(config);
};

export default GetUser;



