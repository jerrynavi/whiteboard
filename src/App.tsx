import React, { FC, Suspense, lazy, useEffect } from 'react';
import { ConfigProvider } from 'antd';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import Progress from 'react-topbar-progress-indicator';
import { store } from './store';
import { actions } from './utils';

const Home = lazy(() => import('./pages/home/Home'));
const Login = lazy(() => import('./pages/login/Login'));
const ErrorPage = lazy(() => import('./pages/error/ErrorPage'));

const useLocationChanges = (): void => {
    const location = useLocation();

    useEffect(() => {
        let url = (location) ? location.pathname : '/';
        url = url + new URLSearchParams(location.search);

        store.dispatch({
            type: actions.UPDATE_CURRENT_URL,
            payload: url,
        });
    }, [location]);
};

const Routes: FC = () => {

    useLocationChanges();

    return (
        <Suspense fallback={<Progress />}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path={['/login', '/login?action=signup']} component={Login} />

                <Route path="*" component={ErrorPage} />
            </Switch>
        </Suspense>
    );

};

const App: FC = () => {


    return (
        <>
            <ConfigProvider
                componentSize="large"
            >
                <Router>
                    <Routes />
                </Router>
            </ConfigProvider>
        </>
    );
};

export default App;
