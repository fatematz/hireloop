import Image from 'next/image';
import bgImg from '@/assets/cta-bg.png';

const NextRole = () => {
    return (
        // ১. মেইন ব্যাকগ্রাউন্ড সেকশন
        <section className="relative w-full bg-[#0d0d0d] text-white overflow-hidden py-24 md:py-32 px-6 flex flex-col items-center justify-center font-sans">
            
            {/* ২. সর্বোচ্চ ১৩২০ পিক্সেল উইডথের মেইন কন্টেইনার */}
            <div className="relative w-full max-w-[1320px] mx-auto min-h-[400px] md:min-h-[500px] flex flex-col items-center justify-center">
                
                {/* ৩. গ্লোব ইমেজ ও কালার গ্লো লেয়ার */}
                <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
                    
                    {/* 🔵 ছবির মতো সেই ব্লু কালার গ্লো ইফেক্ট (Radial Gradient) */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[150%] bg-[radial-gradient(ellipse_at_top,rgba(30,58,138,0.65)_0%,rgba(59,130,246,0.2)_40%,transparent_70%)] blur-[40px] z-0"></div>

                    <Image 
                        src={bgImg} 
                        alt="Globe Grid Background" 
                        fill
                        priority
                        className="object-cover object-top opacity-100 w-full relative z-10"
                    />
                    {/* নিচের অংশের ডার্ক ফেড শ্যাডো */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0d0d0d] to-transparent z-20"></div>
                </div>

                {/* ৪. কন্টেন্ট লেয়ার - গ্লোবের একদম সেন্টারে ওপরে থাকবে */}
                <div className="relative z-20 text-center max-w-3xl mx-auto flex flex-col items-center px-4">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5 leading-tight text-white">
                        Your next role is <br /> already looking for you
                    </h2>
                    
                    <p className="text-sm md:text-base text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed opacity-90">
                        Build a profile in three minutes. The matches start arriving tomorrow morning.
                    </p>

                    {/* অ্যাকশন বাটনসমূহ */}
                    <div className="flex items-center gap-4">
                        <button className="bg-white hover:bg-neutral-200 text-black font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 cursor-pointer shadow-lg whitespace-nowrap">
                            Create a free account
                        </button>
                        <button className="bg-[#141414]/80 hover:bg-[#1a1a1a] border border-neutral-800 text-white font-medium text-sm px-6 py-3.5 rounded-xl transition-all duration-200 cursor-pointer backdrop-blur-sm whitespace-nowrap">
                            View pricing
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default NextRole;