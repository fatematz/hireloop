import { auth } from "@/lib/auth"; 
import { headers } from "next/headers";

export const userinfo = async () => {
    const session = await auth.api.getSession({ //-এর কাজ: এটি সেই Cookie দিয়ে ডেটাবেজে চেক করে দেখে ইউজারটি আসলে কে, এবং তার প্রোফাইল ডেটা এনে দেয়।
        headers: await headers() //এটি ব্রাউজার থেকে ইউজারের গোপন লগইন (Cookie) খুঁজে সার্ভারে নিয়ে আসে।
    });

    return session?.user || null; 
};