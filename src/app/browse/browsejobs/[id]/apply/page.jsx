import { getPlanBYId } from "@/lib/api/plans";
import { userinfo } from "@/lib/core/userinfo";
import Link from "next/link";

const BrowseJobDetailsPage = async ({ params }) => {
    const { id } = await params; 

    const user = await userinfo();

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000";
    let job = null;
    let applicationCount = 0;


    // plan 

    const plan = await getPlanBYId(user?.plan || 'seeker_free')
    console.log(plan, "plan");


    if (user?.role !== "seeker") {
        return (
            <div className="min-h-screen bg-slate-900 text-white flex justify-center items-center px-4">
                <div className="bg-black border border-zinc-800 p-6 rounded-xl max-w-md w-full text-center shadow-lg">
                    <span className="text-4xl">⚠️</span>
                    <h2 className="text-xl font-bold mt-3 text-gray-200">Access Denied</h2>
                    <p className="text-sm text-gray-400 mt-2">Only Job Seekers can view job details.</p>
                </div>
            </div>
        );
    }

    try {
        const res = await fetch(`${baseUrl}/api/browsejobs/${id}`);
        if (res.ok) {
            job = await res.json();
        }

        const applicantId = user?.id || user?._id; 
        if (applicantId) {
            const appsRes = await fetch(`${baseUrl}/api/applications?applicantId=${applicantId}`);
            if (appsRes.ok) {
                const userApplications = await appsRes.json();
                applicationCount = userApplications.length; 
            }
        }
    } catch (err) {
        console.error("Error fetching data:", err);
    }

    if (!job) {
        return (
            <div className="min-h-screen bg-slate-900 text-white flex justify-center items-center">
                <p className="text-lg font-medium text-gray-400">Job Not Found!</p>
            </div>
        );
    }

    const limit = plan?.maxApplicationsPerMonth || 3;
    const hasReachedLimit = applicationCount >= limit;
    const targetLink = hasReachedLimit 
        ? "/pricing" 
        : `/browse/browsejobs/${id}/apply/applyform`;

    return (
        <div className="min-h-screen bg-slate-900 text-white pt-24 pb-16 px-4 md:px-8">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                <div className="lg:col-span-2 space-y-6">
                    <div className="p-6 rounded-xl bg-black border border-zinc-800/80 shadow-md">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <img 
                                    src={job.companyLogo || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=150"} 
                                    alt={job.companyName} 
                                    className="w-16 h-16 rounded-xl object-cover bg-zinc-900 border border-zinc-800"
                                />
                                <div>
                                    <h4 className="text-purple-400 text-sm font-semibold tracking-wide uppercase">{job.companyName}</h4>
                                    <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mt-1 text-white">{job.title}</h1>
                                </div>
                            </div>
                            <div className="flex gap-2 sm:self-start">
                                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">{job.jobType}</span>
                                <span className="bg-zinc-800 text-gray-300 px-3 py-1 rounded-full text-xs font-medium">{job.location}</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl bg-black border border-zinc-800/80 shadow-md">
                        <h3 className="text-lg font-bold text-white border-b border-zinc-800 pb-2 mb-4 flex items-center gap-2">
                            <span className="text-purple-500">🎯</span> Core Responsibilities
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                            {job.coreResponsibilities || job.shortDescription}
                        </p>
                    </div>

                    {/* Requirements & Credentials */}
                    <div className="p-6 rounded-xl bg-black border border-zinc-800/80 shadow-md">
                        <h3 className="text-lg font-bold text-white border-b border-zinc-800 pb-2 mb-4 flex items-center gap-2">
                            <span className="text-purple-500">📋</span> Requirements & Credentials
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                            {job.requirements || "Not specified."}
                        </p>
                    </div>

                    {/* Benefits & Perks */}
                    <div className="p-6 rounded-xl bg-black border border-zinc-800/80 shadow-md">
                        <h3 className="text-lg font-bold text-white border-b border-zinc-800 pb-2 mb-4 flex items-center gap-2">
                            <span className="text-purple-500">🎁</span> Benefits & Perks
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                            {job.benefits || "Standard startup perks apply."}
                        </p>
                    </div>
                </div>

                {/* ─── ডান পাশের Job Overview বক্স ─── */}
                <div className="lg:col-span-1">
                    <div className="bg-black border border-zinc-800 p-6 rounded-xl lg:sticky lg:top-24 shadow-lg">
                        <h3 className="text-lg font-bold mb-6 text-white border-b border-zinc-800 pb-2">Job Overview</h3>
                        
                        <div className="space-y-5 text-sm">
                            <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/40">
                                <span className="text-purple-500 text-xl">📍</span>
                                <div>
                                    <p className="text-gray-500 text-xs">Location</p>
                                    <p className="font-semibold text-gray-200">{job.location}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/40">
                                <span className="text-purple-500 text-xl">💼</span>
                                <div>
                                    <p className="text-gray-500 text-xs">Job Type & Mode</p>
                                    <p className="font-semibold text-gray-200">{job.jobType} ({job.workMode || "Onsite"})</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/40">
                                <span className="text-purple-500 text-xl">💰</span>
                                <div>
                                    <p className="text-gray-500 text-xs">Salary Range</p>
                                    <p className="font-semibold text-gray-200">{job.salaryRange}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/40">
                                <span className="text-purple-500 text-xl">📅</span>
                                <div>
                                    <p className="text-gray-500 text-xs">Application Deadline</p>
                                    <p className="font-semibold text-red-400">{job.applicationDeadline || "N/A"}</p>
                                </div>
                            </div>
                        </div>

                        {/* লিমিট এবং অ্যাকশন সেকশন */}
                        <div className="mt-6 text-center">
                            <p className="text-xs text-gray-400 mb-2">
                                Used Applications: <span className={hasReachedLimit ? "text-red-400 font-bold" : "text-purple-400 font-bold"}>{applicationCount}</span> / {limit}
                            </p>
                            
                            <Link 
                                href={targetLink} 
                                className={`w-full block text-center font-semibold py-3 rounded-xl transition-all duration-200 shadow-md ${
                                    hasReachedLimit 
                                        ? "bg-amber-600 hover:bg-amber-700 text-white shadow-amber-900/20" 
                                        : "bg-purple-600 hover:bg-purple-700 text-white shadow-purple-900/20"
                                }`}
                            >
                                {hasReachedLimit ? "🚀 Upgrade Plan to Apply" : "Apply Now"}
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BrowseJobDetailsPage;