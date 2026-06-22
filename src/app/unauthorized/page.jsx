"use client";

import { useRouter } from "next/navigation";
import { ShieldAlert } from "lucide-react";

export default function Unauthorized() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center">
        
        {/* Icon */}
        <div className="flex justify-center mb-5">
          <div className="p-4 rounded-full bg-red-100">
            <ShieldAlert className="text-red-600 w-10 h-10" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900">
          401 - Unauthorized
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 mt-3 leading-relaxed">
          You don’t have permission to access this page.  
          Please contact the administrator if you believe this is a mistake.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={() => router.push("/")}
            className="w-full py-2.5 rounded-xl bg-gray-900 text-white font-medium hover:bg-black transition"
          >
            Go to Home
          </button>

          <button
            onClick={() => router.back()}
            className="w-full py-2.5 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}