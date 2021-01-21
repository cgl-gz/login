import axios from "axios";

const request = axios.create({
  baseURL: "https://api.virapi.com/vir_gitee286e99f81d99f/",
  timeout: 60000
});
request.interceptors.request.use(
  config => {
    config.headers["app-token"] =
      "$2a$10$CCuJ8uvAfhYOHxJyw8f93eRx5Hba56RmSDSyLXRBVe94jRt5yz5k2";
    return config;
  },
  error => {
    throw new Error(error);
  }
);
request.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    throw new Error(error);
  }
);

export default request;
