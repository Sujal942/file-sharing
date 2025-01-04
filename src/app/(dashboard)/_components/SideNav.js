"use client";
import { File, Shield, Upload } from "lucide-react";
import React, { useState } from "react";

const SideNav = () => {
  const menuList = [
    {
      id: 1,
      name: "Upload",
      icons: Upload,
      path: "/upload",
    },
    {
      id: 2,
      name: "Files",
      icons: File,
      path: "/files",
    },
    {
      id: 3,
      name: "Upgrade",
      icons: Shield,
      path: "/upgrade",
    },
  ];
  const [activeindex, setActiveIndex] = useState(0);
  return (
    <div className="flex flex-col float-left text-slate-50">
      <h1>SideVav Bar</h1>
      {menuList.map((item, index) => (
        <button
          key={item.id}
          className={`flex items-center gap-4 p-4 px-0 hover:bg-gray-400 w-full text-slate-50 ${
            activeindex === index ? "bg-gray-400 text-primary " : null
          }`}
          onClick={() => setActiveIndex(index)}
        >
          <item.icons />
          <h2>{item.name}</h2>
        </button>
      ))}
    </div>
  );
};

export default SideNav;
