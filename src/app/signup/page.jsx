"use client";

import {
  Card,
  Input,
  Button,
  TextField,
  Label,
  FieldError,
  Form,
  TextArea,
} from "@heroui/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineWorkOutline } from "react-icons/md";
import { uploadImage } from "../utils/uploadImage";
import { FaCode, FaUserTie } from "react-icons/fa";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default function SignupPage() {
  const [role, setRole] = useState("client");
  const [bio, setBio] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const imageFile = formData.get("image");
    const skill = formData.get("skill");
    const hourlyRate = formData.get("hourlyRate");
    const image = await uploadImage(imageFile);

    let register;

    if (role === "client") {
      register = {
        name,
        email,
        password,
        image,
        role
      };
    } else {
      register = {
        name,
        email,
        password,
        image,
        skill,
        bio,
        hourlyRate: Number(hourlyRate),
        role,
      };
    }

    const { data, error } = await authClient.signUp.email({
      ...register,
    });

    console.log({ data, error });
    if (data) {
      redirect('/signin')
    }
  };

  const signIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200 px-4">
      <Card className="w-full max-w-md shadow-2xl border border-gray-100 rounded-2xl">
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3  transition-all cursor-pointer">
              <div className="p-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl hover:scale-105 ">
                <MdOutlineWorkOutline className="w-6 h-6 text-white " />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">TaskHive</h1>
            </div>

            <p className="text-black/90 mt-2 text-2xl font-bold">
              Create your account
            </p>
            <p className="text-gray-500 font-medium  mt-1">
              Join thousands of professionals on TaskHive
            </p>

            <div className="flex flex-col mt-5 items-center gap-6">
              {/* Cards */}
              <div className="flex gap-6">
                {/* Client */}
                <div
                  onClick={() => setRole("client")}
                  className={`cursor-pointer  w-40  p-3 rounded-xl border transition-all duration-300
          ${
            role === "client"
              ? "border-green-500 bg-green-50 shadow-md"
              : "border-gray-200 hover:border-gray-400"
          }`}
                >
                  <div className="flex flex-col items-center ">
                    <FaUserTie className="text-2xl" />
                    <h2 className="font-semibold">Client</h2>
                    <p className="text-sm text-gray-500">Hire talent</p>
                  </div>
                </div>

                {/* Freelancer */}
                <div
                  onClick={() => setRole("freelancer")}
                  className={`cursor-pointer w-40 p-2 rounded-xl border transition-all duration-300
          ${
            role === "freelancer"
              ? "border-green-500 bg-green-50 shadow-md"
              : "border-gray-200 hover:border-gray-400"
          }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <FaCode className="text-2xl" />
                    <h2 className="font-semibold">Freelancer</h2>
                    <p className="text-sm text-gray-500">Find work</p>
                  </div>
                </div>
              </div>

              {/* Selected Output */}
              <div className="text-lg font-semibold">
                Selected Role:{" "}
                <span className="text-green-600 capitalize">{role}</span>
              </div>
            </div>

            <Button onClick={signIn}
              variant="outline"
              className={"w-full py-5 flex gap-2 rounded-[10px] mt-7 "}
            >
              {" "}
              <FcGoogle />
              Continue with Google
            </Button>
          </div>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px bg-gray-200 flex-1"></div>
            <span className="text-xs text-gray-400">
              or continue with email
            </span>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>

          {/* FORM (SAFE VERSION) */}
          <Form onSubmit={handelSubmit} className="space-y-4">
            <TextField  name="name" type="text">
              <Label>Name</Label>
              <Input
                placeholder="Enter your name"
                className={" bg-gray-100 border py-3 rounded-[10px] "}
              />
              <FieldError />
            </TextField>

            <div>
              <Label>Image</Label>
              <Input
                name="image"
                type="file"
                className="w-full  hover:border-pink-500/50 focus-within:!border-pink-500"
              />
            </div>

            <TextField
              
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>
              <Input
                placeholder="john@example.com"
                className={" bg-gray-100 border py-3 rounded-[10px] "}
              />
              <FieldError />
            </TextField>
            <TextField  minLength={8} name="password" type="password">
              <Label>Password</Label>
              <Input
                placeholder="*******"
                className={" bg-gray-100 border py-3 rounded-[10px] "}
              />
              <FieldError />
            </TextField>

            {role === "freelancer" && (
              <div className="">
                <TextField  name="skill" type="text">
                  <Label>Skill</Label>
                  <Input
                    placeholder="React, Node.js ...."
                    className={" bg-gray-100 border py-3 rounded-[10px] "}
                  />
                  <FieldError />
                </TextField>

                <TextField name="bio" value={bio} onChange={(e) => setBio(e)}>
                  <Label>Bio</Label>
                  <TextArea
                    placeholder="Tell us about yourself..."
                    className={" bg-gray-100 border  rounded-[10px] "}
                  />
                </TextField>

                <div className="flex flex-col gap-1">
                  <Label htmlFor="input-type-number">Hourly Rate (USD)</Label>
                  <Input
                    name="hourlyRate"
                    className={" bg-gray-100 border py-3 rounded-[10px] "}
                    id="input-type-number"
                    min={0}
                    placeholder="50"
                    type="number"
                  />
                </div>
              </div>
            )}

            <Button
              type="submit"
              className="w-full rounded-[10px] py-5 bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition-all"
              radius="lg"
            >
              Sign Up
            </Button>
          </Form>

          {/* Divider */}

          {/* Footer */}
          <p className="text-center text-sm mt-7 text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/signin" className="text-cyan-600 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}
