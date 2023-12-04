import api from "../../lib/api";

export const deleteNotification = async (notification) => {
  try {
    const response = await api.delete(`/notification/${notification}/delete/`);

    if (response.status === 401) {
      alert("Unauthorized");
      return Promise.reject("Unauthorized");
    } else if (response.status !== 200 && response.status !== 204 ) {
      alert("Unable to delete notification");
      return Promise.reject("Unable to delete notification");
    }

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};