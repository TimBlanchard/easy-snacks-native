import schoolsData from "../helpers/schoolsData";
const BASE_URL = "http://51.103.32.77/";

export const getSchoolsFromApiAsync = async () => {
    try {
        let response = await fetch(
            'http://51.103.32.77/schools/',
            {
                "method": "GET",
                "accept": "application/json",
            }
        );
        let json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}

export const getSchoolDetails = async (id) => {
    if(!id) {
        return;
    }
    try {
        let response = await fetch(
            'http://51.103.32.77/school/'+id,
            {
                "method": "GET"
            }
        );
        let json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}
