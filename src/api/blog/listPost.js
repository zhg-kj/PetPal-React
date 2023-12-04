import api from "../../lib/api";

export const listPost = async (shelterId) => {
  try {
    const response = await api.get('/blog/list/', { params: { shelter_id: shelterId } });

    if (response.status === 401) {
      alert("Unauthorized");
      return Promise.reject("Unauthorized");
    } else if (response.status !== 200) {
      alert("Unable to fetch posts");
      return Promise.reject("Unable to fetch posts");
    }

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};