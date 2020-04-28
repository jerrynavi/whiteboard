import React, { FC } from 'react';
import { connect } from 'react-redux';
import { State } from '../../interfaces/state.interface';
import { AnyAction } from '@reduxjs/toolkit';
import { Redirect, Link } from 'react-router-dom';
import BoardPreview from '../../components/board-preview/BoardPreview';
import { Row, Col, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Title } = Typography;

type Props = {
    dispatch(action: AnyAction): void;
} & State;

const Dashboard: FC<Props> = (props) => {

    const { isLoggedIn } = props.app;

    return (isLoggedIn)
        ? (
            <div className="p-8">
                <Row gutter={[12,24]}>
                    <Col xs={12} md={8} lg={6}>
                        <BoardPreview>
                            <div
                                className="cursor-pointer flex justify-center items-center"
                                style={{ height: '100%', width: '100%' }}
                            >
                                <Link to="/editor">
                                    <Title level={3}>
                                        <div className="flex flex-col items-center justify-center">
                                            <PlusOutlined />
                                            <span className="mt-4">
                                                Create new
                                            </span>
                                        </div>
                                    </Title>
                                </Link>
                            </div>
                        </BoardPreview>
                    </Col>
                </Row>
            </div>
        )
        : (
            <Redirect to="/login" />
        );
};

const mapProps = (state: State): State => {
    return {
        ...state,
    };
};

export default connect(mapProps)(Dashboard);
