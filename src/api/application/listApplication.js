import api from "../../lib/api";

export const listApplication = async () => {
  try {
    const response = await api.get('/application/list/');

    if (response.status === 401) {
      alert("Unauthorized");
      return Promise.reject("Unauthorized");
    } else if (response.status !== 200) {
      alert("Unable to fetch applications");
      return Promise.reject("Unable to fetch applications");
    }

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};