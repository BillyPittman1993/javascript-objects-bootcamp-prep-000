var playlist = {
  bb: "breathe",
  ke: "arms of sorrow",
  soty: "until the day I die"
}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
