import axios from "axios";

export const makeApiCall = async (opts) => {

    const {
        url = "/graphql",
        method = 'POST',
        data = {},
        headers = {
            "Content-Type": "application/json"
        },
        responseType = 'json',
        withCredentials = false
    } = opts;

    const options = {
        url,
        data,
        method,
        headers,
        responseType,
        withCredentials
    }

    axios.defaults.baseURL = "http://localhost:5005";

    console.log(options)


    await axios(options)
        .then(res => {
            console.log("Success ", res)
        }).catch(err => {
            console.log("An error occured: ", err)
        })

}