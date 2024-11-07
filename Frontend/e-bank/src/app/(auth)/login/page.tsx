"use client";
import { FcGoogle } from "react-icons/fc";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useEffect, useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Spinner from "@/app/components/spinner/page";

type LoginForm = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup
    .string()
    .required("Email is required.")
    .email("Invalid email format."),
  password: yup
    .string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters.")
    .matches(
      /(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter."
    )
    .matches(
      /(?=.*[a-z])/,
      "Password must contain at least one lowercase letter."
    )
    .matches(/(?=.*[0-9])/, "Password must contain at least one number.")
    .matches(
      /(?=.*[@$!%*?&])/,
      "Password must contain at least one special character."
    ),
});

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const form = useForm<LoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful } =
    formState;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onError = (errors: FieldErrors) => {
    console.log(errors);
  };

  const onSubmit = async (data: LoginForm) => {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const error = await response.text();
        throw new Error(error);
      }
      reset();
      setLoading(false);
    } catch (error) {
      setError("Something went wrong. Please try again later.");
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-6 mb-12 max-w-md mx-auto mt-12 text-gray-500">
        <h3 className="text-xl font-semibold mb-4 text-center">
          Welcome Back!
        </h3>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-left text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your email"
              required
            />
            <p style={{ color: "red", fontSize: "12px" }}>
              {errors.email?.message}
            </p>
          </div>

          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-left text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              {...register("password")}
              className="w-full p-2 pr-10 border border-gray-300 rounded"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute mt-6 inset-y-0 right-3 flex items-center text-gray-600"
              aria-label="Toggle password visibility"
            >
              {passwordVisible ? (
                <MdVisibility size={20} />
              ) : (
                <MdVisibilityOff size={20} />
              )}
            </button>
            <p style={{ color: "red", fontSize: "12px" }}>
              {errors.password?.message}
            </p>
          </div>
          <div>{error && <p style={{ color: "red" }}>{error}</p>}</div>
          <button
            disabled={(!isDirty && !isValid) || isSubmitting}
            type="submit"
            className="w-full bg-mainRed text-white p-2 rounded mt-2 hover:bg-hoverRed transition duration-300"
          >
            {loading ? <Spinner /> : "Login"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don&apos;t have account?{" "}
          <a
            href="/signup"
            className="text-mainRed font-semibold hover:underline"
          >
            SignUp
          </a>
        </p>

        <div className="flex items-center mt-6 mb-2">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button className="w-full flex text-mainRed items-center justify-center bg-white border border-gray-300 p-2 rounded hover:bg-gray-100 transition duration-300">
          <FcGoogle size={20} className="mr-2" />
          Login with Google
        </button>
      </div>
      ;
    </>
  );
};

export default Login;
