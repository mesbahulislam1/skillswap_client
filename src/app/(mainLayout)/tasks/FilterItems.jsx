"use client";
import React, { useState } from "react";
import { Button, Label, ListBox, SearchField, Select } from "@heroui/react";
import { useRouter } from "next/navigation";

const FilterItems = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const router = useRouter();

  const handleFilter = () => {
    const params = new URLSearchParams();

    if (search) {
      params.set("search", search);
    }

    if (category && category !== "all") {
      params.set("category", category);
    }

    router.push(`/tasks?${params.toString()}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
      <SearchField
        onChange={(value) => {
          setSearch(value);
         // optional auto filter
        }}
        className="md:col-span-3"
      >
        <SearchField.Group className="border border-gray-400">
          <SearchField.SearchIcon />
          <SearchField.Input placeholder="Search..." />
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>

      <Select
        onSelectionChange={(key) => {
          setCategory(key);
        }}
        className="w-full grid-cols-2"
        placeholder="Select one"
      >
        <Select.Trigger className="border border-gray-400">
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>

        <Select.Popover>
          <ListBox>
            <ListBox.Item id="all">All Categories</ListBox.Item>
            <ListBox.Item id="design">Design</ListBox.Item>
            <ListBox.Item id="writing">Writing</ListBox.Item>
            <ListBox.Item id="development">Development</ListBox.Item>
            <ListBox.Item id="marketing">Marketing</ListBox.Item>
            <ListBox.Item id="other">Other</ListBox.Item>
          </ListBox>
        </Select.Popover>
      </Select>

      <Button onClick={handleFilter} className={'grid-cols-1 w-full rounded-[7px]'}>Search</Button>
    </div>
  );
};

export default FilterItems;