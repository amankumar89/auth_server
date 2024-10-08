import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Signup: React.FC = () => {
  const handleSignup = async (values: {
    name: string;
    email: string;
    password: string;
  }) => {
    // API call to signup
    console.log(values);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center">Sign Up</h1>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={handleSignup}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Field
                id="name"
                name="name"
                placeholder="Your Name"
                className={`mt-1 block w-full rounded-md border ${
                  touched.name && errors.name
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              <ErrorMessage
                component="div"
                name="name"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                className={`mt-1 block w-full rounded-md border ${
                  touched.email && errors.email
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              <ErrorMessage
                component="div"
                name="email"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="Your Password"
                className={`mt-1 block w-full rounded-md border ${
                  touched.password && errors.password
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              <ErrorMessage
                component="div"
                name="password"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
