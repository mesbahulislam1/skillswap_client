import { TotalTasks } from "@/lib/api/tasks/data";
import { Table } from "@heroui/react";
import React from "react";
import AllTaskTable from "./AllTaskTable";

const TaskManagement = async () => {
  const tasks = await TotalTasks();

  return (
    <div className="w-[95%]">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-950 tracking-tight">
          Task Management
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          {tasks?.length} total tasks
        </p>
      </div>
      <div>
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="Team members">
              <Table.Header>
                <Table.Column className={'text-[17px] text-black'} isRowHeader>Title</Table.Column>
                <Table.Column className={'text-[17px] text-black'}>Category</Table.Column>
                <Table.Column className={'text-[17px] text-black'}>Client</Table.Column>
                <Table.Column className={'text-[17px] text-black'}>Budget</Table.Column>
                <Table.Column className={'text-[17px] text-black'}>Status</Table.Column>
                <Table.Column className={'text-[17px] text-black'}>Proposals</Table.Column>
                <Table.Column className={'text-[17px] text-black'}>Created</Table.Column>
                <Table.Column className={'text-[17px] text-black'}>Actions</Table.Column>
              </Table.Header>
              <Table.Body>
                {tasks.map((task) => {
                  return (
                    <AllTaskTable key={task?._id} task={task}></AllTaskTable>
                  );
                })}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </div>
  );
};

export default TaskManagement;
