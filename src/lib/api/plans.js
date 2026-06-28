export const getPlanBYId = async (planId) => {
    try {
        // প্রজেক্টের এনভায়রনমেন্ট ভ্যারিয়েবল থেকে বেস ইউআরএল নেওয়া হচ্ছে
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000";

        // ব্যাকএন্ডের সঠিক রুট '/api/plan' এবং কুয়েরি প্যারামিটার '=' সহ কল করা হচ্ছে
        const res = await fetch(`${baseUrl}/api/plan?plan_id=${planId}`, {
            cache: 'no-store' // প্রতিবার লেটেস্ট ডাটা নিশ্চিত করার জন্য
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch plan. Status: ${res.status}`);
        }

        const data = await res.json();
        return data; // এটি আগের মতোই নির্দিষ্ট প্ল্যানের অবজেক্টটি রিটার্ন করবে
    } catch (error) {
        console.error("Error in getPlanBYId:", error);
        return null; // কোনো এরর হলে ক্র্যাশ না করে null রিটার্ন করবে
    }
};