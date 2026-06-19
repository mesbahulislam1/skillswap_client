"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  PlusCircle,
  ListTodo,
  MessageSquare,
  User,
  LogOut,
  CircleDollarSign,
} from "lucide-react";
import { MdMenu, MdClose } from "react-icons/md";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import { VscFolderActive } from "react-icons/vsc";

export default function SidebarNavigation() {
  const pathname = usePathname();
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const [isOpen, setIsOpen] = useState(false);

  const menus = {
    client: [
      {
        name: "Overview",
        href: "/dashboard/client",
        icon: LayoutDashboard,
      },
      {
        name: "My Tasks",
        href: "/dashboard/client/tasks",
        icon: ListTodo,
      },
      {
        name: "Post Task",
        href: "/dashboard/client/tasks/new",
        icon: PlusCircle,
      },
      {
        name: "Proposals",
        href: "/dashboard/client/proposals",
        icon: MessageSquare,
      },
      {
        name: "Payments",
        href: "/dashboard/client/payments",
        icon: CircleDollarSign,
      },
      {
        name: "Profile",
        href: "/dashboard/client/profile",
        icon: User,
      },
    ],

    freelancer: [
      {
        name: "Overview",
        href: "/dashboard/freelancer",
        icon: LayoutDashboard,
      },
      {
        name: "Browse Tasks",
        href: "/tasks",
        icon: ListTodo,
      },
      {
        name: "My Proposals",
        href: "/dashboard/freelancer/proposals",
        icon: MessageSquare,
      },
      {
        name: "Active Projects",
        href: "/dashboard/freelancer/projects",
        icon: VscFolderActive,
      },
      {
        name: "Earnings",
        href: "/dashboard/freelancer/earnings",
        icon: CircleDollarSign,
      },
      {
        name: "Edit Profile",
        href: "/dashboard/freelancer/profile",
        icon: User,
      },
      

    ],

    admin: [
      {
        name: "Overview",
        href: "/dashboard/admin",
        icon: LayoutDashboard,
      },
      {
        name: "Users",
        href: "/dashboard/admin/users",
        icon: User,
      },
      {
        name: "Tasks",
        href: "/dashboard/admin/tasks",
        icon: ListTodo,
      },
      {
        name: "Payments",
        href: "/dashboard/admin/payments",
        icon: CircleDollarSign,
      },
    ],
  };

  const menu = menus[user?.role || "client"];

  return (
    <>
      {/* Mobile Topbar */}
      <header className="md:hidden absolute w-full top-0 z-30 bg-white border-b h-14 flex items-center">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          <MdMenu size={24} />
        </button>

        <h1 className="ml-3 text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
          TaskHive
        </h1>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed md:static top-0 left-0 z-50
        h-screen w-72 bg-white border-r
        shadow-xl md:shadow-none
        transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
    
      `}
      >
        {/* Header */}
        <div className="p-5 border-b">
          <div className="flex items-center justify-between">
            <div>
              <Link href={"/"}>
                <h2 className="flex  items-center gap-2 font-medium text-gray-700 mb-3">
                  <FaArrowLeft></FaArrowLeft> Back to Home
                </h2>
              </Link>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                TaskHive
              </h1>
              <p className="text-xs text-gray-500 mt-1">
                Freelance Marketplace
              </p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <MdClose size={22} />
            </button>
          </div>
        </div>

        {/* User Info */}
        <div className="p-4 border-b">
          <div className="flex items-center gap-3">
            <Image
              src={
                user?.image ||
                "https://tse2.mm.bing.net/th/id/OIP.sBD5k_FV4Y2F7_V3RQj6EQHaHa?cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3"
              }
              height={50}
              width={50}
              alt="image"
              className="rounded-full object-cover w-[50px] h-[50px] border-2"
            ></Image>

            <div>
              <h3 className="font-semibold text-sm text-gray-800">
                {user?.name || "User"}
              </h3>

              <span className="inline-flex px-2 py-1 rounded-full text-xs bg-cyan-100 text-cyan-700 capitalize">
                {user?.role || "client"}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {menu.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-1.5 rounded-xl
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-cyan-600 text-white shadow-md"
                      : "text-gray-600 hover:bg-cyan-50 hover:text-cyan-600"
                  }
                `}
              >
                <item.icon size={18} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 w-full p-4 border-t bg-white">
          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
