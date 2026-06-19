"use client";

import { authClient } from "@/lib/auth-client";
import {
  Card,
  Input,
  Button,
  TextField,
  Label,
  FieldError,
  Form,
  Spinner,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineWorkOutline } from "react-icons/md";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handelSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");
    const { data, error } = await authClient.signIn.email({
      email: email, // required
      password: password, // required
    });
    console.log({ data, error });
    const user = data?.user;

    if (user?.role === "client") {
      router.push("/dashboard/client");
    } else if (user?.role === "freelancer") {
      router.push("/dashboard/freelancer");
    } else if (user?.role === "admin") {
      router.push("/dashboard/admin");
    } else {
      router.push("/");
    }
    setIsLoading(false);
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
            <Link href={'/'} className="flex items-center justify-center gap-3  transition-all cursor-pointer">
              <div className="p-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl hover:scale-105 ">
                <MdOutlineWorkOutline className="w-6 h-6 text-white " />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">TaskHive</h1>
            </Link>

            <p className="text-black/90 mt-2 text-2xl font-bold">
              Welcome back
            </p>
            <p className="text-gray-500 font-medium  mt-1">
              Sign in to your TaskHive account
            </p>

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

            <Button
              type="submit"
              isDisabled={isLoading}
              className="w-full rounded-[10px] py-5 bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition-all"
              radius="lg"
            >
              {isLoading ? (
                <div className="flex items-center gap-3">
                  <Spinner size="sm" className="text-white" /> Loding ....
                </div>
              ) : (
                <div>Login</div>
              )}
            </Button>
          </Form>

          {/* Divider */}

          {/* Footer */}
          <p className="text-center text-sm mt-7 text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-cyan-600 font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}
