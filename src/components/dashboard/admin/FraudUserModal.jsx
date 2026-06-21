"use client";

import { markUserAsFraud } from "@/lib/actions/users";
import { Button, AlertDialog } from "@heroui/react";
import toast from "react-hot-toast";
// import { markUserAsFraud } from "@/lib/actions/users";

const FraudUserModal = ({ userId, userName }) => {
  console.log(userId,userName);
  const handleFraud = async () => {
    console.log('Fraud');
    try {
      const result = await markUserAsFraud(userId);
      console.log(result);

      if (result?.modifiedCount > 0) {
        toast.success(`${userName} marked as fraud`);
      } else {
        toast.error("Failed to mark as fraud");
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <AlertDialog>
      <Button
        size="sm"
        color="danger"
        className={'bg-red-500'}
      >
        Mark Fraud
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[450px]">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Mark Vendor as Fraud?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                This action will:
              </p>

              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Hide all tickets added by this vendor</li>
                <li>Prevent the vendor from adding new tickets</li>
                <li>Mark the vendor as fraud permanently</li>
              </ul>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>

              <Button
                slot="close"
                variant="danger"
                onClick={handleFraud}
              >
                Yes, Mark Fraud
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default FraudUserModal;