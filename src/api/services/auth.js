import apiClient, { auth_header } from "../apiClient";

export const postSignUp = async (values) => {
  await apiClient
    .post(
      "/signup",
      {
          email: values.email,
          password: values.password,
          full_name: values.full_name,
        },
      {
        headers: auth_header,
      }
    )
    .then((res) => {
      return(res.data.message);
    })
    .catch((error) => {
      return(error?.response?.data);
    });
};
export const postLogin = async (values) => {
  await apiClient
    .post(
      "/login",
      {
          email: values.email,
          password: values.password,
        
        },
      {
        headers: auth_header,
      }
    )
    .then((res) => {
      return(res.data);
    })
    .catch((error) => {
      return(error?.response?.data);
    });
};
