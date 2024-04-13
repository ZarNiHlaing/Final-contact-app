import React from "react";
import Nav from "../../components/nav/Nav";
import { Button } from "../../components/ui/button";
import { FaPlus } from "react-icons/fa6";
import EmptyLottie from "../../components/lottieComponents/Empty.lottie";

import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import AuthGuard from "../../components/Guard/Auth.Guard";
import FormTool from "./tool/Form.tool";
import DataTableTool from "./tool/DataTable.tool";
import { useGetQuery } from "../../store/endpoints/contact.endpoint";

const HomePage = () => {
  const {data,isError,isLoading , isSuccess} = useGetQuery();
  // console.log("Hello world ",data);

  return (
    <AuthGuard>
      <Sheet>
        <div className="w-screen h-screen bg-[#fcfcfd]">
          <Nav />
          <div className="px-52 mx-auto">
            <div className="flex justify-end">
              {" "}
              {/* <Button className={"bg-blue-500 space-x-2 mt-5"}>
            {" "}
          
          </Button> */}
              <SheetTrigger asChild>
                <Button
                  className={"bg-blue-500 space-x-2 mt-5"}
                  variant="outline"
                >
                  {" "}
                  <FaPlus /> <p>Create Contact</p>{" "}
                </Button>
              </SheetTrigger>
            </div>
            {data?.contacts?.data?.length > 0 ? (
              <DataTableTool
                // handleEdit={handleEdit}
                apiData={data?.contacts?.data}
              />
            
            ) : (
              <div className="border bg-white h-[600px] w-full mt-5 rounded flex flex-col justify-center item-center">
                <div className="mx-auto">
                  <EmptyLottie />
                </div>
                <p className="text-center font-semibold text-lg text-gray-400">
                  There is no list...
                </p>
              </div>
            )}
          </div>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Contact Information</SheetTitle>
            </SheetHeader>
            <FormTool />
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </div>
      </Sheet>
    </AuthGuard>
  );
};

export default HomePage;
