import api from "../../lib/api";

export const deleteUser = async () => {
  try {
    const response = await api.delete(`/account/delete/`);

    if (response.status === 401) {
      alert("Unauthorized");
      return Promise.reject("Unauthorized");
    } else if (response.status !== 200 && response.status !== 204 ) {
      alert("Unable to delete user");
      return Promise.reject("Unable to delete user");
    }

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};