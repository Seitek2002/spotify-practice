import { SpotifyPlayerState } from '../types/CurrentlyPlayingTrack'
import { IRecommendation } from '../types/Reccomandation'
import { ITopTracks } from '../types/TopTracks'
import { IUser } from '../types/Users'

export const getUsersData = async (accessToken: string) => {
    const res = await fetch('https://api.spotify.com/v1/me', {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + accessToken,
        },
    })
    const data: Awaited<IUser | null> = await res.json()
    return data
}

export const getCurrentSong = async (accessToken: string) => {
    const res = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + accessToken,
        },
    })

    if(res.status === 200) {
        const data: SpotifyPlayerState = await res.json()
        return data.item
    }
    return null
}

export const pausePlayback = async () => {
     await fetch('https://api.spotify.com/v1/me/player/pause', {
        method: "PUT",
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
    })
}

export const playResumePlayback = async () => {
    await fetch('https://api.spotify.com/v1/me/player/play', {
        method: "PUT",
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
    })
}

export const getTopTracks = async (accessToken: string) => {
    const res = await fetch('https://api.spotify.com/v1/me/top/tracks', {
        method: "GET",
        headers: {
            Authorization: 'Bearer ' + accessToken,
        },
    })
    const data: ITopTracks = await res.json()
    return data
}

export const getRecommendations = async (accessToken: string) => {
    const seedArtists = '4NHQUGzhtTLFvgF5SZesLK'; 
    const res = await fetch(`https://api.spotify.com/v1/recommendations?seed_artists=${seedArtists}`, {
        method: "GET",
        headers: {
            Authorization: 'Bearer ' + accessToken,
        },
    });
    const data = await res.json();
    
    return data;
};

