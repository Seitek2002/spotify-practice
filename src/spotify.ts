const authEndpoint: string = 'https://accounts.spotify.com/authorize?'
const clientId: string = '91db97d380cf473e93313dae865c09ad'
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
