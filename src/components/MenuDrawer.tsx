"use client";

import * as React from "react";
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
        <Button variant="outline" className="text-2xl">
          {"\u2630"}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="w-64 flex flex-col h-full">
        <div className="flex-grow">
          <h1 className="menu-info text-xl font-bold w-full text-center my-4">
            Select Page
          </h1>
          <div className="menu-wrapper flex flex-col gap-2">
            <DrawerClose asChild>
              <Button
                variant="outline"
                className="rounded-none"
                onClick={() => navigate("/")}
              >
                Home
              </Button>
            </DrawerClose>
            <DrawerClose asChild>
              <Button
                variant="outline"
                className="rounded-none"
                onClick={() => navigate("/guide")}
              >
                Guide
              </Button>
            </DrawerClose>
            <DrawerClose asChild>
              <Button
                variant="outline"
                className="rounded-none"
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
              className="rounded-none border-none mt-auto"
              onClick={() => navigate("/references")}
            >
              References
            </Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button
              variant="outline"
              className="rounded-none border-none mt-auto"
            >
              Cancel
            </Button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
