'use client'
import React, { useEffect, useState } from 'react';

const MyCompany = () => {
    const [company, setCompany] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // ব্যাকএন্ড থেকে কোম্পানির ডেটা ফেচ করা হচ্ছে
        // বাস্তব প্রজেক্টে এখানে ডাইনামিক ID ব্যবহার করতে পারেন (যেমন: /api/company/${id})
        fetch('http://localhost:5000/api/company')
            .then(res => res.json())
            .then(data => {
                // আপাতত কালেকশনের প্রথম কোম্পানিটিকে দেখানোর জন্য data[0] নেওয়া হয়েছে
                if (data && data.length > 0) {
                    setCompany(data[0]); 
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching company details:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="bg-[#0B0F19] min-h-screen flex items-center justify-center text-white">
                <p className="text-lg tracking-wide animate-pulse">Loading Company Profile...</p>
            </div>
        );
    }

    if (!company) {
        return (
            <div className="bg-[#0B0F19] min-h-screen flex items-center justify-center text-white">
                <p className="text-lg">No company data found.</p>
            </div>
        );
    }

    return (
        <div className="bg-[#0B0F19] min-h-screen text-[#E2E8F0] font-sans pb-12">
            
            {/* Top Hero Banner with Globe/Map Background Styling */}
            <div className="relative h-64 bg-gradient-to-r from-blue-950/40 via-purple-950/30 to-slate-950 border-b border-slate-800 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
            </div>

            {/* Main Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
                
                {/* Profile Header Block */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800">
                    <div className="flex flex-col sm:flex-row items-start sm:items-end gap-5">
                        {/* Company Logo placeholder */}
                        <div className="w-24 h-24 bg-gradient-to-b from-amber-500 to-amber-700 rounded-xl border-2 border-slate-800 shadow-2xl flex items-center justify-center text-white text-4xl font-serif font-bold select-none">
                            {company.companyName ? company.companyName.charAt(0) : 'L'}
                        </div>
                        <div>
                            <div className="flex items-center gap-3">
                                <h1 className="text-3xl font-bold text-white tracking-tight">{company.companyName}</h1>
                                <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded border border-emerald-500/20">
                                    Approved
                                </span>
                            </div>
                            <p className="text-sm text-slate-400 mt-2 max-w-2xl">
                                Leading solutions in {company.industry || 'Technology'} sectors and modern engineering ecosystem.
                            </p>
                        </div>
                    </div>

                    {/* Header Action Buttons */}
                    <div className="flex items-center gap-3">
                        <button className="px-4 py-2 text-sm font-medium bg-slate-800 hover:bg-slate-700 text-white rounded-lg border border-slate-700 transition-colors flex items-center gap-1.5">
                            <span className="text-lg">+</span> Follow
                        </button>
                        {company.websiteUrl && (
                            <a 
                                href={`https://${company.websiteUrl}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 text-sm font-medium bg-white hover:bg-slate-200 text-black rounded-lg transition-colors flex items-center gap-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" />
                                </svg>
                                Visit Website
                            </a>
                        )}
                    </div>
                </div>

                {/* Grid Layout: Left Content, Right Sidebar */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                    
                    {/* Left Column: About & Gallery */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* About Section */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold text-white">About {company.companyName}</h2>
                            <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                                {company.briefDescription || "No description provided."}
                            </p>
                        </div>

                        {/* Company Stats Cards */}
                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold text-white">Company Stats</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="bg-[#111625] p-5 rounded-xl border border-slate-800">
                                    <span className="text-xs text-slate-500 font-medium block mb-2 uppercase tracking-wider">Employees</span>
                                    <span className="text-lg font-bold text-white block">{company.employeeCount}</span>
                                </div>
                                <div className="bg-[#111625] p-5 rounded-xl border border-slate-800">
                                    <span className="text-xs text-slate-500 font-medium block mb-2 uppercase tracking-wider">Headquarters</span>
                                    <span className="text-lg font-bold text-white block">{company.location || 'N/A'}</span>
                                </div>
                                <div className="bg-[#111625] p-5 rounded-xl border border-slate-800">
                                    <span className="text-xs text-slate-500 font-medium block mb-2 uppercase tracking-wider">Industry</span>
                                    <span className="text-lg font-bold text-white block">{company.industry}</span>
                                </div>
                            </div>
                        </div>

                        {/* Life at Company Section */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-semibold text-white">Life at {company.companyName}</h2>
                                <button className="text-xs font-semibold text-slate-400 hover:text-white transition-colors">View Gallery</button>
                            </div>
                            <div className="grid grid-cols-3 gap-4 h-64">
                                <div className="col-span-2 bg-[#111625] border border-slate-800 rounded-xl overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    <div className="w-full h-full bg-slate-800/50 flex items-center justify-center text-slate-600 text-xs">Office Environment Image</div>
                                </div>
                                <div className="grid grid-rows-2 gap-4">
                                    <div className="bg-[#111625] border border-slate-800 rounded-xl overflow-hidden flex items-center justify-center text-slate-600 text-xs">Meeting Room</div>
                                    <div className="bg-[#111625] border border-slate-800 rounded-xl overflow-hidden flex items-center justify-center text-slate-600 text-xs">Workstation</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Active Roles & Hiring Team */}
                    <div className="space-y-6">
                        
                        {/* Active Roles Section */}
                        <div className="bg-[#111625] rounded-xl border border-slate-800 p-5 space-y-4">
                            <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                                <h2 className="text-md font-bold text-white">Active Roles</h2>
                                <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-xs font-mono">3</span>
                            </div>

                            {/* Job Item 1 */}
                            <div className="p-4 bg-[#161D30] rounded-lg border border-slate-800/80 space-y-3">
                                <div className="flex justify-between items-start">
                                    <h4 className="text-sm font-semibold text-white hover:text-blue-400 cursor-pointer transition-colors">Senior Distributed Systems Engineer</h4>
                                    <span className="text-slate-500 hover:text-white cursor-pointer">↗</span>
                                </div>
                                <div className="flex flex-wrap gap-2 text-[11px]">
                                    <span className="bg-slate-800 px-2 py-0.5 rounded text-slate-400">SF / Remote</span>
                                    <span className="bg-slate-800 px-2 py-0.5 rounded text-slate-400">$180k - $240k</span>
                                </div>
                                <button className="w-full py-1.5 bg-white text-black font-semibold text-xs rounded hover:bg-slate-200 transition-colors">
                                    Quick Apply
                                </button>
                            </div>

                            {/* Job Item 2 */}
                            <div className="p-4 bg-[#161D30] rounded-lg border border-slate-800/80 space-y-3">
                                <div className="flex justify-between items-start">
                                    <h4 className="text-sm font-semibold text-white hover:text-blue-400 cursor-pointer transition-colors">Product Design Lead</h4>
                                    <span className="text-slate-500 hover:text-white cursor-pointer">↗</span>
                                </div>
                                <div className="flex flex-wrap gap-2 text-[11px]">
                                    <span className="bg-slate-800 px-2 py-0.5 rounded text-slate-400">New York</span>
                                    <span className="bg-slate-800 px-2 py-0.5 rounded text-slate-400">$160k - $210k</span>
                                </div>
                                <button className="w-full py-1.5 bg-white text-black font-semibold text-xs rounded hover:bg-slate-200 transition-colors">
                                    Quick Apply
                                </button>
                            </div>

                            <button className="w-full py-2 text-xs font-semibold text-slate-400 hover:text-white bg-slate-800/40 hover:bg-slate-800 rounded-lg text-center transition-colors">
                                See all openings
                            </button>
                        </div>

                        {/* Hiring Team Section */}
                        <div className="bg-[#111625] rounded-xl border border-slate-800 p-5 space-y-4">
                            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">Hiring Team</h2>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">SC</div>
                                <div>
                                    <h4 className="text-sm font-semibold text-white">Sarah Chen</h4>
                                    <p className="text-xs text-slate-500">Head of Talent Acquisition</p>
                                </div>
                            </div>
                            <button className="w-full py-2 bg-transparent hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-semibold text-xs rounded-lg transition-colors">
                                Message Team
                            </button>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default MyCompany;