import TokenHoldersAmountFilter from "./TokenHoldersAmountFilter";
import TokenHoldersCompare from "./TokenHoldersCompare";
import TokenHoldersHolderStats from "./TokenHoldersHolderStats";
import TokenHoldersMostActiveAddress from "./TokenHoldersMostActiveAddress";

interface Props {
  tokenAddress: string;
}

const TokenHolders = ({ tokenAddress }: Props) => (
  <div className="flex flex-col gap-12 pt-8">
    <TokenHoldersHolderStats tokenAddress={tokenAddress} />
    <TokenHoldersAmountFilter tokenAddress={tokenAddress} />
    <TokenHoldersCompare tokenAddress={tokenAddress} />
    <TokenHoldersMostActiveAddress tokenAddress={tokenAddress} />
  </div>
);

export default TokenHolders;
