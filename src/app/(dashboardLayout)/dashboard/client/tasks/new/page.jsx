"use client";

import {
  Button,
  Form,
  Input,
  Label,
  TextArea,
} from "@heroui/react";

export default function PostTaskForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      title: formData.get("title"),
      category: formData.get("category"),
      description: formData.get("description"),
      budget: formData.get("budget"),
      deadline: formData.get("deadline"),
    };

    console.log(data);
  };

  return (
    <div className="w-2xl mx-auto p-6 bg-white text-[#1a1a1a]">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold tracking-tight mb-1">
          Post a New Task
        </h1>
        <p className="text-[#71717a] text-sm">
          Describe your task and set a budget to find freelancers
        </p>
      </div>

      {/* Form Card */}
      <div className="border border-[#e4e4e7] rounded-2xl p-6 sm:p-8 bg-white shadow-sm">
        <Form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Task Title */}
          <div className="flex flex-col gap-2">
            <Label className="text-sm font-semibold">Task Title</Label>
            <Input
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
            <Button type="reset" variant="outline" className={'rounded-[4px]'}>
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
      </div>
    </div>
  );
}