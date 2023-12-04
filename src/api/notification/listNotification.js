import api from "../../lib/api";

export const listNotification = async () => {
  try {
    const response = await api.get('/notification/list/');

    if (response.status === 401) {
      alert("Unauthorized");
      return Promise.reject("Unauthorized");
    } else if (response.status !== 200) {
      alert("Unable to fetch notifications");
      return Promise.reject("Unable to fetch notifications");
    }

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};