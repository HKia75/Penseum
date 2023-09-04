import axios from 'axios';
import { getCookie } from "./services/cookies.storage";

const apiClient = axios.create({
  baseURL: 'https://api2.penseum.com/', 
});

export default apiClient;

export const auth_header = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${getCookie("auth_token")}`,
};

export const form_header={
  "Content-Type": "multipart/form-data",
  Accept: "application/json",
  Authorization:  `Bearer ${getCookie("auth_token")}`
}