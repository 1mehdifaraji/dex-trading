"use client";

import useHeaderStore from "@/store/ActiveHeader";
import { useCallback, useEffect } from "react";

const ActiveHeader = ({ scrollLimit = 200, content }: any) => {
  const setIsActive = useHeaderStore((state) => state.setIsActive);

  const deactiveHandler = useCallback(
    () => setIsActive({ isActive: false, content: <></> }),
    [setIsActive]
  );

  const scrollHandler = useCallback(() => {
    if (window.scrollY >= scrollLimit) setIsActive({ isActive: true, content });
    else {
      deactiveHandler();
    }
  }, [content, scrollLimit, deactiveHandler, setIsActive]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      deactiveHandler();

      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollLimit, deactiveHandler, scrollHandler]);

  return null;
};

export default ActiveHeader;
