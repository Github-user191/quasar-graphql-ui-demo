import { makeApiCall } from "src/utils/makeApiCall";

export const getCoursesAxios = async (query) => {
    const options = {
        data: {
            query
        }
    };

    console.log("OPTS ", options)

    const response = await makeApiCall(options);
    console.log("res")
    console.log(response)
}