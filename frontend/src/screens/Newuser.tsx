import React, { ChangeEvent } from "react";
import { Link } from "react-router-dom";

export const Newuser = () => {
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div className="bg-slate-300 p-10 rounded-lg">
          <div>
            <div className="text-3xl font-semibold mt-4">Start New Game</div>
            <div className="text-slate-600 pt-2">
              Already have an account?
              <Link className="pl-2 font-bold text-blue-700" to="/signin">
                SIGN IN
              </Link>
            </div>
          </div>
          <div className="">
            <LabelledInput
              label="Username"
              placeholder="Enter new Username"
              onChange={(e) => {}}
            />

            <Link to="/game">
              <button
                type="button"
                className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Start Game &rarr;
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
