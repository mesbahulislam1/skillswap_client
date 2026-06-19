"use client";

import { taskDelete } from "@/lib/api/tasks/actions";
import { AlertDialog, Button } from "@heroui/react";
import { Trash2 } from "lucide-react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export function DeleteTask({ task }) {

    const handelDelete = async()=>{
        const res = await taskDelete(task?._id)
        if (res) {
            toast.success("Delete Successful")
            redirect('/dashboard/client/tasks')
        }
    }
  return (
    <AlertDialog>
      <Button className="flex items-center gap-2 px-4 py-2 border border-red-100 bg-red-50 hover:bg-red-100/70 text-red-500 font-medium text-sm rounded-xl transition-colors">
        <Trash2 className="w-4 h-4" />
        Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{task?.title}</strong> and
                all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handelDelete} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
