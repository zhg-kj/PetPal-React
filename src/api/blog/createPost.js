import api from "../../lib/api";

export const createPost = async (message) => {
  try {
    const response = await api.post('/blog/create/', { message });

    if (response.status === 401) {
      alert("Unauthorized");
      return Promise.reject("Unauthorized");
    } else if (response.status !== 201) {
      alert("Unable to create post");
      return Promise.reject("Unable to create post");
    }

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};