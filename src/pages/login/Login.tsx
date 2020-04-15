import React, { FC, Suspense, lazy } from 'react';
import { Row, Col, Typography } from 'antd';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Progress from 'react-topbar-progress-indicator';
import styles from './Login.module.scss';

const { Title, Text } = Typography;

const LoginForm = lazy(() => import('../../components/login-form/LoginForm'));
const LoginSidebar = lazy(() => import('../../components/login-sidebar/LoginSidebar'));

export const Login: FC = () => {

    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>

            <Row
                align="middle"
                style={{
                    height: '100%',
                }}
            >

                {/* Sidebar */}
                <Col
                    xs={{ span: 24, order: 1 }}
                    md={{ span: 12, order: 0 }}
                    style={{ height: '100%' }}
                >
                    <div className={styles.sidebar}>
                        <div className="py-16 px-4">
                            <Suspense fallback={<Progress />}>
                                <LoginSidebar />
                            </Suspense>
                        </div>
                    </div>
                </Col>

                {/* Form */}
                <Col xs={{ span: 24, order: 0 }} md={{ span: 12, order: 1 }} style={{ height: '100%' }}>
                    <div className={styles.form}>
                        <div className="p-4 py-16 text-center">
                            <div className="my-8">
                                <Title level={1}>
                                    Whiteboard
                                    <Text style={{ color: 'var(--primary-color)'}}>
                                        .dev
                                    </Text>
                                </Title>
                            </div>
                            <Suspense fallback={<Progress />}>
                                <LoginForm />
                            </Suspense>
                        </div>
                    </div>
                </Col>
            </Row>

        </>
    );
};

export default connect()(Login);
