const authEndpoint: string = 'https://accounts.spotify.com/authorize?'
const clientId: string = '6d0009556a874813ac78b21b5878b14e'
const redirectUri: string = 'http://localhost:5173'
const scopes: string[] = [
    'user-library-read',
    'user-read-email',
    'user-top-read',
    'user-follow-read',
    'playlist-read-private',
    'user-read-currently-playing',
]

export const loginEndpoint: string = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    '%20'
)}&response_type=token&show_dialog=true`
