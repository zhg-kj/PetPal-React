import api from "../../lib/api";

export const createNotification = async (notification) => {
  try {
    const response = await api.post('/notification/create/', notification);

    if (response.status === 401) {
      alert("Unauthorized");
      return Promise.reject("Unauthorized");
    } else if (response.status !== 201) {
      alert("Unable to create notification");
      return Promise.reject("Unable to create notification");
    }

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};