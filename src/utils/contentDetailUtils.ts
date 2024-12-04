export function convertTimeToSeconds(time: string) {
  const [minutes, seconds] = time.split(':').map(Number);
  return Number(minutes * 60 + seconds);
}
