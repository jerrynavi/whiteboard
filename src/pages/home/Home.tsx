import React, { FC } from 'react';
import styles from './Home.module.scss';
import { Row, Col, Typography, Button, Divider } from 'antd';
import { RouteComponentProps } from 'react-router';
import { AnyAction } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { constants } from '../../utils';

const { Title, Text } = Typography;

const appFeatures: {
    title: string;
    description: string;
    imageSrc?: string;
}[] = [
    {
        title: 'Draw or Doodle',
        description: 'Get creative or just have fun. Goof around or create a masterpiece. It\'s entirely up to you.',
        imageSrc: '/assets/happy_moment.svg',
    },
    {
        title: 'Input Agnostic',
        description: 'Use a pen, your fingers or a mouse? No problem. Experience no limits with full support for all forms of input.',
        imageSrc: '/assets/creativity.svg',
    },
    {
        title: 'Share and Download',
        description: 'You can export a PNG image to your computer or create a read-only, shareable link for others to access.',
        imageSrc: '/assets/share_link.svg',
    },
    {
        title: 'Collaborate',
        description: 'Add a friend or a colleague and create in real-time.',
        imageSrc: '/assets/collaboration.svg',
    },
];

interface HomeProps extends RouteComponentProps {
    dispatch(args: AnyAction): void;
}

const Home: FC<Partial<HomeProps>> = () => {

    return (
        <>
            <Helmet>
                <title>
                    Whiteboard - {constants.DEFAULT_TITLE}
                </title>
            </Helmet>

            <div className={styles.home}>

                {/* WELCOME */}

                <div className={styles.welcome}>
                    <Row align="middle" style={{ height: '100vh' }}>
                        <Col span={24}>
                            <Row gutter={[0,64]}>
                                <Col
                                    xs={{ span: 24 }} lg={{ span: 12 }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <div className={styles.text}>
                                        <Title level={1}>
                                            Whiteboard
                                        </Title>
                                        <Text>
                                            Create, collaborate in real-time and share your ideas.
                                        </Text>
                                    </div>
                                </Col>
                                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                                    <div className={styles.image + ' shadow-md p-4 text-center'}>
                                        <img src="/assets/character_drawing.svg" alt="character drawing" />
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <div className="text-center">
                                        <Link to="/login">
                                            <Button type="primary" shape="round" className="hover:shadow-md">
                                                Get started
                                            </Button>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

                {/* FEATURES */}

                <div className={styles.features}>
                    <div className="text-center">
                        <Divider>
                            <Title level={1}>
                                Features
                            </Title>
                        </Divider>
                    </div>

                    <Row gutter={[12,24]} justify="center">
                        {appFeatures.map((feature, idx) => (
                            <Col xs={{ span: 24 }} lg={{ span: 8 }} key={idx}>
                                <div className={styles.feature}>
                                    <div className="text-center p-8">
                                        {(feature.imageSrc) && (
                                            <img src={feature.imageSrc} alt={feature.title} />
                                        )}
                                        <Title level={3} className="my-4">
                                            {feature.title}
                                        </Title>
                                        <Text className="my-1">
                                            {feature.description}
                                        </Text>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>

            </div>
        </>
    );
};

export default connect()(Home);