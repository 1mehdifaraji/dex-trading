import React from "react";

import TopHotTokensInline from "./TopHotTokensInline";
import TokenDetail from "./token-detail";
import { IToken } from "@/types/token.type";
import MobileNavigator from "./MobileNavigator";
import TokenOverview from "./token-overview";

interface Props {
  params: IParam;
  searchParams?: searchParams;
  token: IToken;
}

type IParam = {
  params: [string, string];
};

type searchParams = {
  network: string;
};

const TokenPage = ({
  token,
  tokenDetail,
  tokenAddress,
  network,
  // tradeReport,
  alternateLogo,
  images,
}: Props) => {
  return (
    <>
      <div className="hidden md:flex flex-col gap-6 items-center justify-center w-full">
        <TokenOverview
          token={tokenDetail}
          tokenAddress={tokenAddress}
          network={network}
          logo={token.data?.[0]?.imageUrl2}
          alternateLogo={alternateLogo}
        />
        <TopHotTokensInline images={images} />
        <TokenDetail
          token={tokenDetail}
          tokenAddress={tokenAddress}
          network={network}
          // tradeReport={tradeReport}
        />
      </div>
      <div className="flex md:hidden">
        <MobileNavigator
          token={tokenDetail}
          tokenAddress={tokenAddress}
          network={network}
          // tradeReport={tradeReport}
          logo={token.data?.[0]?.imageUrl2}
          alternateLogo={alternateLogo}
        />
      </div>
    </>
  );
};

export default TokenPage;
