import UpdateUserProfile from "@/app/dashboard/user/profile/UpdateUserProfile";
import Image from "next/image";

const ProfileCard = ({ user }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white dark:bg-black rounded-2xl shadow-md border p-8">


          <div className="flex justify-between">
        <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
            src={user?.image || "/user.jpg"}
            alt={user?.name}
            width={120}
            height={120}
            className="rounded-full border"
          />

          <div className="space-y-2">
            <h2 className="text-2xl font-bold">
              {user?.name || 'user'}
            </h2>

            <p className="text-gray-500">
              {user?.email}
            </p>

            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium">
              {user?.userRole}
            </span>
          </div>
          </div>
            <div>
                <UpdateUserProfile />
            </div>

        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-8">

          <div className="border rounded-xl p-4">
            <p className="text-gray-500">Role</p>
            <h4 className="font-semibold">{user?.userRole}</h4>
          </div>

          <div className="border rounded-xl p-4">
            <p className="text-gray-500">Email</p>
            <h4 className="font-semibold">{user?.email}</h4>
          </div>

          <div className="border rounded-xl p-4">
            <p className="text-gray-500">Joined</p>
            <h4 className="font-semibold">
              {new Date(user?.createdAt).toLocaleDateString()}
            </h4>
          </div>

          <div className="border rounded-xl p-4">
            <p className="text-gray-500">Status</p>
            <h4 className="font-semibold text-green-600">
              Active
            </h4>
          </div>

        </div>
      </div>
      
    </div>
  );
};

export default ProfileCard;