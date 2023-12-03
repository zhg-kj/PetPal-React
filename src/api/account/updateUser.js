import api from "../../lib/api";

export const updateUser = async (user) => {
  try {
    const response = await api.put('/account/update/', user);

    if (response.status === 404) {
      alert("User not found");
      return Promise.reject("User not found");
    } else if (response.status === 401) {
      alert("Unauthorized");
      return Promise.reject("Unauthorized");
    } else if (response.status !== 200) {
      alert("Unable to update user");
      return Promise.reject("Unable to update user");
    }

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};