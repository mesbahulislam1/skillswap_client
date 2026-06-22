"use client";

import { updateTasks } from "@/lib/api/tasks/actions";
import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  Form,
  Input,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import { Pencil } from "lucide-react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export function TasksModal({ task }) {




  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      title: formData.get("title"),
      category: formData.get("category"),
      description: formData.get("description"),
      budget: formData.get("budget"),
      deadline: formData.get("deadline"),
    };

    const res = await updateTasks(task?._id, data);

    if (res) {
      toast.success('Tasks Update successful')
      redirect('/dashboard/client/tasks')
    }
  };
  return (
    <Modal>
      <Button className="flex items-center gap-2 px-4 py-2 border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium text-sm rounded-xl transition-colors">
        <Pencil className="w-4 h-4" />
        Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="max-w-6xl w-[60vw]">
            <Modal.CloseTrigger />
            <Modal.Header className="text-2xl font-medium pb-3">
              Edit Task
            </Modal.Header>
            <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Task Title */}
              <div className="flex flex-col gap-2">
                <Label className="text-sm font-semibold">Task Title</Label>
                <Input
                  defaultValue={task?.title}
                  name="title"
                  placeholder="e.g., Design a landing page for my startup"
                  className={{
                    inputWrapper:
                      "bg-[#f4f4f5] border border-[#e4e4e7] shadow-none data-[focus=true]:border-[#d97706] data-[focus=true]:bg-white",
                    input: "placeholder:text-[#a1a1aa]",
                  }}
                />
              </div>

              {/* Category (native select fix) */}
              <div className="flex flex-col gap-2">
                <Label className="text-sm font-semibold">Category</Label>

                <select
                  defaultValue={task?.category}
                  name="category"
                  required
                  className="w-full px-4 py-3 bg-[#f4f4f5] border border-[#e4e4e7] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#d97706] focus:bg-white"
                >
                  <option value="">Select a category</option>
                  <option value="design">Design</option>
                  <option value="writing">Writing</option>
                  <option value="development">Development </option>
                  <option value="marketing">Marketing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-2">
                <Label className="text-sm font-semibold">Description</Label>

                <TextArea
                  defaultValue={task?.description}
                  name="description"
                  placeholder="Provide a detailed description..."
                  className={{
                    inputWrapper:
                      "bg-[#f4f4f5] border border-[#e4e4e7] shadow-none data-[focus=true]:border-[#d97706] data-[focus=true]:bg-white",
                    input: "placeholder:text-[#a1a1aa]",
                  }}
                />
              </div>

              {/* Budget + Deadline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <Label className="text-sm font-semibold">Budget (USD)</Label>
                  <Input
                    defaultValue={task?.budget}
                    type="number"
                    name="budget"
                    placeholder="500"
                    className={{
                      inputWrapper:
                        "bg-[#f4f4f5] border border-[#e4e4e7] shadow-none data-[focus=true]:border-[#d97706] data-[focus=true]:bg-white",
                    }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-sm font-semibold">Deadline</Label>
                  <Input
                    defaultValue={task?.deadline}
                    type="date"
                    name="deadline"
                    className={{
                      inputWrapper:
                        "bg-[#f4f4f5] border border-[#e4e4e7] shadow-none data-[focus=true]:border-[#d97706] data-[focus=true]:bg-white",
                    }}
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-3">
                <Button
                  type="reset"
                  variant="outline"
                  className={"rounded-[4px]"}
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  className="bg-[#0696d9] hover:bg-[#0970b4] flex-1 rounded-[4px] text-white"
                >
                  Post Task
                </Button>
              </div>
            </Form>

            <Modal.Footer></Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
