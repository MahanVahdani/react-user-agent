import moment from "moment-jalaali";
import "moment/locale/fa";

export const timeConverter = (
  timestamp: string,
  type?: "date" | "time"
): string => {
  moment.loadPersian();

  const date = moment(timestamp).locale("fa").format("jD jMMMM jYYYY");

  const time = moment(timestamp).locale("fa").format("[ساعت] HH:mm");

  const dateAndTime = moment(timestamp)
    .locale("fa")
    .format("jD jMMMM jYYYY [ساعت] HH:mm");

  if (type === "date") return date;
  if (type === "time") return time;
  return dateAndTime;
};
