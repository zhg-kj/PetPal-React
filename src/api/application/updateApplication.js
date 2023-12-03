import api from "../../lib/api";

export const updateApplication = async (applicationId, application) => {
  try {
    const response = await api.put(`/application/${applicationId}/update/`, application);

    if (response.status === 401) {
      alert("Unauthorized");
      return Promise.reject("Unauthorized");
    } else if (response.status !== 200) {
      alert("Unable to update application");
      return Promise.reject("Unable to update application");
    }

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};