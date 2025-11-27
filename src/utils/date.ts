import { MONTHS } from "./constants";

export const formatFullDate = (date: Date) => {
  return ` ${date.getDate()} de ${MONTHS[date.getMonth()]}`;
};
