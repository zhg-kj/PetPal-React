import api from "../../lib/api";

export const createComment = async (postId, message) => {
  try {
    const response = await api.post(`blog/${postId}/comment/create/`, { message });

    if (response.status === 401) {
      alert("Unauthorized");
      return Promise.reject("Unauthorized");
    } else if (response.status !== 201) {
      alert("Unable to create comment");
      return Promise.reject("Unable to create comment");
    }

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};