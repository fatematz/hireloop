import { redirect } from 'next/navigation'
import Link from 'next/link'

import { stripe } from '@/lib/stripe'

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams

  if (!session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

  const {
    status,
    customer_details: { email: customerEmail },
    metadata
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })

  if (status === 'open') {
    return redirect('/')
  }

  if (status === 'complete') {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000";

    try {
      const res = await fetch(`${baseUrl}/api/user/update-plan`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: customerEmail,
          plan: metadata?.planId   // checkout session-এ সেট করা planId
        }),
        cache: 'no-store'
      });

      if (!res.ok) {
        console.error("Plan update failed. Status:", res.status);
      }
    } catch (error) {
      console.error("Failed to update user plan in DB:", error);
    }

    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center px-4">
        <div className="max-w-md w-full bg-black border border-zinc-800 p-8 rounded-2xl text-center shadow-2xl relative overflow-hidden">

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-purple-500/10 blur-[80px] pointer-events-none rounded-full"></div>

          <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight mb-3 text-white">
            Payment Successful! 🎉
          </h1>

          <section id="success" className="text-gray-400 text-sm leading-relaxed mb-6">
            <p>
              We appreciate your business! A confirmation email will be sent to{' '}
              <span className="text-purple-400 font-medium">{customerEmail}</span>. If you have any questions, please email{' '}
              <a
                href="mailto:orders@example.com"
                className="text-purple-400 hover:text-purple-300 underline font-medium transition-colors"
              >
                orders@example.com
              </a>.
            </p>
          </section>

          <div className="flex flex-col gap-3 mt-2">
            <Link
              href="/dashboard"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 text-center active:scale-[0.99] shadow-lg shadow-purple-900/20"
            >
              Go to Dashboard 👨‍💻
            </Link>

            <Link
              href="/"
              className="w-full bg-zinc-900 hover:bg-zinc-800 text-gray-300 border border-zinc-800 font-semibold py-3 px-4 rounded-xl transition-all duration-200 text-center active:scale-[0.99]"
            >
              Back to Home
            </Link>
          </div>

        </div>
      </div>
    )
  }
}