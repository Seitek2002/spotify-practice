import { Card, Col, Flex, Row, Typography } from 'antd'
import * as React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
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
                    <Card style={rowCards}>
                        <img src="/assets/img/cards-img-example.png" alt="" />
                        <Typography.Title level={3} style={{ color: '#fff', fontWeight: '700' }}>
                            Chill Mix
                        </Typography.Title>
                        <Typography.Text style={{ color: '#ADADAD' }}>
                            Julia Wolf, Khalid, ayokay and more
                        </Typography.Text>
                    </Card>
                    <Card style={rowCards}>
                        <img src="/assets/img/cards-img-example.png" alt="" />
                        <Typography.Title level={3} style={{ color: '#fff', fontWeight: '700' }}>
                            Chill Mix
                        </Typography.Title>
                        <Typography.Text style={{ color: '#ADADAD' }}>
                            Julia Wolf, Khalid, ayokay and more
                        </Typography.Text>
                    </Card>
                    <Card style={rowCards}>
                        <img src="/assets/img/cards-img-example.png" alt="" />
                        <Typography.Title level={3} style={{ color: '#fff', fontWeight: '700' }}>
                            Chill Mix
                        </Typography.Title>
                        <Typography.Text style={{ color: '#ADADAD' }}>
                            Julia Wolf, Khalid, ayokay and more
                        </Typography.Text>
                    </Card>
                    <Card style={rowCards}>
                        <img src="/assets/img/cards-img-example.png" alt="" />
                        <Typography.Title level={3} style={{ color: '#fff', fontWeight: '700' }}>
                            Chill Mix
                        </Typography.Title>
                        <Typography.Text style={{ color: '#ADADAD' }}>
                            Julia Wolf, Khalid, ayokay and more
                        </Typography.Text>
                    </Card>
                </Flex>
            </Flex>
            <Flex vertical>
                <Flex justify="space-between" align="center">
                    <Typography.Title level={2} style={{ color: '#fff', fontWeight: '700' }}>Your top mixes</Typography.Title>
                    <Link to="/" style={{ color: '#ADADAD', fontWeight: '700' }}>
                        SEE ALL
                    </Link>
                </Flex>
                <Flex justify="space-between">
                    <Card style={rowCards}>
                        <img src="/assets/img/cards-img-example.png" alt="" />
                        <Typography.Title level={3} style={{ color: '#fff', fontWeight: '700' }}>
                            Chill Mix
                        </Typography.Title>
                        <Typography.Text style={{ color: '#ADADAD' }}>
                            Julia Wolf, Khalid, ayokay and more
                        </Typography.Text>
                    </Card>
                    <Card style={rowCards}>
                        <img src="/assets/img/cards-img-example.png" alt="" />
                        <Typography.Title level={3} style={{ color: '#fff', fontWeight: '700' }}>
                            Chill Mix
                        </Typography.Title>
                        <Typography.Text style={{ color: '#ADADAD' }}>
                            Julia Wolf, Khalid, ayokay and more
                        </Typography.Text>
                    </Card>
                    <Card style={rowCards}>
                        <img src="/assets/img/cards-img-example.png" alt="" />
                        <Typography.Title level={3} style={{ color: '#fff', fontWeight: '700' }}>
                            Chill Mix
                        </Typography.Title>
                        <Typography.Text style={{ color: '#ADADAD' }}>
                            Julia Wolf, Khalid, ayokay and more
                        </Typography.Text>
                    </Card>
                    <Card style={rowCards}>
                        <img src="/assets/img/cards-img-example.png" alt="" />
                        <Typography.Title level={3} style={{ color: '#fff', fontWeight: '700' }}>
                            Chill Mix
                        </Typography.Title>
                        <Typography.Text style={{ color: '#ADADAD' }}>
                            Julia Wolf, Khalid, ayokay and more
                        </Typography.Text>
                    </Card>
                </Flex>
            </Flex>
        </div>
    )
}

export default Home
