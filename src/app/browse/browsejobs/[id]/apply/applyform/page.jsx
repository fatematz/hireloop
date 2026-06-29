'use client';
import { useState, useEffect } from "react";
import {useRouter} from "next/navigation";
import { authClient } from "@/lib/auth-client";

const ApplyPage = () => {
    const { data: session } = authClient.useSession();
    const router = useRouter();
    
    const [applicationCount, setApplicationCount] = useState(0);
    const [isLoadingLimit, setIsLoadingLimit] = useState(true);
    const [limit, setLimit] = useState(3);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        coverLetter: "",
        resume: null
    });

    useEffect(() => {
        const checkUserLimit = async () => {
            const applicantId = session?.user?.id;
            if (!applicantId) {
                if (session === null) setIsLoadingLimit(false);
                return;
            }

            try {
                const res = await fetch(`http://localhost:5000/api/applications?applicantId=${applicantId}`);
                if (res.ok) {
                    const data = await res.json();
                    setApplicationCount(data.length);
                }

                const planId = session?.user?.plan || 'seeker_free';
const planRes = await fetch(`http://localhost:5000/api/plan?plan_id=${planId}`);
if (planRes.ok) {
    const planData = await planRes.json();
    if (planData?.maxApplicationsPerMonth) setLimit(planData.maxApplicationsPerMonth);
}


            } catch (error) {
                console.error("Error checking limit:", error);
            } finally {
                setIsLoadingLimit(false);
            }
        };

        if (session) {
            checkUserLimit();
        }
    }, [session]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, resume: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (applicationCount >= limit) {
            router.push('/pricing'); 
            return;
        }

        try {
            const applicationData = {
                fullName: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                coverLetter: formData.coverLetter,
                resumeName: formData.resume?.name || "", 
                applicantId: session?.user?.id || "", 
            };

            const response = await fetch('http://localhost:5000/api/applications', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(applicationData),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('MongoDB তে save হয়েছে:', data);
                alert('Application submitted successfully! ✅');
                
                setApplicationCount(prev => prev + 1);
                
                setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    coverLetter: "",
                    resume: null
                });
            } else {
                alert(data.message || 'Something went wrong ❌');
            }

        } catch (error) {
            console.error('Error:', error);
            alert('Server এ connect করতে পারছে না!');
        }
    };

    const hasReachedLimit = applicationCount >= limit;

    if (isLoadingLimit) {
        return (
            <div className="min-h-screen bg-slate-900 text-white flex justify-center items-center">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-purple-500"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-900 text-white pt-24 pb-16 px-4 md:px-8 flex justify-center items-center">
            <div className="max-w-2xl w-full bg-black border border-zinc-800 p-6 md:p-8 rounded-2xl shadow-xl">
                
                {/* Form Header */}
                <div className="border-b border-zinc-800 pb-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                            Submit Your Application
                        </h2>
                        <p className="text-sm text-gray-400 mt-1">
                            {hasReachedLimit 
                                ? "You have reached your free tier application limit. Please upgrade." 
                                : "Please fill out the form below to apply for this position."
                            }
                        </p>
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 bg-zinc-900 border rounded-full self-start sm:self-center ${hasReachedLimit ? 'border-amber-500/30 text-amber-400' : 'border-zinc-800 text-purple-400'}`}>
                        Used: {applicationCount} / {limit}
                    </span>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Full Name */}
                    <div>
                        <label className="block text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            required={!hasReachedLimit}
                            disabled={hasReachedLimit} // লিমিট শেষ হলে ইনপুট লক
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-zinc-600 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition-all duration-250 disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                    </div>

                    {/* Email and Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Email */}
                        <div>
                            <label className="block text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                required={!hasReachedLimit}
                                disabled={hasReachedLimit} // লিমিট শেষ হলে ইনপুট লক
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="johndoe@example.com"
                                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-zinc-600 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition-all duration-250 disabled:opacity-50 disabled:cursor-not-allowed"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                required={!hasReachedLimit}
                                disabled={hasReachedLimit} // লিমিট শেষ হলে ইনপুট লক
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+880 1XXX XXXXXX"
                                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-zinc-600 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition-all duration-250 disabled:opacity-50 disabled:cursor-not-allowed"
                            />
                        </div>
                    </div>

                    {/* Resume/CV Upload */}
                    <div>
                        <label className="block text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">
                            Upload Resume/CV <span className="text-red-500">*</span>
                        </label>
                        <div className={`relative w-full bg-zinc-900 border border-zinc-800 border-dashed rounded-xl p-4 text-center transition-colors duration-250 ${hasReachedLimit ? 'opacity-50 cursor-not-allowed' : 'hover:border-purple-500 cursor-pointer'}`}>
                            <input
                                type="file"
                                name="resume"
                                required={!hasReachedLimit}
                                disabled={hasReachedLimit} // লিমিট শেষ হলে ফাইল আপলোড লক
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
                            />
                            <div className="flex flex-col items-center justify-center gap-1">
                                <span className="text-2xl text-purple-500">📁</span>
                                <p className="text-sm text-gray-300 font-medium">
                                    {formData.resume ? formData.resume.name : "Click to upload or drag & drop"}
                                </p>
                                <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB</p>
                            </div>
                        </div>
                    </div>

                    {/* Cover Letter */}
                    <div>
                        <label className="block text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">
                            Cover Letter
                        </label>
                        <textarea
                            name="coverLetter"
                            rows="5"
                            disabled={hasReachedLimit} // লিমিট শেষ হলে টেক্সট-এরিয়া লক
                            value={formData.coverLetter}
                            onChange={handleChange}
                            placeholder="Tell us why you are a great fit for this role..."
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-zinc-600 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition-all duration-250 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                        ></textarea>
                    </div>

                    {/* Dynamic Submit / Upgrade Button */}
                    <div className="pt-2">
                        {hasReachedLimit ? (
                            /* 🚀 ৩ বার সাবমিট হওয়ার পর বাটনটি সাথে সাথে এই 'Upgrade' বাটনে রূপান্তরিত হবে */
                            <button
                                type="button"
                                onClick={() => router.push('/pricing')}
                                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-lg shadow-amber-900/20 active:scale-[0.99] flex items-center justify-center gap-2"
                            >
                                🚀 Upgrade Plan to Apply
                            </button>
                        ) : (
                            /* রেগুলার সাবমিট বাটন */
                            <button
                                type="submit"
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-lg shadow-purple-900/20 active:scale-[0.99]"
                            >
                                Submit Application
                            </button>
                        )}
                    </div>

                </form>
            </div>
        </div>
    );
};

export default ApplyPage;