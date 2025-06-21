export interface FloatingIcon {
  src: string;
  top: string;
  left: string;
  delay: number;
}

export const floatingIcons: FloatingIcon[] = [
  { src: "/images/icons/eth.svg", top: "7%", left: "14%", delay: 0.05 },
  { src: "/images/icons/bitcoin.svg", top: "87%", left: "21%", delay: 0.83 },
  { src: "/images/icons/solana.svg", top: "62%", left: "63%", delay: 0.94 },
  { src: "/images/icons/polygon.svg", top: "59%", left: "84%", delay: 0.7 },
  { src: "/images/icons/binance.svg", top: "32%", left: "70%", delay: 0.27 },
  { src: "/images/icons/avalanche.svg", top: "61%", left: "56%", delay: 0.62 },
];
