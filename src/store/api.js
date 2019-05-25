export const baseURL = "http://192.168.0.8:3000";

export const getRequest = async endpoint => {
  const response = await fetch(`${baseURL}${endpoint}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("Request Error");
  }
};

export const postRequest = async (endpoint, body) => {
  const response = await fetch(`${baseURL}${endpoint}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(body)
  });
  if (response.status === 201) {
    return response.json();
  } else {
    throw new Error("Request Error");
  }
};
