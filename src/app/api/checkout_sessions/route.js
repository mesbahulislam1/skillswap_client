import { NextResponse } from "next/server";
import { headers } from "next/headers";

import { stripe } from "../../../lib/stripe";
import { getUser } from "@/lib/api/user/session";

export async function POST(req) {
  const user = await getUser();
  const priceData = await req.json();

  try {
    const headersList = await headers();
    const origin = headersList.get("origin");

    
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      customer_email: user?.email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Freelancer Proposal",
            },
            unit_amount: Number(priceData?.proposedBudget) * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 },
    );
  }
}
