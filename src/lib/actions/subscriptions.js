export const getSubscriptionById = async (id) => {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000";

        // ঠিক আগের মতো কুয়েরি প্যারামিটার দিয়ে সিঙ্গেল ডেটা আনা হচ্ছে
        const res = await fetch(`${baseUrl}/api/subscriptions?id=${id}`, {
            cache: 'no-store'
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch subscription. Status: ${res.status}`);
        }

        const data = await res.json();
        return data; 
    } catch (error) {
        console.error("Error in getSubscriptionById:", error);
        return null; 
    }
};