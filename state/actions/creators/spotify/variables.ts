
export const id = {
  user: process.env.NEXT_PUBLIC_SPOTIFY_ID_USER,
  client: process.env.NEXT_PUBLIC_SPOTIFY_ID_CLIENT
};

export const playlist = {
  _2020: process.env.NEXT_PUBLIC_SPOTIFY_PLAYLIST_2020,
  _2021: process.env.NEXT_PUBLIC_SPOTIFY_PLAYLIST_2021,
};

export const base = {
  token: "https://accounts.spotify.com/api/token",
  api: "https://api.spotify.com/v1"
};

export const secret = {
  client: process.env.NEXT_PUBLIC_SPOTIFY_SECRET_CLIENT,
};

export function getToken() {
  return fetch(base.token, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(`${id.client}:${secret.client}`),
    },
    body: "grant_type=client_credentials",
  })
  .then(res => res.json())
  .then(res => res.access_token)
  .catch(err => console.error(err));
}

export const spotify = (target: string) => `${base.api}${target}`;

export const spotifyPlaylist = (target: string | undefined) => spotify(`/playlists/${target}`);