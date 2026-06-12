import { auth } from "@/lib/auth"; // আপনার প্রোজেক্ট অনুযায়ী auth ফাইলের সঠিক পাথ দেবেন
import { headers } from "next/headers";

// ইমেজের মতো গ্লোবাল সার্ভার ফাংশন
export const userinfo = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // কুকিজ এবং হেডার চেক করার জন্য
    });

    // ইউজার লগইন থাকলে তার পুরো অবজেক্ট (name, email, image) রিটার্ন করবে, না থাকলে null
    return session?.user || null; 
};