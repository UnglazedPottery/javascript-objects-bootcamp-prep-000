var playlist = {Beyonce: "Crazy in Love"};

function updatePlaylist(playlist, artistName, songTitle)
{
  return Object.assign(playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName)
{
  delete playlist[artistName];
  return playlist
}
