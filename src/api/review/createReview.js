import api from "../../lib/api";

export const createReview = async (review) => {
  try {
    const response = await api.post('/review/create/', review);

    if (response.status === 401) {
      alert("Unauthorized");
      return Promise.reject("Unauthorized");
    } else if (response.status !== 201) {
      alert("Unable to create review");
      return Promise.reject("Unable to create review");
    }

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};