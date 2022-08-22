import axios from "axios";
import { envConfig } from "../config";
import {
  DeleteRequestParams,
  PatchRequestParams,
  PostRequestParams,
  RequestParams,
} from "../type";
const APP_BASE_URI = envConfig.env().API_URL;
const API_VERSION = ""; // ! Temporary address

export const PostRequest = async ({ url, body }: PostRequestParams) => {
  try {
    const uri = `${APP_BASE_URI}${API_VERSION}${url}`;
    return await axios.post(uri, body);
  } catch (error) {
    throw error;
  }
};

export const GetRequest = async ({ url }: RequestParams) => {
  try {
    const uri = `${APP_BASE_URI}${API_VERSION}${url}`;
    const response = await axios.get(uri);
    if (response.data) return response.data;
  } catch (error) {
    throw error;
  }
};

export const PatchRequest = async ({ url, body }: PatchRequestParams) => {
  try {
    const uri = `${APP_BASE_URI}${API_VERSION}${url}`;
    const response = await axios.patch(uri, body);
    if (response.data) return response.data;
  } catch (error) {
    throw error;
  }
};

export const DeleteRequest = async ({ url, body }: DeleteRequestParams) => {
  try {
    const uri = `${APP_BASE_URI}${API_VERSION}${url}`;
    const response = await axios.delete(uri, body);
    if (response.data) return response.data;
  } catch (error) {
    throw error;
  }
};
