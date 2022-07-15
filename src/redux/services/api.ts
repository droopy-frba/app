import axios from 'axios';

const API = axios.create({
  baseURL: 'test',
});

export interface IAPIResponse {
  success: boolean;
  errorMessage: string;
  statusCode: number;
  data: JSON[] | JSON;
}

const defaultResponseData: IAPIResponse = {
  success: true,
  data: [],
  statusCode: 200,
  errorMessage: '',
};

function _buildHeaders(extraHeaders = {}) {
  const accessToken = 'test';
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
    ...extraHeaders,
  };
}

const _handleErrorResponse = (error: any) => {
  return {
    success: false,
    errorMessage: error.response.statusText,
    statusCode: error.response.status,
    data: error.response.data,
  };
};

async function post(url: string, params: any, extraHeaders = {}) {
  let responseData: IAPIResponse = defaultResponseData;
  try {
    const config = {
      headers: _buildHeaders(extraHeaders),
    };
    const response = await API.post(url, params, config);
    responseData = response.data || responseData;
  } catch (error) {
    responseData = _handleErrorResponse(error);
    throw responseData;
  }

  return responseData;
}

async function get(url: string, params = {}, extraHeaders = {}) {
  let responseData: IAPIResponse = defaultResponseData;
  try {
    const config = {
      headers: _buildHeaders(extraHeaders),
      params,
    };
    const response = await API.get(url, config);
    responseData = response.data || responseData;
  } catch (error) {
    responseData = _handleErrorResponse(error);
    throw responseData;
  }

  return responseData;
}

async function put(url: string, params: any, extraHeaders = {}) {
  let responseData: IAPIResponse = defaultResponseData;
  try {
    const config = {
      headers: _buildHeaders(extraHeaders),
    };
    const response = await API.put(url, params, config);
    responseData = response.data || responseData;
  } catch (error) {
    responseData = _handleErrorResponse(error);
    throw responseData;
  }

  return responseData;
}

async function apiDelete(url: string, extraHeaders = {}, data = {}) {
  let responseData: IAPIResponse = defaultResponseData;

  try {
    const headers = _buildHeaders(extraHeaders);
    const response = await API.delete(url, {
      headers,
      data,
    });
    responseData = response.data || responseData;
  } catch (error) {
    responseData = _handleErrorResponse(error);
    throw responseData;
  }

  return responseData;
}

export default API;

export { post, get, put, apiDelete };
