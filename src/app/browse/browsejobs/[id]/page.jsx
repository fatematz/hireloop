'use client'
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const BrowseJobDetailsPage = () => {
    const params = useParams();
    const id = params?.id; // URL থেকে ডাইনামিক ID নেওয়া
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000";
        fetch(`${baseUrl}/api/browsejobs/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setJob(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching job details:", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className="min-h-screen bg-slate-950 text-white flex justify-center items-center">Loading...</div>;
    }

    if (!job) {
        return <div className="min-h-screen bg-slate-950 text-white flex justify-center items-center">Job Not Found!</div>;
    }

    return (
        <div className="py-[160px] bg-slate-950 text-white">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* বাম পাশের মেইন কনটেন্ট এরিয়া */}
                <div className="lg:col-span-2 space-y-8">
                    {/* কোম্পানির লোগো ও হেডার */}
                    <div className="flex items-center gap-4">
                        <img 
                            src={job.companyLogo || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=150"} 
                            alt={job.companyName} 
                            className="w-16 h-16 rounded-xl object-cover bg-gray-800"
                        />
                        <div>
                            <h4 className="text-gray-400 text-sm font-semibold">{job.companyName}</h4>
                            <p className="text-xs text-gray-500">Technology Role</p>
                        </div>
                    </div>

                    {/* জবের টাইটেল */}
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-2">{job.title}</h1>

                    {/* Core Responsibilities */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-200 mb-2">Core Responsibilities</h3>
                        <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                            {job.coreResponsibilities || job.shortDescription}
                        </p>
                    </div>

                    {/* Requirements & Credentials */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-200 mb-2">Requirements & Credentials</h3>
                        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl text-sm text-gray-400 leading-relaxed whitespace-pre-line">
                            {job.requirements || "Not specified."}
                        </div>
                    </div>

                    {/* Benefits & Perks */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-200 mb-2">Benefits & Perks</h3>
                        <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                            {job.benefits || "Standard startup perks apply."}
                        </p>
                    </div>
                </div>

                {/* ডান পাশের Job Overview বক্স */}
                <div className="lg:col-span-1">
                    <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl sticky top-6">
                        <h3 className="text-lg font-bold mb-6 text-gray-100">Job Overview</h3>
                        
                        <div className="space-y-5 text-sm">
                            {/* Location */}
                            <div className="flex items-start gap-3">
                                <span className="text-purple-500 mt-0.5">📍</span>
                                <div>
                                    <p className="text-gray-400 text-xs">Location</p>
                                    <p className="font-semibold text-gray-200">{job.location}</p>
                                </div>
                            </div>

                            {/* Job Type */}
                            <div className="flex items-start gap-3">
                                <span className="text-purple-500 mt-0.5">💼</span>
                                <div>
                                    <p className="text-gray-400 text-xs">Job Type</p>
                                    <p className="font-semibold text-gray-200">{job.jobType} ({job.workMode || "Onsite"})</p>
                                </div>
                            </div>

                            {/* Salary Range */}
                            <div className="flex items-start gap-3">
                                <span className="text-purple-500 mt-0.5">💰</span>
                                <div>
                                    <p className="text-gray-400 text-xs">Salary Range</p>
                                    <p className="font-semibold text-gray-200">{job.salaryRange}</p>
                                </div>
                            </div>

                            {/* Application Deadline */}
                            <div className="flex items-start gap-3">
                                <span className="text-purple-500 mt-0.5">📅</span>
                                <div>
                                    <p className="text-gray-400 text-xs">Application Deadline</p>
                                    <p className="font-semibold text-gray-200">{job.applicationDeadline || "N/A"}</p>
                                </div>
                            </div>
                        </div>

                        {/* Apply Button */}
                        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-xl mt-8 transition-all duration-200 active:scale-95">
                            Apply For This Job
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BrowseJobDetailsPage;