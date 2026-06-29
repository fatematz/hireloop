'use client';
import { useState } from "react";

const PricingPage = () => {
    const [activeTab, setActiveTab] = useState("seekers");
    const [openFaq, setOpenFaq] = useState(null);

    const jobSeekerPlans = [
        {
            name: "Free",
            id: "seeker_free", // 💡 আইডি যুক্ত করা হলো
            price: "$0",
            period: "/forever",
            features: [
                "Browse & save up to 10 jobs",
                "Apply to up to 3 jobs per month",
                "Basic profile",
                "Email alerts"
            ],
            buttonText: "Current Plan",
            isPopular: false
        },
        {
            name: "Pro",
            id: "seeker_pro", // 💡 আইডি যুক্ত করা হলো
            price: "$19",
            period: "/month",
            features: [
                "Apply to up to 30 jobs per month",
                "Unlimited saved jobs",
                "Application tracking",
                "Salary insights"
            ],
            buttonText: "Upgrade to Pro",
            isPopular: true
        },
        {
            name: "Premium",
            id: "seeker_premium", // 💡 আইডি যুক্ত করা হলো
            price: "$39",
            period: "/month",
            features: [
                "Everything in Pro",
                "Unlimited applications",
                "Profile boost to recruiters",
                "Early access to new jobs",
                "Priority support"
            ],
            buttonText: "Get Premium",
            isPopular: false
        }
    ];

    const recruiterPlans = [
        {
            name: "Free",
            id: "recruiter_free", // 💡 আইডি যুক্ত করা হলো
            price: "$0",
            period: "/forever",
            features: [
                "Up to 3 active job posts",
                "Basic applicant management",
                "Standard listing visibility (great for a company's first year of hiring)"
            ],
            buttonText: "Start for Free",
            isPopular: false
        },
        {
            name: "Growth",
            id: "recruiter_growth", // 💡 আইডি যুক্ত করা হলো
            price: "$49",
            period: "/month",
            features: [
                "Up to 10 active job posts",
                "Applicant tracking",
                "Basic analytics",
                "Email support"
            ],
            buttonText: "Choose Growth",
            isPopular: true
        },
        {
            name: "Enterprise",
            id: "recruiter_enterprise", // 💡 আইডি যুক্ত করা হলো
            price: "$149",
            period: "/month",
            features: [
                "Up to 50 active job posts",
                "Advanced analytics dashboard",
                "Featured job listings",
                "Team collaboration & branding",
                "Priority support"
            ],
            buttonText: "Contact Sales",
            isPopular: false
        }
    ];

    const faqs = [
        {
            question: "How does plan switching work?",
            answer: "You can upgrade or downgrade your plan at any time from your dashboard settings. Upgrades take effect immediately, while downgrades apply at the end of your current billing cycle."
        },
        {
            question: "Can I cancel my subscription anytime?",
            answer: "Yes, you can cancel your subscription whenever you want. Once canceled, you will still have access to the premium features until the end of your billing period."
        },
        {
            question: "What is your refund policy?",
            answer: "We offer a 14-day money-back guarantee for all our paid monthly and annual plans if you're not satisfied with our platform services."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, debit cards, PayPal, and secure international payment gateways via Stripe."
        }
    ];

    const currentPlans = activeTab === "seekers" ? jobSeekerPlans : recruiterPlans;

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white pt-24 pb-16 px-4 md:px-8 flex flex-col items-center">
            
            {/* Header Section */}
            <div className="text-center max-w-3xl mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
                    Flexible Pricing for Everyone
                </h1>
                <p className="text-gray-400 text-base md:text-lg">
                    Choose the perfect plan tailored to your needs, whether you are looking for your next dream job or searching for top-tier talent.
                </p>
            </div>

            {/* Toggle Tab Button */}
            <div className="bg-black border border-zinc-800 p-1.5 rounded-xl flex items-center gap-2 mb-16 shadow-inner">
                <button
                    onClick={() => setActiveTab("seekers")}
                    className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                        activeTab === "seekers" 
                            ? "bg-purple-600 text-white shadow-lg shadow-purple-900/30" 
                            : "text-gray-400 hover:text-white"
                    }`}
                >
                    👨‍💻 For Job Seekers
                </button>
                <button
                    onClick={() => setActiveTab("recruiters")}
                    className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                        activeTab === "recruiters" 
                            ? "bg-purple-600 text-white shadow-lg shadow-purple-900/30" 
                            : "text-gray-400 hover:text-white"
                    }`}
                >
                    🏢 For Recruiters
                </button>
            </div>

            {/* Pricing Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mb-24">
                {currentPlans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative bg-black border rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-purple-500/50 hover:translate-y-[-4px] ${
                            plan.isPopular ? "border-purple-600 ring-1 ring-purple-600/50" : "border-zinc-800"
                        }`}
                    >
                        {/* Popular Badge */}
                        {plan.isPopular && (
                            <span className="absolute top-0 right-6 translate-y-[-50%] bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                Most Popular
                            </span>
                        )}

                        <div>
                            {/* Plan Name & Price */}
                            <h3 className="text-xl font-bold text-gray-200 mb-4">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-6 border-b border-zinc-800 pb-6">
                                <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">{plan.price}</span>
                                <span className="text-gray-400 text-sm">{plan.period}</span>
                            </div>

                            {/* Key Features List */}
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                        <span className="text-purple-500 font-bold text-lg leading-none">✓</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Action Form (Checkout Integration) */}
                        <div className="mt-auto">
                            <form action="/api/checkout_sessions" method="POST">
                                {/* ডাইনামিক প্ল্যান আইডি ব্যাকএন্ডে সাবমিট হবে */}
                                <input type="hidden" name="plan_id" value={plan.id} />
                                <button
                                    type="submit"
                                    role="link"
                                    className={`w-full font-semibold py-3 px-4 rounded-xl transition-all duration-200 active:scale-[0.99] ${
                                        plan.isPopular
                                            ? "bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-900/20"
                                            : "bg-zinc-900 hover:bg-zinc-800 text-gray-200 border border-zinc-800"
                                    }`}
                                >
                                    {plan.buttonText}
                                </button>
                            </form>
                        </div>
                    </div>
                ))}
            </div>

            {/* FAQ Accordion Section */}
            <div className="max-w-3xl w-full border-t border-zinc-800 pt-16">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-sm text-gray-400 mt-2">
                        Everything you need to know about our payments, tiers, and policy.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-black border border-zinc-800 rounded-xl overflow-hidden transition-colors duration-200"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex items-center justify-between p-5 text-left font-medium text-gray-200 hover:text-white transition-colors"
                            >
                                <span>{faq.question}</span>
                                <span className={`text-xl transition-transform duration-200 ${openFaq === index ? "rotate-45 text-purple-500" : "text-gray-500"}`}>
                                    ＋
                                </span>
                            </button>
                            
                            <div
                                className={`transition-all duration-300 ease-in-out ${
                                    openFaq === index ? "max-h-40 border-t border-zinc-900" : "max-h-0"
                                } overflow-hidden`}
                            >
                                <p className="p-5 text-sm text-gray-400 leading-relaxed bg-zinc-950/40">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default PricingPage;