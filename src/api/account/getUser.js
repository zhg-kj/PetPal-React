import api from "../../lib/api";

export const getUser = async (userId = null) => {
  try {
    const params = userId ? { user_id: userId } : {};

    const response = await api.get('/account/details/', { params });

    if (response.status === 404) {
      alert("User not found");
      return Promise.reject("User not found");
    } else if (response.status === 401) {
      alert("Unauthorized");
      return Promise.reject("Unauthorized");
    } else if (response.status !== 200) {
      alert("Unable to fetch user");
      return Promise.reject("Unable to fetch user");
    }

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};