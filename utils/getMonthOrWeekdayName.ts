export default function getMonthOrWeekdayName(
  date: Date,
  display: "weekday" | "month",
  format: "short" | "long" | "narrow" = "short"
) {
  return date.toLocaleString("pt-BR", { [display]: format }).replace(".", "");
}
