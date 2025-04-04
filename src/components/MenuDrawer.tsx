"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useNavigate } from "react-router-dom";

export function MenuDrawer() {
  const navigate = useNavigate();

  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="text-3xl fixed top-0 left-0 z-50 h-[100vh] pr-2 rounded-none"
        >
          {"\u232a"}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="w-64 flex flex-col h-full">
        <div className="flex-grow">
          <h1 className="menu-info text-xl font-bold w-full text-center my-4">
            🫧 Pop Goes The Bubble! 🫧
          </h1>
          <div className="menu-wrapper flex flex-col">
            <DrawerClose asChild>
              <Button
                variant="outline"
                className="rounded-none text-md py-8"
                onClick={() => navigate("/")}
              >
                Home
              </Button>
            </DrawerClose>
            <DrawerClose asChild>
              <Button
                variant="outline"
                className="rounded-none text-md py-8"
                onClick={() => navigate("/guide")}
              >
                Guide
              </Button>
            </DrawerClose>
            <DrawerClose asChild>
              <Button
                variant="outline"
                className="rounded-none text-md py-8"
                onClick={() => navigate("/simulation")}
              >
                Simulation
              </Button>
            </DrawerClose>
          </div>
        </div>
        <div className="flex justify-between">
          <DrawerClose asChild>
            <Button
              variant="outline"
              className="rounded-none mt-auto text-md flex-1"
              onClick={() => navigate("/references")}
            >
              References
            </Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button
              variant="outline"
              className="rounded-none mt-auto text-md flex-1"
            >
              Cancel
            </Button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
