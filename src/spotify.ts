const authEndpoint: string = 'https://accounts.spotify.com/authorize?'
const clientId: string = import.meta.env.VITE_CLIENT_ID
const redirectUri: string = 'http://localhost:5173'
const scopes: string[] = [
    'user-library-read',
    'user-read-email',
    'user-top-read',
    'user-follow-read',
    'playlist-read-private',
    'user-read-currently-playing',
    'user-read-playback-state'
]

export const loginEndpoint: string = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    '%20'
)}&response_type=token&show_dialog=true`
