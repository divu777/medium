import { SignupInput } from "@divakar777balle/blog-common";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

const Form = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postinputs, setPostinputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });

  const sendRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type == "signin" ? "signin" : "signup"}`,
        postinputs
      );
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (err) {
      console.log(err);
      alert("error in form");
    }
  };
  return (
    <div className="flex flex-col items-center h-screen justify-center px-4 ">
      <div className="w-full max-w-md bg-white p-8 ">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {type == "signup" ? "Create an account" : "Sign In"}
          </h1>
          <h3 className="font-semibold text-gray-600">
            {type == "signup"
              ? "Already have an account?"
              : "Don't have an account?"}
            <NavLink
              to={type == "signup" ? "/signin" : "/"}
              className="text-slate-500 hover:underline"
            >
              {type == "signup" ? " SignIn" : " SignUp"}
            </NavLink>
          </h3>
        </div>
        <form className="flex flex-col gap-4" onSubmit={sendRequest}>
          {type == "signup" ? (
            <LabelInputs
              label="Username"
              name="name"
              placeholder="Enter your username"
              onChange={(e) => {
                setPostinputs({
                  ...postinputs,
                  name: e.target.value,
                });
              }}
            />
          ) : (
            ""
          )}
          <LabelInputs
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => {
              setPostinputs({
                ...postinputs,
                username: e.target.value,
              });
            }}
          />
          <LabelInputs
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => {
              setPostinputs({
                ...postinputs,
                password: e.target.value,
              });
            }}
          />
          <button
            className="bg-black text-white w-full h-12 rounded-lg mt-3 hover:bg-black transition duration-300"
            type="submit"
          >
            {type == "signup" ? " Sign Up" : " Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

interface LabelInputInterface {
  label: string;
  name: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const LabelInputs = ({
  label,
  name,
  type,
  onChange,
  placeholder,
}: LabelInputInterface) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-2 text-gray-700">
        {label}
      </label>
      <input
        type={type || "text"}
        name={name}
        id={name}
        onChange={onChange}
        placeholder={placeholder}
        className="border-2 border-gray-300 rounded-lg h-12 px-3 text-sm focus:outline-none focus:border-gray-500"
      />
    </div>
  );
};
