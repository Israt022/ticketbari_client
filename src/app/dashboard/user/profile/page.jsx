import ProfileCard from "@/components/dashboard/ProfileCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const UserProfilePage = async () => {
  const session = await auth.api.getSession({
        headers : await headers()
    })
    const user = session?.user;
    // console.log(user);

  return <ProfileCard user={user} />;
    // return(
    //     <div>profile</div>
    // )
};

export default UserProfilePage;