import axios from "axios";
import NullChecker from "../util/NullChecker";

class ServerRemote {

    constructor() {}

    host = "http://localhost:8080";

    getData = async(api, method, data, headers) => {
        const promise = await axios({
            baseURL : this.host,
            url : api,
            method : method,
            data: data,
            headers : headers
        }).then(function(res) {
            return res.data;
        }).catch(function(error) {
            console.log("error : " + JSON.stringify(error.response))
            return error.response;
        });

        return promise;
    }
}

export default ServerRemote;