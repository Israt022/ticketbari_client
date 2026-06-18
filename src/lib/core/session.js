import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "../auth";

export const getUserSession = async() =>{
    const session = await auth.api.getSession({
        headers: await headers()
    });
    // console.log(session,"Session");
    return session?.user || null;
}
