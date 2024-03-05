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

// Client Secret = a126f4defd204f71bfe8fc03bacfe609
// https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ?si=7a8ffbf4abed4b51

// const getToken = async () => {
//     const res = await fetch('https://accounts.spotify.com/api/token', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: "grant_type=client_credentials&client_id=91db97d380cf473e93313dae865c09ad&client_secret=a126f4defd204f71bfe8fc03bacfe609"
//     });

//     const data = await res.json();
//     localStorage.setItem('access_token', data.access_token)
//     console.log(data);
//     getArtistsData()
// }

// 1Xyo4u8uXC1ZmMpatF05PJ?si=7a8ffbf4abed4b51
// https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb

// const getArtistsData = async () => {
//     const res = await fetch('https://api.spotify.com/v1/me', {
//         headers: {
//             Authorization:
//                 'Bearer ' + localStorage.getItem('access_token')
//             },
//     })
//     const data = await res.json()

//     console.log(data)
// }

// React.useEffect(() => {
//     getToken()
// }, [])
