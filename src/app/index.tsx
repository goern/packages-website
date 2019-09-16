import * as React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from '@app/Layout/Layout';
import { Routes } from '@app/routes';
import '@app/app.css';

const App: React.FunctionComponent = () => {
    return (
        <Router>
            <Layout>
                <Routes />
            </Layout>
        </Router>
    );
};

export { App };