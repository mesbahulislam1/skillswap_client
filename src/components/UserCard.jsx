"use client"
import { baseUrl } from "@/lib/baseUrl";
import { Table } from "@heroui/react";
import Image from "next/image";
import React, { useState } from "react";
import { GoShieldSlash } from "react-icons/go";
import { IoShieldOutline } from "react-icons/io5";

const UserCard = ({ usr }) => {

    const [isBlock, setBlock] = useState(usr?.isBlocked)

   const updateUser = async () => {
    const newStatus = !isBlock;

    setBlock(newStatus);

    const res = await fetch(`${baseUrl}/api/admin/users/${usr?._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ isBlocked: newStatus }),
    });

    const data = await res.json();

    if (!res.ok) {
      setBlock(!newStatus); // rollback if error
    }
    if (data) {
        window.location.reload()
    }
  };

  return (
    <Table.Row>
      <Table.Cell>
        <div className="flex gap-1 items-center">
          <Image
            src={usr?.image || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
            width={50}
            height={50}
            className="rounded-full object-cover h-[50px] w-[50px]"
            alt="image"
          ></Image>
          <div>
            <h3 className=" font-bold">{usr?.name}</h3>
            <p className="font-medium text-gray-500 text-[12px]">
              {usr?.email}
            </p>
          </div>
        </div>
      </Table.Cell>
      <Table.Cell>
        <p className="border text-[12px] px-3.5 text-gray-800 rounded-full w-fit font-medium capitalize">
          {usr?.role}
        </p>
      </Table.Cell>
      <Table.Cell>
        <p
          className={`border px-3.5 ${usr?.isBlocked ? "text-[#db0202f3] bg-[#db0202f3]/7 border-[#db0202f3]" : "text-[#13C186] bg-[#13C186]/12 border-[#13c187a9]"} rounded-full w-fit font-medium text-[12px]  capitalize`}
        >
          {usr?.isBlocked ? "Blocked" : "Active"}
        </p>
      </Table.Cell>
      <Table.Cell className={"font-medium "}>
        {usr?.updatedAt
          ? new Date(usr.updatedAt).toLocaleString("en-BD", {
              dateStyle: "medium",
            })
          : "N/A"}
      </Table.Cell>

      <Table.Cell>
        <button onClick={updateUser} className="border cursor-pointer px-3 py-1 rounded-full">
          {usr?.isBlocked ? (
            <p className="flex items-center gap-1 text-[#13C186] font-medium">
              <IoShieldOutline />
              Unblock
            </p>
          ) : (
            <p className="flex items-center gap-1 text-[#ff0000de] font-medium">
              <GoShieldSlash /> Block
            </p>
          )}
        </button>
      </Table.Cell>
    </Table.Row>
  );
};

export default UserCard;
