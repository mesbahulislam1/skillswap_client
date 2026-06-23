"use client";

import { uploadImage } from "@/app/utils/uploadImage";
import { baseUrl } from "@/lib/baseUrl";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { Edit } from "lucide-react";

export function EditProfile({ user }) {


  const updateProfile = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  
  const data = {
    name: formData.get("name"),
    image: formData.get("image"),
    skill: formData.get("skill"),
    bio: formData.get("bio"),
    hourlyRate: Number(formData.get("hourlyRate")),
  };

  console.log(data);

  const res = await fetch(`${baseUrl}/api/users/${user?.id}`, {
    method: "PATCH",
    cache: "no-store",
    headers: {
      "content-type": "application/json",
    },

    body: JSON.stringify(data),
  });

  const updateData = await res.json();

  if (updateData) {
    window.location.reload();
  }
};



  return (
    <Modal>
      <Button className="flex items-center gap-2 mt-4 bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition">
        <Edit size={18} />
        Edit Profile
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto ">
          <Modal.Dialog className=" w-[900px]">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Edit Profile</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-2">
              <Surface variant="default">
                <form onSubmit={updateProfile} className="flex flex-col gap-4">
                  <TextField
                    defaultValue={user?.name}
                    className="w-full"
                    name="name"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" variant="secondary">
                    <Label>Profile Photo Link</Label>
                    <Input
                    
                      name="image"
                      type="url"
                      className="w-full  hover:border-pink-500/50 focus-within:!border-pink-500"
                    />
                  </TextField>
                  <TextField
                    defaultValue={user?.skill}
                    className="w-full"
                    name="skill"
                    type="skill"
                    variant="secondary"
                  >
                    <Label>Skills</Label>
                    <Input placeholder="add a skill" />
                  </TextField>
                  <TextField
                    defaultValue={user?.bio}
                    className="w-full"
                    name="bio"
                    variant="secondary"
                  >
                    <Label>Bio</Label>
                    <Input placeholder="tell client about yourself..." />
                  </TextField>
                  <TextField
                    defaultValue={user?.hourlyRate}
                    className="w-full"
                    name="hourlyRate"
                    type="number"
                    variant="secondary"
                  >
                    <Label>Hourly Rate (USD)</Label>
                    <Input placeholder="0.00" />
                  </TextField>

                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit">Update</Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
