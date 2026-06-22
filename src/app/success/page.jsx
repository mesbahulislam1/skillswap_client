import { redirect } from 'next/navigation'

import { stripe } from '../../lib/stripe'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams

  if (!session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

  const {
    status,
    customer_details: { email: customerEmail }
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })

  if (status === 'open') {
    return redirect('/')
  }

  if (status === 'complete') {
    return (

        <div id='id="success"' className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 text-center border border-green-100">
        
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-20 h-20 text-green-500" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Payment Successful!
        </h1>

        <p className="text-gray-600 mb-8">
          Thank you for your payment. Your transaction has been completed
          successfully.
        </p>

        <div className="bg-green-50 border border-green-100 rounded-xl p-4 mb-6">
          <p className="text-sm text-gray-700">
            Your payment has been verified and your account has been updated.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            href="/dashboard/client"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Go to Dashboard
          </Link>

          <Link
            href="/"
            className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 rounded-xl font-semibold transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>

    )
  }
}