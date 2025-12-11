import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaRankingStar } from "react-icons/fa6";
import { MdChecklist } from "react-icons/md";
import { RiExchangeDollarFill } from "react-icons/ri";
import { IToken } from "@/types/token.type";

import TokenSummary from "./TokenSummary";
import { IoShieldHalfOutline } from "react-icons/io5";
import { GrStakeholder } from "react-icons/gr";

import TokenSecurityOldShit from "./TokenSecurity-old-shit/TokenSecurity";
import TokenHolders from "./TokenHolders-old-dex/TokenHolders";
import TokenMarkets from "./Token-markets";
import TokenScoring from "./Token-scoring";

interface Props {
  token: IToken;
  network: string;
  tokenAddress: string;
}

const TokenDetail = ({ tokenAddress, network, token }: Props) => (
  <Tabs id="details" defaultValue="summary" className="w-full no-scrollbar">
    <TabsList className="bg-transparent p-0 m-0 w-full overflow-y-scroll flex items-center justify-start">
      <TabsTrigger value="summary">
        <MdChecklist />
        <span className="ml-1">Summary</span>
      </TabsTrigger>
      <TabsTrigger value="markets">
        <RiExchangeDollarFill />
        <span className="ml-1">Markets</span>
      </TabsTrigger>
      <TabsTrigger value="scoring">
        <FaRankingStar />
        <span className="ml-1">Scoring</span>
      </TabsTrigger>
      <TabsTrigger value="security">
        <IoShieldHalfOutline />
        <span className="ml-1">Security</span>
      </TabsTrigger>
      <TabsTrigger value="holders">
        <GrStakeholder />
        <span className="ml-1">Holders</span>
      </TabsTrigger>
    </TabsList>
    <TabsContent value="summary" className="mt-5 !-px-0 ">
      <TokenSummary
        token={token}
        tokenAddress={tokenAddress}
        network={network}
        // tradeReport={tradeReport}
      />
    </TabsContent>
    <TabsContent value="markets" className="mt-5">
      <TokenMarkets token={token} />
    </TabsContent>
    <TabsContent value="scoring" className="mt-5">
      <TokenScoring token={token} />
    </TabsContent>
    <TabsContent value="security" className="mt-5">
      <TokenSecurityOldShit token={token} tokenAddress={tokenAddress} />
    </TabsContent>
    <TabsContent value="holders" className="mt-5">
      <TokenHolders tokenAddress={tokenAddress} />
    </TabsContent>
  </Tabs>
);

export default TokenDetail;
