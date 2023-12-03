import api from "../../lib/api";

export const createPet = async (pet) => {
  try {
    const response = await api.post('/pet/create/', pet);

    if (response.status === 401) {
      alert("Unauthorized");
      return Promise.reject("Unauthorized");
    } else if (response.status !== 201) {
      alert("Unable to create pet");
      return Promise.reject("Unable to create pet");
    }

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};