// xx -> xxh xxmin
export function convertMinutesToHoursAndMinutes(totalMinutes = 0): string {
  const totalHours = Math.floor(totalMinutes / 60);
  const totalMinutesRemaining = totalMinutes % 60;
  const timeText = `${totalHours}h ${totalMinutesRemaining}min`;
  return timeText;
}
