"use client";
import { Label, ListBox, SearchField, Select } from "@heroui/react";
import React, { useState } from "react";

const TasksPage = () => {
  const [search, setSearch] = useState();
  const [category, setCategory] = useState();
  console.log(search, category);
  return (
    <div className="px-5">
      <h2 className="text-3xl font-bold">Browse Tasks</h2>
      <p>Find open tasks that match your skills</p>

      <div className="grid grid-cols-1  md:grid-cols-5 gap-5">
        <SearchField
          onChange={(e) => setSearch(e)}
          name="Search tasks by title..."
          className={" md:col-span-4"}
        >
          <SearchField.Group className={"border border-gray-400"}>
            <SearchField.SearchIcon />
            <SearchField.Input className="w-[280px] " placeholder="Search..." />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>

        <Select onChange={(e)=> setCategory(e)} className="w-full" placeholder="Select one">
          <Select.Trigger className={"border border-gray-400"}>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="all" textValue="All">
                All Categories
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="Design" textValue="Design">
                Design
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="writing" textValue="Writing">
                Writing
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="development" textValue="Development">
                Development
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="texas" textValue="Marketing">
                Marketing
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="other" textValue="Other">
                Other
                <ListBox.ItemIndicator />
              </ListBox.Item>
              
            </ListBox>
          </Select.Popover>
        </Select>
      </div>
    </div>
  );
};

export default TasksPage;
