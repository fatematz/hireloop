"use client";
import React, { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { redirect, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import {Description, Label, Radio, RadioGroup} from "@heroui/react";

const SignUpPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [role, setRole] = useState("seeker");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fromData = new FormData(e.currentTarget);
    const user = Object.fromEntries(fromData.entries());
    console.log(user);


    const plan = role === 'seeker' ? 'seeker_free' : 'recruiter_free';

    const { data, error } = await authClient.signUp.email({
      email: email,
      password: password,
      name: name,
      image: imageUrl,
      role: role,
      plan: plan,
    });

    if (data) {
      redirect("/");
    }

    if (error) {
  setError(error.message || "Sign up failed.");
}
  };

  return (
    <div className="light w-full min-h-[85vh] flex items-center justify-center bg-[#fafafa] py-12">
      <div className="w-full max-w-[420px] bg-white p-8 rounded-xl border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] mx-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-black tracking-tight mb-2">
            Create Account
          </h2>
          <p className="text-gray-400 text-xs">
            Get started with your free account today.
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-md text-xs font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4.5">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 transition text-gray-950 text-sm"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 transition text-gray-950 text-sm"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-700">
              Password
            </label>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition text-gray-950 text-sm pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition flex items-center justify-center cursor-pointer z-10"
              >
                {showPassword ? (
                  <IoEyeOffOutline size={18} />
                ) : (
                  <IoEyeOutline size={18} />
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-semibold text-gray-700">
                Profile Image URL
              </label>
              <span className="text-[10px] text-gray-400 font-medium bg-gray-100 px-1.5 py-0.5 rounded">
                Optional
              </span>
            </div>
            <input
              type="url"
              name="image"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 transition text-gray-950 text-sm"
            />
          </div>

          <div className="">
             <div className="flex flex-col gap-4">
      <Label>Select one</Label>
      <RadioGroup onChange={value => setRole(value)} defaultValue="seeker"  name="role" orientation="horizontal">
        <Radio value="seeker">
          <Radio.Control>
            <Radio.Indicator />
          </Radio.Control>
          <Radio.Content>
            <Label>Job Seeker</Label>
          </Radio.Content>
        </Radio>
        <Radio value="recruiter">
          <Radio.Control>
            <Radio.Indicator />
          </Radio.Control>
          <Radio.Content>
            <Label>Recruiter</Label>
          </Radio.Content>
        </Radio>
     
      </RadioGroup>
    </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#5d54ff] hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-medium py-3 rounded-md transition mt-3 cursor-pointer text-sm shadow-md shadow-indigo-100 flex items-center justify-center"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <div className="mt-6 text-center text-xs font-medium">
          <p className="text-gray-400">
            Already have an account?{" "}
            <a href="/signin" className="text-indigo-600 hover:underline">
              sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
