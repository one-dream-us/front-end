export default function handleTimeClick(time: number, player: YT.Player | null) {
  if (player) {
    player.seekTo(time, true);
  }
}
