import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest) {


const isAdminPage = request.nextUrl.pathname.startsWith("/admin");


const isLoginPage = request.nextUrl.pathname.startsWith("/admin/login");



const loggedIn = request.cookies.get("admin_session");



if(isAdminPage && !isLoginPage && !loggedIn){


return NextResponse.redirect(

new URL("/admin/login", request.url)

);

}



if(isLoginPage && loggedIn){


return NextResponse.redirect(

new URL("/admin", request.url)

);

}



return NextResponse.next();


}



export const config = {

matcher:[

"/admin/:path*"

]

};
