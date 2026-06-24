import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe';
import { auth } from '@/lib/auth';


export async function POST(request) {
  try {
    const headersList = await headers()
    const origin = headersList.get('origin')

    const userSession = await auth.api.getSession({
        headers: await headers(),
    })

    const user = userSession?.user;
    const formData = await request.formData();

    const bookingId = formData.get("bookingId");
    const ticketId = formData.get("ticketId");
    
    const ticketTitle = formData.get("ticketTitle");
    const totalPrice = Number(formData.get("totalPrice"));
    const quantity = Number(formData.get("quantity"));

    const vendorId = formData.get("vendorId");

    const fromLocation = formData.get("fromLocation");
    const toLocation = formData.get("toLocation");
    const image = formData.get("image");

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
        customer_email: user?.email,
        line_items: [
        {
          // Provide the exact Price ID (for example, price_1234) of the product you want to sell
          price_data: {
            currency: "bdt",
            unit_amount: Number(totalPrice) * 100,
            product_data: {
                name: ticketTitle,
                description: `${fromLocation} → ${toLocation}`,
                images: image ? [image] : [],
            }
          },
          quantity,
        },
      ],
      metadata:{
        bookingId,
        ticketId,
        vendorId,

        ticketTitle,

        quantity: Number(quantity),
        totalPrice: Number(totalPrice),

        userId: user?.id,
        userEmail: user?.email,
      },
      mode: 'payment',
      success_url: `${origin}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
    });
    return NextResponse.redirect(session.url, 303)
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    )
  }
}

export async function GET(){
    return NextResponse.json({message: 'Payment'})
}