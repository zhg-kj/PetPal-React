import api from "../lib/api";

export const getShelter = async (shelterId) => {
  try {
    const response = await api.get('');

    if (response.status === 404) {
      alert("Shelter not found");
      return Promise.reject("Shelter not found");
    } else if (response.status === 401) {
      alert("Unauthorized");
      return Promise.reject("Unauthorized");
    } else if (response.status !== 200) {
      alert("Unable to fetch shelter");
      return Promise.reject("Unable to fetch shelter");
    }

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};