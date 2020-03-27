import React, { Component } from 'react';
import styles from './Home.module.scss';
import Helmet from 'react-helmet';
import { Row, Col } from 'antd';
import { RouteComponentProps } from 'react-router';
import { AnyAction } from '@reduxjs/toolkit';
import { connect } from 'react-redux';

interface HomeProps extends RouteComponentProps {
    dispatch(args: AnyAction): void;
}

class Home extends Component<HomeProps> {

    componentDidMount = (): void => {
        // to do
    }

    render(): JSX.Element {
        return (
            <>
                <Helmet>
                    <title>React Redux Template</title>
                </Helmet>
                <div className={styles.home}>
                    <Row>
                        <Col lg={{ span: 12, offset: 6 }}>
                            {/* to do */}
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default connect()(Home);