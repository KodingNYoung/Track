import { getToken, getValidJSON } from "../utils";

const baseUrl = process.env.REACT_APP_BASE_URL;

// body and config were joined together because they are both optional
export const request = async (
  endpoint,
  { body, ...config } = {},
  authorize
) => {
  // form the request url
  const url = `${baseUrl}${endpoint}`;

  // declare request headers
  const headers = {};
  if (authorize) headers.Authorization = `Token ${getToken()}`;

  // declare options
  const customConfig = {
    ...config,
    headers: {
      ...config.headers,
      ...headers
    }
  };

  // handle body assignment
  if (body) customConfig.body = JSON.stringify(body);

  let data;

  try {
    // send request
    const res = await fetch(url, customConfig);
    console.log(res);
    data = await getValidJSON(res);

    // if response is ok
    if (res.ok) {
      // return data
      return Promise.resolve(data);
    }
    // else throw error
    throw new Error(res.statusText);
  } catch (err) {
    // error handling
    // if bad request, get data
    // else, error message
    return Promise.reject(
      data
        ? JSON.stringify(data)
        : err.message || "Opps, something went wrong. Please try again later"
    );
  }
};

request.get = (endpoint, authorize, config = {}) => {
  return request(endpoint, { ...config, method: "GET" }, authorize);
};
request.post = (endpoint, body, config = {}, authorize) => {
  return request(endpoint, { ...config, body, method: "POST" }, authorize);
};
request.patch = (endpoint, { id, ...body }, config = {}, authorize) => {
  return request(
    `${endpoint}/${id}/`,
    { ...config, body, method: "PATCH" },
    authorize
  );
};
request.delete = (endpoint, id, config = {}, authorize) => {
  return request(
    `${endpoint}/${id}/`,
    { ...config, method: "DELETE" },
    authorize
  );
};
