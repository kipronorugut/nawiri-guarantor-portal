import React, { useState } from "react";
import ImageLight from "../assets/img/create-account-office.jpeg";
import ImageDark from "../assets/img/create-account-office-dark.jpeg";
import { Input, Label, Button } from "@windmill/react-ui";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../config/firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const signup = async (e) => {
    e.preventDefault();

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Send email verification
      await user.sendEmailVerification();
      // Display success message
      setError({
        message:
          "A verification email has been sent to your email address. Please follow the instructions in the email to complete the signup process.",
      });
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
                Create account
              </h1>
              {error && (
                <div className="bg-red-500 py-2 px-4 rounded-md text-white font-bold">
                  {error.code === "auth/email-already-in-use"
                    ? "The email address is already in use by another account. Please enter a different email address."
                    : error.code === "auth/invalid-email"
                    ? "The email address is invalid. Please enter a valid email address."
                    : error.code === "auth/weak-password"
                    ? "The password is not strong enough. Please choose a stronger password."
                    : error.message}
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
                  placeholder="Email Address"
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

              <Label className="mt-6" check>
                <Input type="checkbox" />
                <span className="ml-2">
                  I agree to the{" "}
                  <span className="underline">privacy policy</span>
                </span>
              </Label>

              <Button type="submit" onClick={signup} block className="mt-4">
                Create account
              </Button>

              <hr className="my-8" />

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/login"
                >
                  Already have an account? Login
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
