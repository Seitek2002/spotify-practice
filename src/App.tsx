import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Content, Footer } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import { Flex, Layout, Slider, Typography } from 'antd'
import { HomeOutlined, SearchOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { HeartFilled, RedoOutlined, StepBackwardFilled, PlayCircleFilled, StepForwardFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import HomePage from './page/HomePage'
import LibraryPage from './page/LibraryPage'
import LikedSongsPage from './page/LikedSongsPage'
import SearchPage from './page/SearchPage'
import Login from './page/Login'
import { SpotifyPlayerState } from './types/CurrentlyPlayingTrack'
import { getCurrentSong, getUsersData, pausePlayback, playResumePlayback } from "./services/spotifyApi"
import { IUser } from './types/Users'
import Player from './components/Player'

const contentStyle: React.CSSProperties = {
    background: '#000',
}

const mainStyle: React.CSSProperties = {
    background: 'linear-gradient(180deg, #3333A3 20%, #121212 70%)',
    padding: '0 42px',
    overflow: 'auto',
    height: '100vh',
    paddingBottom: '200px',
}

interface IMainLink {
    url: string
    icon: React.ReactElement
    text: string
}

function App() {
    const [token, setToken] = React.useState('')
    const [usersData, setUsersData] = React.useState<IUser | null>(null)
    const [currentSong, setCurrentSong] = React.useState<SpotifyPlayerState | null>(null)
    const mainLinks: IMainLink[] = [
        {
            url: '/',
            icon: <HomeOutlined style={{ color: 'white', fontSize: '32px' }} />,
            text: 'Home',
        },
        {
            url: '/search',
            icon: <SearchOutlined style={{ color: 'white', fontSize: '32px' }} />,
            text: 'Search',
        },
        {
            url: '/library',
            icon: <UnorderedListOutlined style={{ color: 'white', fontSize: '32px' }} />,
            text: 'Your Library',
        },
    ]

    const getData = async () => {
        const hash = window.location.hash
        const _token = hash.split('&')[0].split('=')[1]
        if (_token) {
            localStorage.setItem('token', _token)
            setToken(_token)
            setUsersData(await getUsersData(_token))
            setCurrentSong(await getCurrentSong(_token))
        }
    }

    React.useEffect(() => {
        getData()
    }, [])

    return (
        <>
            {!token ? (
                <Login />
            ) : (
                <Layout style={{ height: '100vh' }}>
                    <Sider style={contentStyle} width="15%" className="sidebar">
                        <div className="sidebar-nav">
                            {mainLinks.map(link => (
                                <Link to={link.url} key={link.url} className="sidebar-link">
                                    {link.icon}
                                    <Typography.Text>{link.text}</Typography.Text>
                                </Link>
                            ))}
                        </div>
                        {currentSong && (
                            <div className="sidebar-info">
                                <img
                                    src={currentSong.item.album.images[1].url ?? '/assets/img/current-img.jpg'}
                                    alt=""
                                />
                                <Flex align="center" style={{ gap: '32px', padding: '28px 0 33px 18px' }}>
                                    <Flex vertical>
                                        <Typography.Text className="song-name">
                                            {currentSong.item.name ?? 'Play It Safe'}
                                        </Typography.Text>
                                        <Typography.Text className="song-author">
                                            {currentSong.item.artists[0].name ?? 'ne igraet'}
                                        </Typography.Text>
                                    </Flex>
                                    <div>
                                        <HeartFilled style={{ color: '#63CF6C', fontSize: '24px' }} />
                                    </div>
                                </Flex>
                            </div>
                        )}
                    </Sider>
                    <Layout>
                        <Content style={mainStyle}>
                            <Routes>
                                <Route path="/" element={<HomePage usersData={usersData} />} />
                                <Route path="/search" element={<SearchPage usersData={usersData} />} />
                                <Route path="/library" element={<LibraryPage usersData={usersData} />} />
                                <Route path="/liked-songs" element={<LikedSongsPage usersData={usersData} />} />
                            </Routes>
                        </Content>
                        <Footer style={{ background: '#181818', zIndex: 100 }}>
                            <Flex className="player" justify="space-around" align="center">
                                <Player/>
                            </Flex>
                        </Footer>
                    </Layout>
                </Layout>
            )}
        </>
    )
}

export default App
