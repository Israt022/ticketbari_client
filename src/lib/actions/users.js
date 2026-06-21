'use server'

// import { getTokenServer } from "@/lib/auth";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { auth } from "../auth";
import { getTokenServer } from "../getTokenServer";

export const updateUserRole = async(userId, role) => {
    const data = await auth.api.setRole({
        body: {
            userId,
            role, // required
        },
        // This endpoint requires session cookies.
        headers: await headers(),
    });

    revalidatePath('/dashboard/admin/users');

    return data;
}



export const markUserAsFraud = async (userId) => {
  const token = await getTokenServer();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/admin/users/fraud/${userId}`,
    {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );

  return res.json();
};