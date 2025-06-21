type VariantType = "primary" | "secondary" | "tertiary";

export const buttonConfigs: { label: string; variantType: VariantType }[] = [
  { label: "Sell", variantType: "primary" },
  { label: "Buy", variantType: "secondary" },
  { label: "Exchange", variantType: "tertiary" },
];


export const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};