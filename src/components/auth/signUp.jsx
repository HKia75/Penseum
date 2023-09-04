import { Field, Form, Formik } from "formik";
import PasswordEye from "../passwordEye/passwordEye";
import * as Yup from "yup";
import { AuthInput } from "@/shared/tailwindClasses/tailwindClass";

import { useNavigate } from "react-router-dom";
import { setCookie } from "@/api/services/cookies.storage";
import { postSignUp } from "../../api/services/auth";
import { useState } from "react";

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email Required"),
  password: Yup.string().required("Password Required"),
  full_name: Yup.string().required("Full Name Required"),
});

function SignUp() {
  const [messages, setMessage] = useState();
const navigate = useNavigate()
  return (
    <div>
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{
          email: "",
          password: "",
          full_name: "",
          showPassword: false,
        }}
        validationSchema={ValidationSchema}
        onSubmit={async (values) => {
          const response =  await postSignUp(values);
          console.log(response);
          if (response.success) {
            setCookie("user-token" , response.data.token)
            navigate("/");
          } else {
            setMessage(response.message);
          }
        }}
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form className=" flex flex-col h-full justify-start gap-4">
            <Field
              id="full_name"
              name="full_name"
              placeholder="Full Name"
              className={` ${AuthInput} ${
                errors.email ? "border-red-500 " : ""
              }`}
            />
            <Field
              id="email"
              name="email"
              placeholder="Email"
              className={` ${AuthInput} ${
                errors.email ? "border-red-500 " : ""
              }`}
            />
            <div className="relative flex w-full  ">
              <input
                type={values.showPassword ? "text" : "password"}
                placeholder="Password"
                value={values.password}
                onChange={(e) => setFieldValue("password", e.target.value)}
                className={`w-full ${AuthInput} ${
                  errors.email ? "border-red-500 " : ""
                }`}
              />
              <button
                type="button"
                className="absolute right-3 top-1/4 rounded "
                onClick={() =>
                  setFieldValue("showPassword", !values.showPassword)
                }
              >
                <PasswordEye showPassword={values.showPassword} key={1} />
              </button>
            </div>
            <button
              type="submit"
              className=" h-10 px-3 py-2.5 bg-violet-600 rounded-[100px] justify-center items-center gap-1.5 inline-flex text-white text-sm font-medium leading-tight"
            >
              Sign Up
            </button>
            {messages && (
            <span className="flex items-center font-medium tracking-wide text-danger text-sm mt-3 ml-1">
              {messages[0].message}
            </span>
          )}
            {touched.email && errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
            {touched.password && errors.password && (
              <span className="text-red-500">{errors.password}</span>
            )}
            {touched.full_name && errors.full_name && (
              <span className="text-red-500">{errors.full_name}</span>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignUp;
