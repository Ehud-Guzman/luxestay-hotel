export const formatKES = (amount) => {
  return `KES ${new Intl.NumberFormat("en-KE").format(amount)}`;
};
