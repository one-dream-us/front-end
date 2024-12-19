export function formatTime(timestamp: string): string {
  const [minute, second] = timestamp.split(':').slice(1);

  return `${minute}:${second}`;
}

export const convertTimeToSeconds = (time: string) => {
  const [minutes, seconds] = time.split(':').map(Number);
  return minutes * 60 + seconds;
};
