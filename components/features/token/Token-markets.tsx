import React from "react";

import type { IToken } from "@/types/token.type";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewExchangeTable from "./NewExchangeTable";
import { ErrorBoundary } from "@/components/common/ErrorBoundry";

interface Props {
  token: IToken;
}

const TokenMarkets = ({ token }: Props) => (
  <div className="flex flex-col items-start justify-center gap-10">
    <Tabs defaultValue="dex" className="w-full">
      <TabsList>
        <TabsTrigger value="dex">DEX</TabsTrigger>
        <TabsTrigger value="cex">CEX</TabsTrigger>
      </TabsList>
      <TabsContent value="dex">
        <ErrorBoundary>
          {token.TickersData?.dex && (
            <NewExchangeTable initTokenData={token.TickersData?.dex} />
          )}
        </ErrorBoundary>
      </TabsContent>
      <TabsContent value="cex">
        <ErrorBoundary>
          {token.TickersData?.cex && (
            <NewExchangeTable
              initTokenData={token.TickersData?.cex}
              type="CEX"
            />
          )}
        </ErrorBoundary>
      </TabsContent>
    </Tabs>
  </div>
);

export default TokenMarkets;
