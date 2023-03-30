import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import ImageLight from "../assets/img/login-office.jpeg";
import ImageDark from "../assets/img/login-office-dark.jpeg";
import { PhoneIcon } from "../icons";
import { Label, Input, Button } from "@windmill/react-ui";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const login = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      if (user.emailVerified) {
        console.log("Here");
        history.push("/");
      } else {
        setError({
          message:
            "Your email address has not been verified. Please check your email for the verification link and follow the instructions to complete the signup process.",
        });
      }
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Welcome to the Nawiri App
              </h1>

              {error && (
                <div className="bg-red-500 py-2 px-4 rounded-md text-white font-bold">
                  {error.code === "auth/invalid-email"
                    ? "The email address is invalid. Please enter a valid email address."
                    : error.code === "auth/user-not-found"
                    ? "There is no user associated with the provided email address. Please check the email address and try again."
                    : error.code === "auth/wrong-password"
                    ? "The password is invalid. Please enter the correct password."
                    : "An error occurred. Please try again later."}
                  <br />
                </div>
              )}

              <Label>
                <span>Email</span>
                <Input
                  className="mt-1"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="john@doe.com"
                />
              </Label>

              <Label className="mt-4">
                <span>Password</span>
                <Input
                  className="mt-1"
                  placeholder="***************"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  type="password"
                />
              </Label>

              <Button className="mt-4" type="submit" onClick={login}>
                Log in
              </Button>

              <hr className="my-8" />

              <Button block layout="outline">
                <PhoneIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Sign in using your phone number
              </Button>

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/forgot-password"
                >
                  Forgot your password?
                </Link>
              </p>
              <p className="mt-1">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/create-account"
                >
                  Create account
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Login;
