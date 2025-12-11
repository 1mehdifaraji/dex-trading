"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

import { getTopTrends } from "@/services/http/token.http";
import { Avatar, AvatarImage, AvatarPlaceholder } from "@/components/ui/avatar";
import { minifyTokenName } from "@/utils/truncate";
import {
  Carousel,
  CarouselContent,
  DefaultCarouselItem,
} from "@/components/ui/carousel";
import { imageUrl } from "@/utils/imageUrl";
import useNetworkSelector from "@/store/tokenChains/networks";
import { tokenRoute } from "@/utils/routeGenerator";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const TopHotTokensInline = ({ images }: any) => {
  const { selectedChain } = useNetworkSelector();

  const { data: tokenData, isLoading } = useQuery({
    queryKey: ["topTokens", selectedChain.id],
    queryFn: () =>
      getTopTrends({
        params: {
          network: selectedChain.id,
          page: 1,
          limit: 10,
          base_token_price_usdMin: 0,
          base_token_price_usdMax: 100000000,
          "volume_usd.h24Min": 0,
          "volume_usd.h24Max": 100000000000,
          reserve_in_usdMin: 0,
          reserve_in_usdMax: 100000000000,
          pool_created_atFrom: "2018-08-14T22:19:11Z",
          pool_created_atTill: "2024-08-14T22:19:11Z",
          "price_change_percentage.h24Min": -100,
          "price_change_percentage.h24Max": 1000000000,
          search: "",
          sortBy: "price_change_percentage.h24",
          sortOrder: "desc",
        },
      }),
  });

  if (isLoading) return <Skeleton className="min-h-12 w-full"></Skeleton>;

  return (
    <Carousel className="cursor-grab select-none w-full flex flex-row items-center overflow-x-scroll flex-nowrap gap-4 relative min-h-16">
      <div className="w-full bg-accent rounded-md overflow-auto">
        <CarouselContent className="flex items-center gap-1 px-2">
          {tokenData?.data?.length &&
            tokenData.data?.map((token, index) => (
              <DefaultCarouselItem className="w-auto pl-2" key={index}>
                <div className="flex items-center gap-3 p-2 rounded-lg text-nowrap">
                  <div className="flex items-center">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-7 w-7">
                        <AvatarImage
                          src={imageUrl(
                            token.relationships?.base_token?.data?.id?.split(
                              "_"
                            )[1] || "",
                            images?.imageUrls ?? []
                          )}
                          alt={`${token.attributes?.name} token image`}
                        />
                        <AvatarPlaceholder />
                      </Avatar>
                      <div className="min-w-fit ">
                        <Link
                          href={tokenRoute(
                            token.relationships?.base_token?.data?.id?.split(
                              "_"
                            )[1] || "",
                            selectedChain.id.toLowerCase()
                          )}
                          className="text-xs"
                        >
                          {minifyTokenName(token.attributes?.name)}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm font-medium">
                    {ChangePrice({
                      change: Math.floor(
                        parseFloat(
                          token.attributes?.price_change_percentage?.h24 || "0"
                        )
                      ),
                    })}
                  </div>
                </div>
              </DefaultCarouselItem>
            ))}
        </CarouselContent>
      </div>
    </Carousel>
  );
};

export default TopHotTokensInline;

const ChangePrice = ({ change }: { change: number }) => (
  <div
    className={cn("text-center", change > 0 ? "text-success" : "text-red-400")}
  >
    {change}%
  </div>
);
