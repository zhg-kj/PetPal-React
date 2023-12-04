import api from "../../lib/api";

export const unlike = async (postId) => {
  try {
    const response = await api.delete(`blog/${postId}/unlike/`);

    if (response.status === 401) {
      alert("Unauthorized");
      return Promise.reject("Unauthorized");
    } else if (response.status !== 204 && response.status !== 200) {
      alert("Unable to unlike");
      return Promise.reject("Unable to unlike");
    }

    return response.data.liked;
  } catch (error) {
    return Promise.reject(error);
  }
};