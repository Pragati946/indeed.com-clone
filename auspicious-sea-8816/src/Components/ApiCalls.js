import axios from "axios";
import { FaPastafarianism } from "react-icons/fa";

// const axios = require(`axios`)

export const HomepageDataCall = (params = {}) => {
    console.log(params.query, "aksjay")
    return axios.get(`http://localhost:8080/jobs`, {
        params: {
            _page: params.page,
            _limit: params.limit,
            // companyLocation:'Noida, Uttar Pradesh'
            companyLocation: params.companyLocation,
            category_1: params.category_1,
            category_2: params.category_2,
            label: params.label,
            ialbl: params.ialbl,
            date: params.date,
            urgentlyHiring: params.urgentlyHiring,
            date_3:params.date_3,

        }
    })
    // .then((res) => console.log(res))

};

// HomepageDataCall()
