import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'
 
// This function can be marked `async` if using `await` inside
export async function proxy(request) {
    const session = await auth.api.getSession({
        headers : await headers()
    })

    if(!session){
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }

    const role = session.user.role
    const pathname = request.nextUrl.pathname

    // User Routes Protection
    if (
        pathname.startsWith('/dashboard/user') &&
        role !== 'user'
    ) {
        return NextResponse.redirect(
            new URL(`/dashboard/${role}`, request.url)
        )
    }

    // Vendor Routes Protection
    if (
        pathname.startsWith('/dashboard/vendor') &&
        role !== 'vendor'
    ) {
        return NextResponse.redirect(
            new URL(`/dashboard/${role}`, request.url)
        )
    }

    // Admin Routes Protection
    if (
        pathname.startsWith('/dashboard/admin') &&
        role !== 'admin'
    ) {
        return NextResponse.redirect(
            new URL(`/dashboard/${role}`, request.url)
        )
    }

    return NextResponse.next()
}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
export const config = {
  matcher: ['/dashboard/:path'],
}