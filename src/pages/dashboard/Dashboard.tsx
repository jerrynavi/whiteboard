import React, { FC } from 'react';
import { connect } from 'react-redux';
import { State } from '../../interfaces/state.interface';
import { AnyAction } from '@reduxjs/toolkit';
import { Redirect } from 'react-router-dom';

type Props = {
    dispatch(action: AnyAction): void;
} & State;

const Dashboard: FC<Props> = (props) => {

    const { isLoggedIn } = props.app;

    return (isLoggedIn)
        ? (
            <div>
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
