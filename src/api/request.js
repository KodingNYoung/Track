import { testUrl } from "../config";
import { getToken } from "../utils";

// body and config were joined together because they are both optional
export const request = async (
  endpoint,
  { body, ...config } = {},
  authorize
) => {
  // form the request url
  const url = `${testUrl}${endpoint}`;

  // declare request header
  const header = {};
  if (authorize) header.Authorization = `Token ${getToken()}`;

  // declare options
  const customConfig = {
    ...config,
    header: {
      ...config.header,
      ...header
    }
  };

  // handle body assignment
  if (body) customConfig.body = JSON.stringify(body);

  let data;

  try {
    // send request
    const res = await fetch(url, customConfig);
    data = await res.json();

    // if response is ok
    if (res.ok) {
      // return data
      return Promise.resolve(data);
    }
    // else throw error
    throw new Error(res.statusText);
  } catch (err) {
    // error handling
    // return {
    //   success: false,
    //   message: err ? err.message : data
    // };
    return Promise.reject(
      err.message || "Opps, something went wrong. Please try again later"
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
