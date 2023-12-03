import api from "../../lib/api";

export const updatePet = async (id, pet) => {
  try {
    const response = await api.put(`/pet/${id}/update/`, pet);

    if (response.status === 401) {
      alert("Unauthorized");
      return Promise.reject("Unauthorized");
    } else if (response.status !== 200) {
      alert("Unable to create pet");
      return Promise.reject("Unable to create pet");
    }

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};