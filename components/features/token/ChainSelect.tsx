"use client";

import useNetworkSelector from "@/store/tokenChains/networks";
import { useEffect } from "react";

export const ChainSelect = ({
  network,
  params,
}: {
  network: string;
  params: any;
}) => {
  const { setSelectedChain, availableChains } = useNetworkSelector();

  useEffect(() => {
    if (network) {
      const urlNetwwork = availableChains.find((chain) => chain.id === network);

      if (urlNetwwork) setSelectedChain(urlNetwwork);
    }
  }, [availableChains, params, setSelectedChain]);

  return null;
};
