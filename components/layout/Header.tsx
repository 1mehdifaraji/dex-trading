import Link from "next/link";
import clsx from "clsx";
import { LiaRobotSolid } from "react-icons/lia";

import ProfileButton from "@/components/common/ProfileButton";
import { ThemeToggle } from "../features/header/Toggle-theme";
import { Button } from "../ui/button";
import ChainInfo from "../features/header/chain-info";
import NetworkSelector from "./NetworkSelector";
import NewsDrawer from "../features/header/news-drawer";
import NotificationToggle from "../features/header/notification";
import HeaderSearch from "../features/header/header-search";

interface Props {
  className?: string;
}

const Header = ({ className }: Props) => {
  return (
    <header
      className={clsx(
        "w-[100vw] fixed top-0 right-0 left-0 z-40 px-5 2xl:px-0 py-2 bg-background flex flex-col items-center justify-center gap-4 flex-shrink-0 flex-grow flex-wrap",
        className
      )}
    >
      <div
        className="flex items-center justify-between w-full flex-wrap md:px-3"
        style={{ zIndex: 100 }}
      >
        <div className="flex items-center justify-start md:justify-center gap-2 w-full flex-nowrap lg:flex-nowrap">
          <HeaderSearch />
          <div className="flex ml-auto lg:hidden items-center justify-center gap-2">
            <div className="ml-auto">
              <NetworkSelector />
            </div>
            <div>
              <ProfileButton />
            </div>
            <div className="flex items-center">
              <ThemeToggle />
              <NotificationToggle />
            </div>
            <div className="flex flex-nowrap items-center">
              <Button variant="ghost" aria-label="robots" size="icon">
                <Link href="/robots" className="flex items-center">
                  <LiaRobotSolid className="text-2xl" />
                  <p className="h-0 w-0 invisible">Robots</p>
                </Link>
              </Button>
              <NewsDrawer />
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center gap-2">
            <div className="hidden lg:flex gap-2 flex-wrap md:flex-nowrap">
              <NetworkSelector />
              <ChainInfo />
            </div>
            <ProfileButton />
            <ThemeToggle />
            <NotificationToggle />
            <Link href="/robots">
              <Button aria-label="robots" variant="ghost" size="icon">
                <LiaRobotSolid className="text-2xl" />
              </Button>
              <p className="h-0 w-0 invisible">Robots</p>
            </Link>
            <NewsDrawer />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
