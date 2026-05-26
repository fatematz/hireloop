import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import bannerImg from '@/assets/globe.png';

const Banner = () => {
    return (
        <section className="relative w-full bg-[#0d0d0d] text-white font-sans overflow-hidden pt-12 pb-24 px-6 md:px-12 flex flex-col items-center justify-center min-h-[90vh]">
            
            {/* 1. Badge Section */}
            <div className="mb-6 flex items-center justify-center">
                <div className="inline-flex items-center gap-2 bg-[#1a1a1a]/80 border border-neutral-800 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-gray-300 shadow-md">
                    <span className="text-base">💼</span>
                    <span className="text-white font-bold">50,000+</span> 
                    <span className="text-neutral-500 font-medium">NEW JOBS THIS MONTH</span>
                </div>
            </div>

            {/* 2. Main Title & Description */}
            <div className="text-center max-w-3xl z-10 mb-8">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white leading-tight">
                    Find Your Dream Job Today
                </h1>
                <p className="text-sm md:text-base text-neutral-400 leading-relaxed max-w-2xl mx-auto">
                    HireLoop connects top talent with world-class companies. Browse thousands of curated opportunities and land your next role — faster.
                </p>
            </div>

            {/* 3. Search Bar Section */}
            <div className="w-full max-w-3xl z-10 mb-6 px-2">
                <div className="bg-[#141414]/90 border border-neutral-800/80 rounded-2xl md:rounded-full p-2 flex flex-col md:flex-row items-center gap-3 shadow-2xl backdrop-blur-md">
                    {/* Input 1: Job Title */}
                    <div className="w-full flex items-center gap-3 px-3 py-2 md:py-0">
                        <FiSearch className="text-neutral-500 text-xl flex-shrink-0" />
                        <input 
                            type="text" 
                            placeholder="Job title, skill or company" 
                            className="w-full bg-transparent text-sm text-white placeholder-neutral-600 focus:outline-none"
                        />
                    </div>

                    {/* Vertical Divider for desktop */}
                    <div className="hidden md:block h-6 w-[1px] bg-neutral-800"></div>

                    {/* Input 2: Location */}
                    <div className="w-full flex items-center gap-3 px-3 py-2 md:py-0 border-t border-neutral-900 md:border-t-0">
                        <HiOutlineLocationMarker className="text-neutral-500 text-xl flex-shrink-0" />
                        <input 
                            type="text" 
                            placeholder="Location or Remote" 
                            className="w-full bg-transparent text-sm text-white placeholder-neutral-600 focus:outline-none"
                        />
                    </div>

                    {/* Search Button */}
                    <button className="w-full md:w-auto bg-[#6366f1] hover:bg-[#4f46e5] text-white p-3.5 rounded-xl md:rounded-full flex items-center justify-center transition-all duration-200 shadow-lg shadow-[#6366f1]/20 cursor-pointer">
                        <FiSearch className="text-white text-lg" />
                    </button>
                </div>
            </div>

            {/* 4. Trending Positions */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm z-10 mb-16">
                <span className="text-neutral-500 font-medium">Trending Position</span>
                <span className="bg-[#18181b] border border-neutral-800/60 px-3 py-1 rounded-full text-neutral-300 cursor-pointer hover:border-neutral-600 transition-colors">Product Designer</span>
                <span className="bg-[#18181b] border border-neutral-800/60 px-3 py-1 rounded-full text-neutral-300 cursor-pointer hover:border-neutral-600 transition-colors">AI Engineering</span>
                <span className="bg-[#18181b] border border-neutral-800/60 px-3 py-1 rounded-full text-neutral-300 cursor-pointer hover:border-neutral-600 transition-colors">Dev-ops Engineer</span>
            </div>

            {/* 5. Globe Image & Stats Heading Wrapper */}
            <div className="relative w-full max-w-[1320px] mx-auto mt-6 flex flex-col items-center">
                
                {/* Globe Image Container */}
                <div className="relative w-full aspect-[4/3] md:aspect-[3/1] max-h-[700px] overflow-hidden rounded-t-[100px] md:rounded-t-[200px]">
                    {/* Blue Glow overlay on top of Globe */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-transparent z-10 pointer-events-none"></div>
                    
                    <Image 
                        src={bannerImg} 
                        alt="Globe Grid Background" 
                        fill
                        priority
                        className="object-cover opacity-85"
                    />

                    {/* গ্লোবের একদম নিচের অংশে ডার্ক শ্যাডো ইফেক্ট, যা কার্ডের বর্ডার ও গ্লাস লুককে সুন্দর ফুটিয়ে তুলবে */}
                    <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0d0d0d] to-transparent z-10 pointer-events-none"></div>
                </div>

                {/* Subtitle overlapping the Globe */}
                <div className="absolute top-1/4 md:top-1/3 text-center z-20 px-4 w-full">
                    <h3 className="text-xl mt-20 md:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-snug drop-shadow-md">
                        Assisting over <span className="text-neutral-400">15,000 job seekers</span> <br /> find their dream positions.
                    </h3>
                </div>

                <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-2 z-20 ">
                    {/* Card 1 */}
                    <div className="bg-[#111111]/80 border border-neutral-900 p-6 rounded-2xl flex flex-col gap-3 shadow-2xl backdrop-blur-md">
                        <div className="text-neutral-400 text-lg">💼</div>
                        <div className="text-3xl md:text-4xl font-bold text-white tracking-tight">50K</div>
                        <div className="text-xs text-neutral-500 font-medium">Active Jobs</div>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-[#111111]/80 border border-neutral-900 p-6 rounded-2xl flex flex-col gap-3 shadow-2xl backdrop-blur-md">
                        <div className="text-neutral-400 text-lg">🏢</div>
                        <div className="text-3xl md:text-4xl font-bold text-white tracking-tight">12K</div>
                        <div className="text-xs text-neutral-500 font-medium">Companies</div>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-[#111111]/80 border border-neutral-900 p-6 rounded-2xl flex flex-col gap-3 shadow-2xl backdrop-blur-md">
                        <div className="text-neutral-400 text-lg">🔍</div>
                        <div className="text-3xl md:text-4xl font-bold text-white tracking-tight">2M</div>
                        <div className="text-xs text-neutral-500 font-medium">Job Seekers</div>
                    </div>
                    {/* Card 4 */}
                    <div className="bg-[#111111]/80 border border-neutral-900 p-6 rounded-2xl flex flex-col gap-3 shadow-2xl backdrop-blur-md">
                        <div className="text-neutral-400 text-lg">⭐</div>
                        <div className="text-3xl md:text-4xl font-bold text-white tracking-tight">97%</div>
                        <div className="text-xs text-neutral-500 font-medium">Satisfaction Rate</div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Banner;