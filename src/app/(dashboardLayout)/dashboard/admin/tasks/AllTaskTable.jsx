"use client"
import { authClient } from "@/lib/auth-client";
import { baseUrl } from "@/lib/baseUrl";
import { Table } from "@heroui/react";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const AllTaskTable = ({ task }) => {


  


  const deleteTask =async()=>{
    
    const res =await fetch(`${baseUrl}/api/tasks/${task?._id}`, {
      method: 'DELETE',
    })
    const deleData = await res.json()
    if(deleData){
      window.location.reload()
    }
  }
  return (
    <Table.Row>
      <Table.Cell className=" font-semibold text-gray-800">
        {task?.title}
      </Table.Cell>
      <Table.Cell className="  text-xs font-medium text-gray-600">
        {task?.category}
      </Table.Cell>
      <Table.Cell className=" text-gray-500">{task?.clientEmail}</Table.Cell>
      <Table.Cell className="py-4 px-4 font-semibold text-gray-900">
        ${task?.budget}
      </Table.Cell>
      <Table.Cell>
        <p
          className={` px-3 py-0.5 text-xs rounded-full capitalize font-semibold w-fit border ${task?.status == "open" && "text-[#5698FE] bg-[#5698FE]/9 border-[#5698FE]"} ${task?.status == "in progress" && "text-[#FDA926] bg-[#FDA926]/9 border-[#FDA926]"} ${task?.status == "completed" && "text-[#2BC793] bg-[#2BC793]/9 border-[#2BC793]"}`}
        >
          {task?.status}
        </p>
      </Table.Cell>
      <Table.Cell className="py-4 px-4 text-center font-medium">
        {task?.proposalCount || 0}
      </Table.Cell>
      <Table.Cell className="py-4 px-4 font-medium text-gray-500 whitespace-nowrap">
        {new Date(task?.postedDate).toLocaleDateString("en-GB")}
      </Table.Cell>
      <Table.Cell className={"text-red-500"}>
        <button onClick={deleteTask} className="cursor-pointer"><FaTrash></FaTrash></button>
      </Table.Cell>
    </Table.Row>
  );
};

export default AllTaskTable;
