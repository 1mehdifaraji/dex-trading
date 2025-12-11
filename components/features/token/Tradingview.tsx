"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";

const AdvancedRealTimeChart = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then((w) => w.AdvancedRealTimeChart),
  {
    ssr: false,
  }
);

const Tradingview = ({ symbol }: { symbol: string }) => {
  const { theme } = useTheme();

  return (
    <div className="w-full h-[600px]">
      <AdvancedRealTimeChart
        theme={theme === "light" ? "light" : "dark"}
        autosize
        symbol={symbol}
      />
    </div>
  );
};

export default Tradingview;
