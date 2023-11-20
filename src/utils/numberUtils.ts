export const formatNumberToCurrency = (number: number | undefined): string => {
  // Prevent NaN
  const value = typeof number !== "number" ? 0 : number;

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};
