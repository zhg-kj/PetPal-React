import api from "../../lib/api";

export const listPet = async (shelterId = null) => {
  try {
    const params = shelterId ? { shelter_id: shelterId } : {};

    const response = await api.get('/pet/list/', { params });

    if (response.status === 401) {
      alert("Unauthorized");
      return Promise.reject("Unauthorized");
    } else if (response.status !== 200) {
      alert("Unable to fetch pets");
      return Promise.reject("Unable to fetch pets");
    }

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};