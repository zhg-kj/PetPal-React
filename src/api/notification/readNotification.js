import api from "../../lib/api";

export const readNotification = async (notification) => {
  try {
    const response = await api.put(`/notification/${notification}/read/`);

    if (response.status === 401) {
      alert("Unauthorized");
      return Promise.reject("Unauthorized");
    } else if (response.status !== 200) {
      alert("Unable to read notification");
      return Promise.reject("Unable to read notification");
    }

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};