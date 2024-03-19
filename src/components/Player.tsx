import React, { useRef, useState, useEffect } from 'react';
import { getTopTracks } from '../services/spotifyApi';
import { ITopTracks } from '../types/TopTracks';
import { Flex, Slider, Typography } from 'antd'
import { RedoOutlined, StepBackwardFilled, PlayCircleFilled, StepForwardFilled } from '@ant-design/icons'

export default function Player({song}) {
    const [ownTracks, setownTracks] = useState<ITopTracks | null>(null);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [musicValue, setMusicValue] = useState<number>(0);
    const [volume, setVolume] = useState<number>(100);
    const previewUrl = useRef(null)

    const getData = async () => {
        const hash = window.location.hash;
        const _token = hash.split('&')[0].split('=')[1];
        if (_token) {
            setownTracks(await getTopTracks(_token));
        }
    }

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if(song){
            previewUrl.current = song.preview_url
        }
    },[song])

    const audioRef = useRef(new Audio());

    useEffect(() => {
        const audio = audioRef.current;
        if (previewUrl.current && audio && ownTracks && ownTracks.items && ownTracks.items.length > 0) {
            audio.src = song.preview_url;
            audio.volume = volume / 100;
            audio.addEventListener('loadedmetadata', () => {
                setDuration(audio.duration);
            });
            audio.addEventListener('timeupdate', () => {
                setCurrentTime(audio.currentTime);
                setMusicValue(audio.currentTime);
            });
            audio.addEventListener('ended', () => {
                setCurrentTime(0); 
                setMusicValue(0);
                audio.currentTime = 0; 
            });
        }
    }, [ownTracks, song]);

    const playMusic = () => {
        audioRef.current.play()
    }

    const musicPlaying = (value: number) => {
        audioRef.current.currentTime = value;
        setCurrentTime(value);
    }

    const volumeChange = (value: number) => {
        setVolume(value); 
        audioRef.current.volume = value / 100; 
    }

    return (
        <>
            <div style={{ flex: '1' }}>
                <Flex justify="center" style={{ gap: '22px' }}>
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M21.4708 7.31952C21.0448 7.74555 21.0448 8.43627 21.4708 8.8623L22.1566 9.54813H19.8151C18.3733 9.54813 17.0016 10.215 16.0522 11.3776L7.94266 21.3076C7.37299 22.0052 6.55001 22.4053 5.68493 22.4053H5V24.5481H5.68493C7.12674 24.5481 8.49837 23.8813 9.44781 22.7187L17.5573 12.7887C18.127 12.0911 18.95 11.691 19.8151 11.691H22.4991L21.4708 12.7192C21.0448 13.1453 21.0448 13.836 21.4708 14.262C21.8968 14.688 22.5876 14.688 23.0136 14.262L26.1313 11.1443C26.3265 10.9491 26.3265 10.6325 26.1313 10.4372L23.0136 7.31952C22.5876 6.89349 21.8968 6.89349 21.4708 7.31952ZM6.36879 8.54813C7.76049 8.54813 9.08446 9.19407 10.0009 10.3202L12.4531 13.1728L11 14.5481L8.54806 11.687C7.9982 11.0113 7.20381 10.6238 6.36879 10.6238H5.00043V8.54813H6.36879ZM16.3284 20.7761C17.2449 21.9022 18.5688 22.5481 19.9605 22.5481H22.6419L21.4708 23.7192C21.0448 24.1453 21.0448 24.836 21.4708 25.262C21.8968 25.688 22.5876 25.688 23.0136 25.262L26.1313 22.1443C26.3265 21.9491 26.3265 21.6325 26.1313 21.4372L23.0136 18.3195C22.5876 17.8935 21.8968 17.8935 21.4708 18.3195C21.0448 18.7455 21.0448 19.4363 21.4708 19.8623L22.081 20.4725H19.9605C19.1255 20.4725 18.3311 20.0849 17.7813 19.4093L16 17.0481L14.5 18.5481L16.3284 20.7761Z"
                            fill="#BABABA"
                        />
                    </svg>
                    <StepBackwardFilled
                        style={{ color: '#d1d1d1', fontSize: '32px', cursor: 'pointer' }}
                    />
                    <PlayCircleFilled
                        onClick={playMusic}
                        style={{ color: '#fff', fontSize: '32px', cursor: 'pointer' }}
                    />
                    <StepForwardFilled
                        style={{ color: '#d1d1d1', fontSize: '32px', cursor: 'pointer' }}
                    />
                    <RedoOutlined
                        style={{ color: '#bababa', fontSize: '20px', cursor: 'pointer' }}
                    />
                </Flex>
                <Flex justify="center" align="center" style={{ gap: '8px' }}>
                    <Typography.Text style={{ color: '#fff' }}>00:00</Typography.Text>
                        <div className='main_player'>
                            <Slider 
                                min={0}
                                max={duration}
                                onChange={musicPlaying}
                                value={musicValue}
                                style={{ width: '552px' }}
                                step={0.01} 
                                tooltipVisible={false} 
                            />
                        </div>
                    <Typography.Text style={{ color: '#fff' }}>00:30</Typography.Text>
                </Flex>
            </div>
            <Flex style={{ gap: '8px' }}>
                <svg
                    style={{ cursor: 'pointer' }}
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.7"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22 9H10C9.44772 9 9 9.44772 9 10V11C9 11.5523 9.44772 12 10 12H22C22.5523 12 23 11.5523 23 11V10C23 9.44772 22.5523 9 22 9ZM10 7C8.34315 7 7 8.34315 7 10V11C7 12.6569 8.34315 14 10 14H22C23.6569 14 25 12.6569 25 11V10C25 8.34315 23.6569 7 22 7H10ZM7 17H25V19.5H7V17ZM25 23H7V25.5H25V23Z"
                        fill="white"
                    />
                </svg>
                <svg
                    style={{ cursor: 'pointer' }}
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.7"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.2 9C7.53726 9 7 9.53892 7 10.2037V16.8398C7 17.5 7.5 18 8.2 18H11V20H8C5.74668 20 5 18.1677 5 15.9074V10.6111C5 8.61675 6.21177 7 8.2 7H11V9H8.2ZM24 9H16C15.4477 9 15 9.44772 15 10V23C15 23.5523 15.4477 24 16 24H24C24.5523 24 25 23.5523 25 23V10C25 9.44772 24.5523 9 24 9ZM16 7C14.3431 7 13 8.34315 13 10V23C13 24.6569 14.3431 26 16 26H24C25.6569 26 27 24.6569 27 23V10C27 8.34315 25.6569 7 24 7H16ZM20 22C21.6569 22 23 20.6569 23 19C23 17.3431 21.6569 16 20 16C18.3431 16 17 17.3431 17 19C17 20.6569 18.3431 22 20 22ZM21 13C21 13.5523 20.5523 14 20 14C19.4477 14 19 13.5523 19 13C19 12.4477 19.4477 12 20 12C20.5523 12 21 12.4477 21 13ZM11 23H8V25H11V23Z"
                        fill="white"
                    />
                </svg>
                <svg
                    style={{ cursor: 'pointer' }}
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.7"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.1385 9.74993L9.47894 13.6673C7.50702 14.8273 7.50702 17.679 9.47894 18.8389L16.1385 22.7563V9.74993ZM8.4649 11.9434C5.17837 13.8767 5.17837 18.6295 8.4649 20.5628L16.6314 25.3666C17.2981 25.7588 18.1385 25.2781 18.1385 24.5047V8.00152C18.1385 7.2281 17.2981 6.74745 16.6314 7.13958L8.4649 11.9434ZM19.1387 9.25317C20.1236 9.25317 21.0989 9.44717 22.0088 9.82408C22.9187 10.201 23.7455 10.7534 24.442 11.4499C25.1384 12.1463 25.6909 12.9731 26.0678 13.883C26.4447 14.793 26.6387 15.7683 26.6387 16.7532C26.6387 17.7381 26.4447 18.7134 26.0678 19.6233C25.6909 20.5332 25.1384 21.36 24.442 22.0565C23.7455 22.7529 22.9187 23.3054 22.0088 23.6823C21.0989 24.0592 20.1236 24.2532 19.1387 24.2532V22.2443C19.8598 22.2443 20.5738 22.1022 21.24 21.8263C21.9062 21.5503 22.5116 21.1459 23.0215 20.636C23.5314 20.1261 23.9358 19.5207 24.2118 18.8545C24.4877 18.1883 24.6298 17.4743 24.6298 16.7532C24.6298 16.0321 24.4877 15.318 24.2118 14.6518C23.9358 13.9856 23.5314 13.3803 23.0215 12.8704C22.5116 12.3605 21.9062 11.956 21.24 11.6801C20.5738 11.4041 19.8598 11.2621 19.1387 11.2621V9.25317ZM21.3311 14.5363C20.7997 13.8955 20.053 13.4431 19.213 13.2532L19.1387 20.2532C19.9826 20.079 20.7387 19.6408 21.2836 19.0101C21.8285 18.3795 22.1299 17.5936 22.1385 16.781C22.1471 15.9684 21.8625 15.177 21.3311 14.5363Z"
                        fill="white"
                    />
                </svg>
                <Slider
                    min={0}
                    max={100}
                    value={volume}
                    onChange={volumeChange}
                    style={{ width: '119px' }}
                    tooltipVisible={false}
                />
                <svg
                    style={{ cursor: 'pointer' }}
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.5 7H23.9058H23.8979H20.0909C19.4884 7 19 7.48842 19 8.09091C19 8.6934 19.4884 9.18182 20.0909 9.18182H21.2652L18.3216 12.1253C17.8928 12.5542 17.8928 13.2495 18.3216 13.6784C18.7505 14.1072 19.4458 14.1072 19.8746 13.6784L22.8182 10.7348V11.9091C22.8182 12.5116 23.3066 13 23.9091 13C24.5116 13 25 12.5116 25 11.9091V8.0982V8.09807V7.5C25 7.22386 24.7761 7 24.5 7ZM7.5 25H8.09417H8.10212H11.9091C12.5116 25 13 24.5116 13 23.9091C13 23.3066 12.5116 22.8182 11.9091 22.8182H10.7348L13.6784 19.8746C14.1072 19.4458 14.1072 18.7505 13.6784 18.3216C13.2495 17.8928 12.5542 17.8928 12.1254 18.3216L9.18182 21.2652V20.0909C9.18182 19.4884 8.6934 19 8.09091 19C7.48842 19 7 19.4884 7 20.0909V23.9018V23.9019V24.5C7 24.7761 7.22386 25 7.5 25Z"
                        fill="white"
                    />
                </svg>
            </Flex>
        </>
    )
}