import { FiSearch, FiTrendingUp, FiBriefcase, FiBookmark, FiZap, FiFileText, FiTarget, FiBarChart2 } from 'react-icons/fi';

const FeaturesJob = () => {
    const features = [
        {
            icon: <FiSearch className="text-[#c084fc] text-xl" />,
            title: "Smart Search",
            description: "Find your ideal job with advanced filters."
        },
        {
            icon: <FiTrendingUp className="text-[#c084fc] text-xl" />,
            title: "Salary Insights",
            description: "Get real salary data to negotiate confidently."
        },
        {
            icon: <FiBriefcase className="text-[#c084fc] text-xl" />,
            title: "Top Companies",
            description: "Apply to vetted companies that are hiring."
        },
        {
            icon: <FiBookmark className="text-[#c084fc] text-xl" />,
            title: "Saved Jobs",
            description: "Manage apps & favorites on your dashboard."
        },
        {
            icon: <FiZap className="text-[#c084fc] text-xl" />,
            title: "One-Click Apply",
            description: "Simplify your job applications for an easier process!"
        },
        {
            icon: <FiFileText className="text-[#c084fc] text-xl" />,
            title: "Resume Builder",
            description: "Create professional resumes with modern templates."
        },
        {
            icon: <FiTarget className="text-[#c084fc] text-xl" />,
            title: "Skill-Based Matching",
            description: "Discover jobs that match your skills and experience."
        },
        {
            icon: <FiBarChart2 className="text-[#c084fc] text-xl" />,
            title: "Career Growth Resources",
            description: "Boost your career with quick interview tips."
        }
    ];

    return (
        <section className="w-full bg-[#0d0d0d] text-white py-20 px-6 md:px-12 flex flex-col items-center justify-center font-sans">
            
            {/* 1. Top Mini Badge */}
            <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 bg-[#6366f1] inline-block"></span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                    FEATURES JOB
                </span>
                <span className="w-1.5 h-1.5 bg-[#6366f1] inline-block"></span>
            </div>

            {/* 2. Main Heading */}
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center max-w-2xl mb-16 leading-tight">
                Everything you need <br /> to succeed
            </h2>

            {/* 3. Features Grid (এটিকে এবার পারফেক্টলি max-w-[1320px] এ সেট করা হয়েছে) */}
            <div className="w-full max-w-[1320px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                {features.map((feature, index) => (
                    <div 
                        key={index} 
                        className="flex items-start gap-4 p-2 group transition-all duration-300 w-full"
                    >
                        {/* Icon Wrapper */}
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#141414] border border-neutral-800/80 rounded-xl transition-all duration-300 group-hover:border-purple-500/50 group-hover:shadow-[0_0_15px_rgba(192,132,252,0.15)]">
                            {feature.icon}
                        </div>

                        {/* Content Area */}
                        <div className="flex flex-col gap-1.5 flex-1">
                            <h3 className="text-[15px] font-semibold text-white tracking-wide group-hover:text-purple-300 transition-colors duration-200">
                                {feature.title}
                            </h3>
                            {/* ডেসক্রিপশনের ফিক্সড উইডথ সরিয়ে w-full করা হয়েছে যেন কন্টেইনার পুরো স্পেস ছড়াতে পারে */}
                            <p className="text-sm text-neutral-500 leading-relaxed w-full">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default FeaturesJob;