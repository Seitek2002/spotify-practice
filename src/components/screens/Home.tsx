import { Card, Col, Flex, Row, Typography } from 'antd'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { ITopTracks } from '../../types/TopTracks'
import { getRecommendations, getTopTracks } from '../../services/spotifyApi'
import { IRecommendation } from '../../types/Reccomandation'

const Home = ({setSong}) => {

    const [topTracks, setTopTracks] = React.useState<ITopTracks | null>(null)
    const [recommendationTracks, setRecommendationTracks] = React.useState<IRecommendation | null>(null)

    const getData = async () => {
        const hash = window.location.hash
        const _token = hash.split('&')[0].split('=')[1]
        if (_token) {
            setTopTracks(await getTopTracks(_token))
            setRecommendationTracks(await getRecommendations(_token))
        }
    }

    React.useEffect(() => {
        getData()
    }, [])

    const rowStyles: React.CSSProperties = {
        width: '100%',
        justifyContent: 'space-between',
        gap: '20px',
    }

    const rowCards: React.CSSProperties = {
        width: '227px',
        background: 'rgba(255, 255, 255, 0.1)',
        border: 'none',
        color: '#fff'
    }

    return (
        <div className="home">
            <Typography.Title>Good afternoon</Typography.Title>
            <Flex wrap="wrap" style={{ width: '100%', gap: '20px' }}>
                <Row style={rowStyles}>
                    <Col span={7}>
                        <Flex align="center" className="home__card">
                            <img src="/assets/img/mix-example.png" alt="" />
                            <Typography.Text>Chill Mix</Typography.Text>
                        </Flex>
                    </Col>
                    <Col span={7}>
                        <Flex align="center" className="home__card">
                            <img src="/assets/img/mix-example.png" alt="" />
                            <Typography.Text>Chill Mix</Typography.Text>
                        </Flex>
                    </Col>
                    <Col span={7}>
                        <Flex align="center" className="home__card">
                            <img src="/assets/img/mix-example.png" alt="" />
                            <Typography.Text>Chill Mix</Typography.Text>
                        </Flex>
                    </Col>
                </Row>
                <Row style={rowStyles}>
                    <Col span={7}>
                        <Flex align="center" className="home__card">
                            <img src="/assets/img/mix-example.png" alt="" />
                            <Typography.Text>Chill Mix</Typography.Text>
                        </Flex>
                    </Col>
                    <Col span={7}>
                        <Flex align="center" className="home__card">
                            <img src="/assets/img/mix-example.png" alt="" />
                            <Typography.Text>Chill Mix</Typography.Text>
                        </Flex>
                    </Col>
                    <Col span={7}>
                        <Flex align="center" className="home__card">
                            <img src="/assets/img/mix-example.png" alt="" />
                            <Typography.Text>Chill Mix</Typography.Text>
                        </Flex>
                    </Col>
                </Row>
            </Flex>
            <Flex vertical>
                <Flex justify="space-between" align="center">
                    <Typography.Title level={2} style={{ color: '#fff', fontWeight: '700' }}>Your top mixes</Typography.Title>
                    <Link to="/" style={{ color: '#ADADAD', fontWeight: '700' }}>
                        SEE ALL
                    </Link>
                </Flex>
                <Flex justify="space-between">
                    <Card style={rowCards} onClick={() => setSong(topTracks?topTracks.items[0]:null)}>
                        <img src={topTracks?topTracks.items[0].album.images[1].url:"/assets/img/cards-img-example.png"} height={182} alt="" />
                        <Typography.Title level={3} style={{ color: '#fff', fontWeight: '700' }}>
                            {topTracks?topTracks.items[0].name:"Chill mixer"}
                        </Typography.Title>
                        <Typography.Text style={{ color: '#ADADAD' }}>
                            {topTracks?topTracks.items[0].artists[0].name:"Julia Wolf, Khalid, ayokay and more"}
                        </Typography.Text>
                    </Card>
                    <Card style={rowCards} onClick={() => setSong(topTracks?topTracks.items[1]:null)}>
                    <img src={topTracks?topTracks.items[1].album.images[1].url:"/assets/img/cards-img-example.png"} height={182} alt="" />
                        <Typography.Title level={3} style={{ color: '#fff', fontWeight: '700' }}>
                            {topTracks?topTracks.items[1].name:"Chill mixer"}
                        </Typography.Title>
                        <Typography.Text style={{ color: '#ADADAD' }}>
                            {topTracks?topTracks.items[1].artists[0].name:"Julia Wolf, Khalid, ayokay and more"}
                        </Typography.Text>
                    </Card>
                    <Card style={rowCards} onClick={() => setSong(topTracks?topTracks.items[2]:null)}>
                    <img src={topTracks?topTracks.items[2].album.images[1].url:"/assets/img/cards-img-example.png"} height={182} alt="" />
                        <Typography.Title level={3} style={{ color: '#fff', fontWeight: '700' }}>
                            {topTracks?topTracks.items[2].name:"Chill mixer"}
                        </Typography.Title>
                        <Typography.Text style={{ color: '#ADADAD' }}>
                            {topTracks?topTracks.items[2].artists[0].name:"Julia Wolf, Khalid, ayokay and more"}
                        </Typography.Text>
                    </Card>
                    <Card style={rowCards} onClick={() => setSong(topTracks?topTracks.items[3]:null)}>
                    <img src={topTracks?topTracks.items[3].album.images[1].url:"/assets/img/cards-img-example.png"} height={182} alt="" />
                        <Typography.Title level={3} style={{ color: '#fff', fontWeight: '700' }}>
                            {topTracks?topTracks.items[3].name:"Chill mixer"}
                        </Typography.Title>
                        <Typography.Text style={{ color: '#ADADAD' }}>
                            {topTracks?topTracks.items[3].artists[0].name:"Julia Wolf, Khalid, ayokay and more"}
                        </Typography.Text>
                    </Card>
                </Flex>
            </Flex>
            <Flex vertical>
                <Flex justify="space-between" align="center">
                    <Typography.Title level={2} style={{ color: '#fff', fontWeight: '700' }}>Recommendations</Typography.Title>
                    <Link to="/" style={{ color: '#ADADAD', fontWeight: '700' }}>
                        SEE ALL
                    </Link>
                </Flex>
                <Flex justify="space-between">
                    <Card style={rowCards} onClick={() => setSong(recommendationTracks?recommendationTracks.tracks[0]:null)}>
                        <img src={recommendationTracks?recommendationTracks.tracks[0].album.images[1].url:"/assets/img/cards-img-example.png"} height={182} alt="" />
                        <Typography.Title level={3} style={{ color: '#fff', fontWeight: '700' }}>
                            {recommendationTracks?recommendationTracks.tracks[0].name:"Chill mixer"}
                        </Typography.Title>
                        <Typography.Text style={{ color: '#ADADAD' }}>
                            {recommendationTracks?recommendationTracks.tracks[0].artists[0].name:"Julia Wolf, Khalid, ayokay and more"}
                        </Typography.Text>
                    </Card>
                    <Card style={rowCards} onClick={() => setSong(recommendationTracks?recommendationTracks.tracks[1]:null)}>
                        <img src={recommendationTracks?recommendationTracks.tracks[1].album.images[1].url:"/assets/img/cards-img-example.png"} height={182} alt="" />
                        <Typography.Title level={3} style={{ color: '#fff', fontWeight: '700' }}>
                            {recommendationTracks?recommendationTracks.tracks[1].name:"Chill mixer"}
                        </Typography.Title>
                        <Typography.Text style={{ color: '#ADADAD' }}>
                            {recommendationTracks?recommendationTracks.tracks[1].artists[0].name:"Julia Wolf, Khalid, ayokay and more"}
                        </Typography.Text>
                    </Card>
                    <Card style={rowCards} onClick={() => setSong(recommendationTracks?recommendationTracks.tracks[2]:null)}>
                        <img src={recommendationTracks?recommendationTracks.tracks[2].album.images[1].url:"/assets/img/cards-img-example.png"} height={182} alt="" />
                        <Typography.Title level={3} style={{ color: '#fff', fontWeight: '700' }}>
                            {recommendationTracks?recommendationTracks.tracks[2].name:"Chill mixer"}
                        </Typography.Title>
                        <Typography.Text style={{ color: '#ADADAD' }}>
                            {recommendationTracks?recommendationTracks.tracks[2].artists[0].name:"Julia Wolf, Khalid, ayokay and more"}
                        </Typography.Text>
                    </Card>
                    <Card style={rowCards} onClick={() => setSong(recommendationTracks?recommendationTracks.tracks[3]:null)}>
                        <img src={recommendationTracks?recommendationTracks.tracks[3].album.images[1].url:"/assets/img/cards-img-example.png"} height={182} alt="" />
                        <Typography.Title level={3} style={{ color: '#fff', fontWeight: '700' }}>
                            {recommendationTracks?recommendationTracks.tracks[3].name:"Chill mixer"}
                        </Typography.Title>
                        <Typography.Text style={{ color: '#ADADAD' }}>
                            {recommendationTracks?recommendationTracks.tracks[3].artists[0].name:"Julia Wolf, Khalid, ayokay and more"}
                        </Typography.Text>
                    </Card>
                </Flex>
            </Flex>
        </div>
    )
}

export default Home
