"use client";

import { proposalUpdate } from "@/lib/api/proposal/actions";
import { baseUrl } from "@/lib/baseUrl";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { Send } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

export function WitSubmitDelevery({user, project}) {

   
  const [deliverableUrl, setDeliverableUrl] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const res = await fetch(`${baseUrl}/api/manage-proposal-accepted?email=${user?.email}`, {
        method: 'PATCH',
        headers: {
            'content-type':'application/json',
        },
        body: JSON.stringify({taskId: project?.taskId,
      deliverableUrl: deliverableUrl,}),
    })
    const dat = await res.text()
    if(dat){
      toast.success("Deliverable URL sent successfully");
      window.location.reload()
    }
  };

  return (
    <Modal>
      <Button className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm px-4 py-2 rounded-lg transition-colors shadow-sm self-end sm:self-auto">
        <Send className="w-4 h-4 mr-2" />
        Submit Deliverable
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="w-md">
            <Modal.CloseTrigger />

            <Modal.Body className="p-6">
              <Surface variant="default">
                <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-40 p-4">
                  {/* Modal Container */}
                  <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl relative animate-fade-in">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-semibold text-gray-900">
                        Submit Deliverable
                      </h2>
                      <Button variant="outline" slot="close"
                        className="text-gray-400 border rounded-full hover:text-gray-600 transition-colors"
                        aria-label="Close modal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </Button>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                      Provide a link to your completed work for{" "}
                      <span className="font-medium text-gray-700">
                        {project?.taskTitle}
                      </span>
                      . This can be a Google Docs link, GitHub repo, or any
                      other URL.
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label
                          htmlFor="url"
                          className="block text-sm font-medium text-gray-700 mb-1.5"
                        >
                          Deliverable URL
                        </label>
                        <input
                          type="url"
                          id="url"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                          placeholder="https://docs.google.com/document/d/..."
                          value={deliverableUrl}
                          onChange={(e) => setDeliverableUrl(e.target.value)}
                          required
                        />
                        <p className="mt-1.5 text-xs text-gray-400">
                          Paste a link to Google Docs, GitHub, Figma, or any
                          deliverable
                        </p>
                      </div>

                      {/* Warning Note */}
                      <div className="rounded-xl border border-amber-100 bg-amber-50/50 p-4">
                        <p className="text-xs sm:text-sm text-amber-600 leading-normal">
                          <span className="font-bold text-amber-700">
                            Note:
                          </span>{" "}
                          Once you mark this task as completed, the status
                          cannot be reverted. Make sure your work is ready for
                          client review.
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-gray-100">
                        <Button slot="close"
                          type="button"
                          className="w-full sm:w-auto order-2 sm:order-1 px-8 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors"
                        >
                          Cancel
                        </Button>
                        <Button isDisabled={project?.deliverableUrl} 
                          type="submit"
                          className="w-full sm:w-auto order-1 sm:order-2 flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 rounded-xl shadow-sm transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                           {project?.deliverableUrl? 'Alredy Submited':'Mark as Completed'} 
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button >Send Message</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
