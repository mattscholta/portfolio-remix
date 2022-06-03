import { differenceInMonths } from "date-fns";

export const getTimeWorked = (start: Date, end: Date) => {
  const months = differenceInMonths(end, start);
  const years = Math.floor(months / 12);
  const remainder = months % 12;

  return `${years} years and ${remainder} months`;
};
