import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";

const Nav = () => {
  return (
    <div className="w-full h-20 px-52 flex mx-auto items-center border-b">
      <div className="flex items-center justify-between w-full">
        <h1 className="font-xl font-semibold">MMS</h1>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Nav;
