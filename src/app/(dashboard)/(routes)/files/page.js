import { UserButton } from "@clerk/nextjs";
import React from "react";
// import SideNav from "../../_components/SideNav";

const page = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/files" />
      {/* <SideNav /> */}
      <h1>Files</h1>
    </div>
  );
};

export default page;
