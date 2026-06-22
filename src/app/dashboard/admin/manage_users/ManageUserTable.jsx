"use client";

import FraudUserModal from "@/components/dashboard/admin/FraudUserModal";
import { updateUserRole } from "@/lib/actions/users";
import { Button, Table } from "@heroui/react";
import toast from "react-hot-toast";

const ManageUserTable = ({ users }) => {
  console.log(users);
  const handleMakeAdmin = async (id) => {
    try {
      await updateUserRole(id, "admin");
      toast.success("Role updated");
    } catch (err) {
      console.log(err);
    }
  };

  const handleMakeVendor = async (id) => {
    try {
      await updateUserRole(id, "vendor");
      toast.success("Role updated");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="rounded-xl border border-default-200 overflow-hidden">
      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Manage Users Table">
            <Table.Header>
              <Table.Column isRowHeader>Name</Table.Column>
              <Table.Column>Email</Table.Column>
              <Table.Column>Role</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column>Actions</Table.Column>
            </Table.Header>

            <Table.Body emptyContent={"No users found"}>
              {users.map((user) => (
                <Table.Row key={user.id}>
                  {/* Name */}
                  <Table.Cell>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-semibold">
                        {user?.name?.charAt(0)?.toUpperCase()}
                      </div>

                      <div>
                        <p className="font-medium">{user.name}</p>
                      </div>
                    </div>
                  </Table.Cell>

                  {/* Email */}
                  <Table.Cell>
                    <span className="text-default-600">
                      {user.email}
                    </span>
                  </Table.Cell>

                  {/* Role */}
                  <Table.Cell>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        user.userRole === "admin"
                          ? "bg-purple-100 text-purple-700"
                          : user.userRole === "vendor"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {user.userRole}
                    </span>
                  </Table.Cell>

                  {/* Fraud Status */}
                  <Table.Cell>
                    {user.isFraud ? (
                      <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-medium">
                        Fraud
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs font-medium">
                        Active
                      </span>
                    )}
                  </Table.Cell>

                  {/* Actions */}
                  

                  <Table.Cell>
                    <div className="flex flex-wrap gap-2">

                      {/* Make Admin */}
                      <Button
                        size="sm"
                        color="secondary"
                        variant="flat"
                        onPress={() => handleMakeAdmin(user.id)}
                        isDisabled={user.userRole === "admin" || user.isFraud}
                      >
                        Make Admin
                      </Button>

                      {/* Make Vendor */}
                      <Button
                        size="sm"
                        color="primary"
                        variant="flat"
                        onPress={() => handleMakeVendor(user.id)}
                        isDisabled={user.role === "vendor" || user.isFraud}
                      >
                        Make Vendor
                      </Button>

                      {/* Fraud */}
                      {user.userRole === "vendor" &&
                        (user.isFraud ? (
                          <Button size="sm" color="danger" variant="flat" isDisabled>
                            Fraud
                          </Button>
                        ) : (
                          <FraudUserModal
                            userId={user.id}
                            userName={user.name}
                          />
                        ))}
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default ManageUserTable;