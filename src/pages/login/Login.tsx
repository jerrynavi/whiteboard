import React, { FC, Suspense, lazy } from 'react';
import { Row, Col, Typography } from 'antd';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Progress from 'react-topbar-progress-indicator';
import styles from './Login.module.scss';
import { State } from '../../interfaces/state.interface';
import { Link } from 'react-router-dom';

const SignupForm = lazy(() => import('../../components/signup-form/SignupForm'));
const LoginForm = lazy(() => import('../../components/login-form/LoginForm'));
const LoginSidebar = lazy(() => import('../../components/login-sidebar/LoginSidebar'));

const { Title, Text } = Typography;

const LOGIN_URL = '/login';
const SIGNUP_URL = '/login?action=signup';

const RenderSignupLink = (): JSX.Element => (
    <Link to={{
        pathname: SIGNUP_URL,
    }}>
        <Text type="secondary">
            Create an account
        </Text>
    </Link>
);

const RenderLoginLink = (): JSX.Element => (
    <Link to={{
        pathname: LOGIN_URL,
    }}>
        <Text type="secondary">
            I already have an account
        </Text>
    </Link>
);

interface Props {
    currentUrl?: string;
}

export const Login: FC<Props> = (props) => {

    const { currentUrl } = props;

    return (
        <>
            <Helmet>
                <title>
                    {(currentUrl === LOGIN_URL)
                        ? 'Login'
                        : (currentUrl === SIGNUP_URL)
                            ? 'Create account'
                            : ''
                    }
                </title>
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
                        <div className="flex flex-row p-8">
                            <div className="ml-auto">
                                {(currentUrl !== SIGNUP_URL) && (
                                    <RenderSignupLink />
                                )}
                                {(currentUrl !== LOGIN_URL) && (
                                    <RenderLoginLink />
                                )}
                            </div>
                        </div>
                        <div className="p-4 py-16 text-center">
                            <div className="my-8">
                                <Title level={1}>
                                    Whiteboard
                                    <Text style={{ color: 'var(--primary-color)'}}>
                                        .dev
                                    </Text>
                                </Title>
                            </div>
                            <div
                                style={{
                                    maxWidth: '400px',
                                    margin: '0 auto',
                                }}
                            >
                                <Suspense fallback={<Progress />}>
                                    {(currentUrl === LOGIN_URL) && (
                                        <LoginForm />
                                    )}

                                    {(currentUrl === SIGNUP_URL) && (
                                        <SignupForm />
                                    )}
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

        </>
    );
};

const mappedProps = (state: State): { currentUrl: string } => {
    return {
        currentUrl: state.app.currentUrl,
    };
};

export default connect(mappedProps)(Login);
