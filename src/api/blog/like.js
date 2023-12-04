import api from "../../lib/api";

export const like = async (postId) => {
  try {
    const response = await api.post(`blog/${postId}/like/`);

    if (response.status === 401) {
      alert("Unauthorized");
      return Promise.reject("Unauthorized");
    } else if (response.status !== 201) {
      alert("Unable to like");
      return Promise.reject("Unable to like");
    }

    return response.data.liked;
  } catch (error) {
    return Promise.reject(error);
  }
};