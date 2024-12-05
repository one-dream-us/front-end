export function convertTimeToSeconds(timestamp: string): string {
  const [minute, second] = timestamp.split(':').slice(1);

  return `${minute}:${second}`;
}
