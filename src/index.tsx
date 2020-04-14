import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import Progress from 'react-topbar-progress-indicator';
import { ConfigProvider } from 'antd';

const Home = lazy(() => import('./pages/home/Home'));
const ErrorPage = lazy(() => import('./pages/error/ErrorPage'));


function App(): JSX.Element {

    return (
        <>
            <ConfigProvider
                componentSize="large"
            >
                <Router>
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="*" component={ErrorPage} />
                        </Switch>
                    </Suspense>
                </Router>
            </ConfigProvider>
        </>
    );
}


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
