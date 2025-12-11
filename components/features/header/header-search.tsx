"use client";

import { useState } from "react";
import Link from "next/link";
import { SearchIcon } from "lucide-react";

import Logo from "@/components/common/Logo";
import { Button } from "@/components/ui/button";
import useHeaderStore from "@/store/ActiveHeader";
import Spotlight from "./spotlight";

const HeaderSearch = () => {
  const isActive = useHeaderStore((state) => state.isActive);
  const content = useHeaderStore((state) => state.content);

  const [open, setOpen] = useState(false);

  const handleOpen = (value: any) => {
    setOpen(value);
  };

  return (
    <>
      <div className="w-auto h-full flex items-center mr-2 md:mr-auto">
        <div className="ml-2">
          {isActive ? (
            <div className="">{content}</div>
          ) : (
            <Link href="/">
              <Logo />
              <p className="h-0 w-0 invisible">Home</p>
            </Link>
          )}
        </div>
        <div className="flex items-center gap-4 ml-auto lg:hidden">
          <Button
            variant={"secondary"}
            onClick={() => setOpen(true)}
            aria-label="search"
            className="ml-2 text-secondary-foreground md:hidden w-[32px] h-[32px] p-0"
          >
            <SearchIcon />
          </Button>
          {/* <ChainSelector /> */}
        </div>
      </div>
      <div className="hidden lg:flex w-full">
        <Spotlight on={open} handleOn={handleOpen} />
      </div>
    </>
  );
};

export default HeaderSearch;
