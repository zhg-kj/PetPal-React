import api from "../../lib/api";

export const checkLike = async (postId) => {
  try {
    const response = await api.get(`blog/${postId}/like/check/`);

    if (response.status === 401) {
      alert("Unauthorized");
      return Promise.reject("Unauthorized");
    } else if (response.status !== 200) {
      alert("Unable to check like");
      return Promise.reject("Unable to check like");
    }

    return response.data.liked;
  } catch (error) {
    return Promise.reject(error);
  }
};