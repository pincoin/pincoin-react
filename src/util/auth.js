export const getTokenDuration = (storedExpirationDate) => {
  return new Date(storedExpirationDate).getTime() - new Date().getTime();
};
