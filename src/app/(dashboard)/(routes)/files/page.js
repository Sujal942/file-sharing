import { UserButton } from "@clerk/nextjs";
import React from "react";
// import SideNav from "../../_components/SideNav";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <UserButton afterSignOutUrl="/" />
      {/* <SideNav /> */}
      <h1>Files</h1>
    </div>
  );
};

export default page;
