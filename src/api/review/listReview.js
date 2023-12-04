import api from "../../lib/api";

export const listReview = async (shelterId) => {
  try {
    const response = await api.get('/review/list/', { params: { shelter_id: shelterId } });

    if (response.status === 401) {
      alert("Unauthorized");
      return Promise.reject("Unauthorized");
    } else if (response.status !== 200) {
      alert("Unable to fetch reviews");
      return Promise.reject("Unable to fetch reviews");
    }

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};