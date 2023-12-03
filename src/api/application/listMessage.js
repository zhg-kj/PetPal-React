import api from "../../lib/api";

export const listMessage = async (applicationId) => {
  try {
    const response = await api.get('/application/message/list/', { params: { application_id: applicationId } });

    if (response.status === 401) {
      alert("Unauthorized");
      return Promise.reject("Unauthorized");
    } else if (response.status !== 200) {
      alert("Unable to fetch messages");
      return Promise.reject("Unable to fetch messages");
    }

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};