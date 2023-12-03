import api from "../../lib/api";

export const createMessage = async (message) => {
  try {
    const response = await api.post('/application/message/create/', message);

    if (response.status === 401) {
      alert("Unauthorized");
      return Promise.reject("Unauthorized");
    } else if (response.status !== 201) {
      alert("Unable to create application");
      return Promise.reject("Unable to create application");
    }

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};