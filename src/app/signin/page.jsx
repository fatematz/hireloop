'use client'; 

import { authClient } from '@/lib/auth-client';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

const SignInPage = () => {
    const router = useRouter(); 
    const searchParams = useSearchParams(); 
    const redirectTo = searchParams.get("redirect") || "/";

    // UI States
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false); 
    const [error, setError] = useState(''); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); 
        setIsLoading(true); 
        
        const fromData = new FormData(e.currentTarget);
        const user = Object.fromEntries(fromData.entries());

        try {
            const { data, error: authError } = await authClient.signIn.email({
                email: user.email,
                password: user.password,
            });
    
            if (authError) {
                setError(authError.message || "Invalid email or password.");
            } else if (data) {
                router.push(redirectTo);
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false); 
        }
    };

    return (
        <div className="light w-full min-h-[70vh] flex items-center justify-center bg-[#fafafa] py-12">
            <div className="w-full max-w-[400px] bg-white p-8 rounded-xl border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] mx-4">
                
                {/* Header Text */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-black tracking-tight mb-2">Log In</h2>
                    <p className="text-gray-400 text-xs">
                        Enter your email and password to login our dashboard.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    
                    {/* Error Message UI */}
                    {error && (
                        <div className="p-3 text-xs font-medium rounded-md bg-red-50 text-red-600 border border-red-200">
                            {error}
                        </div>
                    )}

                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-gray-700">Email</label>
                        <input
                            type="email"
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 transition text-gray-950 text-sm"
                            disabled={isLoading}
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-gray-700">Password</label>
                        <div className="relative w-full">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your Password"
                                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition text-gray-950 text-sm pr-10"
                                disabled={isLoading}
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition flex items-center justify-center cursor-pointer z-10"
                                disabled={isLoading}
                            >
                                {showPassword ? <IoEyeOffOutline size={18} /> : <IoEyeOutline size={18} />}
                            </button>
                        </div>
                    </div>

                    {/* Button with Loading State */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-[#5d54ff] hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-medium py-3 rounded-md transition mt-2 cursor-pointer text-sm flex items-center justify-center"
                    >
                        {isLoading ? "Signing In..." : "Sign In"}
                    </button>
                </form>

                <div className="mt-6 flex flex-col gap-2 text-xs font-medium">
                    <p className="text-gray-400">
                        Don't have an account?{" "}
                        <a href={`/signup?redirect=${redirectTo}`} className="text-indigo-600 hover:underline">
                            Sign Up
                        </a>
                    </p>
                    <p>
                        <a href="/forgot" className="text-indigo-600 hover:underline">
                            Forget Password?
                        </a>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default SignInPage;