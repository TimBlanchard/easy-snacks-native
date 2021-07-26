import schoolsData from "../helpers/schoolsData";

export const getSchoolsFromApiAsync = async () => {
    // A DEFINIR QUAND ON AURA API BACKEND
}

export const getSchoolDetails = async (id) => {
    if(!id) {
        return;
    } try {
    // RECUP A PARTIR FICHIER EN DUR EN ATTENDANT API BACK
    return schoolsData.find(x => x.id === parseInt(id));
    } catch (error) {
        console.error(error);
    }
}
