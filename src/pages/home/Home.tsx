import React, { Component } from 'react';
import styles from './Home.module.scss';
import Helmet from 'react-helmet';
import faker from 'faker';
import { Typography, Button, Row, Col } from 'antd';
import moment from 'moment';
import { RouteComponentProps } from 'react-router';
import { State } from '../../interfaces/State';
import { AnyAction } from '@reduxjs/toolkit';
import { actions } from '../../utils';
import { connect } from 'react-redux';

const { Title } = Typography;

interface User {
    name: string;
    age: string;
    nickname: string;
}

interface HomeProps extends RouteComponentProps {
    dispatch(args: AnyAction): void;
    data: any;
}

class Home extends Component<HomeProps> {

    generateFakeUser = (): User => {
        const user: User = {
            name: faker.name.firstName() + ' ' + faker.name.lastName(),
            nickname: faker.internet.userName(),
            age: moment(faker.date.past(800)).format('MMMM DD, YYYY')
        };

        return user;
    }

    updateData = (): void => {
        this.props.dispatch({
            type: actions.CUSTOM_DATA_UPDATE,
            payload: this.generateFakeUser()
        });
    }

    componentDidMount = (): void => {
        this.updateData();
    }

    render(): JSX.Element {
        const { data }: { data: User } = this.props;
        return (
            <>
                <Helmet>
                    <title>React Redux Template</title>
                </Helmet>
                <div className={styles.home}>
                    <Row>
                        <Col lg={{ span: 12, offset: 6 }}>
                            <Title level={3}>Hello {data?.nickname}!</Title>
                            <p>From today, you shall be called {data?.name}. Also you were born on {data?.age}</p>
                            <Button type="primary" shape="round" size="large" onClick={this.updateData}>Change details</Button>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

const mapProps = (state: State): { data: any } => {
    return {
        ...state
    };
}; 

export default connect(mapProps)(Home);