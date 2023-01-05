import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../config/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

import ImageLight from "../assets/img/forgot-password-office.jpeg";
import ImageDark from "../assets/img/forgot-password-office-dark.jpeg";
import { Label, Input, Button } from "@windmill/react-ui";

function ForgotPassword() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [showBanner, setShowBanner] = useState(false);
  const [bannerMessage, setBannerMessage] = useState("");

  const resetPassword = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);
      setShowBanner(true);
      setBannerMessage(
        "A password reset email has been sent to your email address. Please follow the instructions in the email to reset your password."
      );
    } catch (error) {
      console.error(error);
      setShowBanner(true);

      if (error.code === "auth/invalid-email") {
        setBannerMessage(
          "The email address is invalid. Please enter a valid email address."
        );
      } else if (error.code === "auth/user-not-found") {
        setBannerMessage(
          "There is no user associated with the provided email address. Please check the email address and try again."
        );
      } else {
        setBannerMessage("An error occurred. Please try again later.");
      }
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
                Forgot password
              </h1>

              {showBanner && (
                <div className="bg-green-500 py-4 px-8 rounded-lg text-white font-bold shadow-md">
                  {bannerMessage}
                </div>
              )}

              <Label htmlFor="email-address">
                <span>Email</span>
                <Input
                  className="mt-1"
                  type="email"
                  label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                />
              </Label>
              <br />
              <p>
                <i>
                  <small>
                    {" "}
                    <Link to="/login">
                      Remember your password? Click to Sign in
                    </Link>
                  </small>
                </i>
              </p>

              <Button
                type="submit"
                onClick={resetPassword}
                block
                className="mt-4"
              >
                Recover password
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
