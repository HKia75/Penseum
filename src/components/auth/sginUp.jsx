import { Field, Form, Formik } from "formik";
import PasswordEye from "../passwordEye/passwordEye";
import * as Yup from "yup";
const ValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Required"),
  password: Yup.string().required("Required"),
  fulName: Yup.string().required("Required"),
});

function SginUp() {
  return (
    <div>
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{
          email: "",
          password: "",
          showPassword: false,
          remember: false,
        }}
        validationSchema={ValidationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form className=" flex h-full flex-col justify-start gap-4 px-8">
           
            
              <Field
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                className={`w-full rounded-2xl border border-gray-400 bg-bluePurple p-3.5 text-center   ${
                  errors.email ? "border-red-500 " : ""
                }`}
              />
              <Field
                id="email"
                name="email"
                placeholder="Email"
                className={`w-full rounded-2xl border border-gray-400 bg-bluePurple p-3.5 text-center   ${
                  errors.email ? "border-red-500 " : ""
                }`}
              />        
            <div className="flex flex-col justify-between gap-1  ">
              <div className="relative flex w-full  ">
                <input
                  type={values.showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={values.password}
                  onChange={(e) => setFieldValue("password", e.target.value)}
                  className={`w-full rounded-2xl border border-gray-400 bg-primary p-3.5 text-center   ${
                    errors.password ? "border-red-500 " : ""
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
            </div>

            <button
              type="submit"
              className="mt-3 w-full rounded-full bg-secondary py-3 text-xl font-bold text-white"
            >
              Sign Up
            </button>
            {touched.email && errors.email && (
                  <span className="text-red-500">{errors.email}</span>
                )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SginUp;
