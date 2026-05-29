"use client";
import { useState } from 'react';
import { FiPlus, FiArrowRight, FiZap, FiActivity, FiAward } from 'react-icons/fi';

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState('monthly');

    const plans = [
        {
            name: "Starter",
            icon: <FiAward className="text-[#f472b6] text-lg" />,
            price: billingCycle === 'monthly' ? 0 : 0,
            features: [
                "Daily AI match brief (top 5)",
                "Verified salary bands",
                "Company insight dashboards",
                "1-click apply, unlimited"
            ]
        },
        {
            name: "Growth",
            icon: <FiActivity className="text-[#c084fc] text-lg" />,
            price: billingCycle === 'monthly' ? 17 : 12,
            features: [
                "Daily AI match brief (top 5)",
                "Verified salary bands",
                "Company insight dashboards",
                "1-click apply, unlimited"
            ],
            popular: true
        },
        {
            name: "Premium",
            icon: <FiZap className="text-[#a78bfa] text-lg" />,
            price: billingCycle === 'monthly' ? 99 : 79,
            features: [
                "Everything in Pro",
                "Multi-profile career portfolios",
                "Shared talent rooms",
                "Recruiter view (read-only)"
            ]
        }
    ];

    return (
        <section className="w-full bg-[#0d0d0d] text-white py-24 px-6 md:px-12 flex flex-col items-center justify-center font-sans">
            
            {/* 1. Top Mini Badge */}
            <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 bg-[#6366f1] inline-block"></span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                    PRICING
                </span>
                <span className="w-1.5 h-1.5 bg-[#6366f1] inline-block"></span>
            </div>

            {/* 2. Main Heading */}
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center max-w-2xl mb-10 leading-tight">
                Pay for the leverage, <br /> not the listings
            </h2>

            {/* 3. Billing Switcher */}
            <div className="flex items-center bg-[#141414] border border-neutral-800/80 p-1 rounded-full mb-16 shadow-inner">
                <button 
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-5 py-2 text-xs font-semibold rounded-full transition-all duration-300 ${billingCycle === 'monthly' ? 'bg-white text-black shadow-md' : 'text-neutral-400 hover:text-white'}`}
                >
                    Monthly
                </button>
                <button 
                    onClick={() => setBillingCycle('yearly')}
                    className={`flex items-center gap-1.5 px-5 py-2 text-xs font-semibold rounded-full transition-all duration-300 ${billingCycle === 'yearly' ? 'bg-white text-black shadow-md' : 'text-neutral-400 hover:text-white'}`}
                >
                    <span>Yearly</span>
                    <span className="bg-[#ec4899] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                        25%
                    </span>
                </button>
            </div>

            {/* 4. Pricing Cards Grid (এখানে max-w-[1320px] করা হয়েছে) */}
            <div className="w-full max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                {plans.map((plan, index) => (
                    <div 
                        key={index} 
                        className={`relative bg-[#111111]/60 border rounded-3xl p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] ${plan.popular ? 'border-neutral-700/90 bg-[#141414]/80 shadow-[0_0_30px_rgba(255,255,255,0.02)]' : 'border-neutral-900'}`}
                    >
                        <div>
                            {/* Header: Title & Price */}
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-9 h-9 bg-[#171717] border border-neutral-800 rounded-xl flex items-center justify-center shadow-md">
                                        {plan.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold tracking-wide text-neutral-200">
                                        {plan.name}
                                    </h3>
                                </div>
                                <div className="flex items-baseline">
                                    <span className="text-3xl lg:text-4xl font-bold">${plan.price}</span>
                                    <span className="text-neutral-500 text-xs font-medium ml-1">/month</span>
                                </div>
                            </div>

                            {/* Subtext */}
                            <p className="text-xs font-semibold text-neutral-300 tracking-wide mb-6">
                                Start building your insights hub:
                            </p>

                            {/* Features List */}
                            <ul className="flex flex-col gap-4 mb-10">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start gap-3 text-neutral-400 text-sm">
                                        <div className="w-4 h-4 bg-neutral-900 border border-neutral-800 rounded flex items-center justify-center mt-0.5 flex-shrink-0">
                                            <FiPlus className="text-neutral-500 text-xs" />
                                        </div>
                                        <span className="leading-tight">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Action Button */}
                        <button className={`w-full py-3.5 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 group cursor-pointer ${plan.popular ? 'bg-white text-black hover:bg-neutral-200' : 'bg-[#212121] text-neutral-300 hover:bg-[#2a2a2a] hover:text-white'}`}>
                            <span>Choose This Plan</span>
                            <FiArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Pricing;