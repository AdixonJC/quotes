export const randomNumber = (objectOrNumber) => {
  return Math.round(
    objectOrNumber.length
      ? Math.abs(Math.random() * objectOrNumber.length - 1)
      : Math.random() * objectOrNumber
  );
};
