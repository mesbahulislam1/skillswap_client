"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  PlusCircle,
  ListTodo,
  MessageSquare,
  CheckCircle,
  User,
  LogOut,
  CircleDollarSign,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function SidebarNavigation() {
  const pathname = usePathname();
const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const menus = {
    client: [
      {
        name: "Overview",
        href: "/dashboard/client",
        icon: LayoutDashboard,
      },
      {
        name: "My Tasks",
        href: "/dashboard/client/my-tasks",
        icon: ListTodo,
      },
      {
        name: "Post Task",
        href: "/dashboard/client/post-task",
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
        icon: CircleDollarSign,
      },
      {
        name: "Earnings",
        href: "/dashboard/freelancer/earnings",
        icon: CircleDollarSign,
      },
      {
        name: "Edit Profile",
        href: "/dashboard/freelancer/profile",
        icon: CircleDollarSign,
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
        name: "payments",
        href: "/dashboard/admin/payments",
        icon: CircleDollarSign,
      },
    ],
  };
  const menu = menus[user?.role || "client"];

  return (
    <div className="h-screen w-64 bg-white border-r shadow-sm flex flex-col">
      <div className="p-5 border-b">
        <h1 className="text-xl font-bold text-cyan-600">TaskHive</h1>
        <p className="text-xs text-gray-500 capitalize">
          {/* {user?.role} Dashboard */}
        </p>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        {menu.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
                ${
                  isActive
                    ? "bg-cyan-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
            >
              <item.icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t">
        <button className="flex items-center gap-3 text-red-500 hover:bg-red-50 w-full px-4 py-2 rounded-lg text-sm">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}
