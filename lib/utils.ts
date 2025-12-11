import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const getImageUrl = (address: string) =>
  `https://api.dextrading.com/images/${address.toLowerCase()}.png`;

const SUBS = ["₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉"];

const subDigits = (n: number) => String(n).replace(/\d/g, (d) => SUBS[+d]);

export const formatWithSubscript = (value: number, maxDecimals = 8): string => {
  if (value === 0) return "0";

  const sign = value < 0 ? "-" : "";
  const abs = Math.abs(value);

  if (abs < 1) {
    const fixed = abs.toFixed(12);
    const decimals = fixed.split(".")[1] || "";

    const trimmedDecimals = decimals.replace(/0+$/, "");

    const leadingZerosMatch = trimmedDecimals.match(/^0+/);
    const leadingZeros = leadingZerosMatch ? leadingZerosMatch[0].length : 0;

    const significant = trimmedDecimals.slice(leadingZeros).slice(0, 6);

    if (leadingZeros === 0) {
      const s = abs.toFixed(maxDecimals).replace(/(?:\.0+|(\.\d+?)0+)$/, "$1");
      return sign + s;
    }

    const sigPart = significant || "";
    return sign + `0.0${subDigits(leadingZeros)}${sigPart}`;
  }

  const s = abs.toFixed(maxDecimals).replace(/(?:\.0+|(\.\d+?)0+)$/, "$1");
  return sign + s;
};

export const priceFormatterFactory = () => {
  return {
    format(price: number) {
      return formatWithSubscript(price);
    },
  };
};
