import express from 'express';
import React from 'react';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import expressStaticGzip from 'express-static-gzip';
import { redirectToHTTPS } from 'express-http-to-https';
import { renderToString } from 'react-dom/server';

import actions from './actions';
import getStore from '../src/store/getStore';
import renderPage from '../index';

import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import App from '../src/App.jsx';

const ignoreHttpsHosts = [/localhost:(\d{4})/];

const rootPath = path.resolve(__dirname, '..');
const PORT = process.env.PORT || 3000;
const app = express();

// redirects
app.use(redirectToHTTPS(ignoreHttpsHosts, [], 301));

// static
app.get(/\.chunk\.(js|css)$/, expressStaticGzip(rootPath, {
    enableBrotli: true,
    orderPreference: ['br']
}));
app.use(compression());
app.use(express.static(rootPath));

app.use(bodyParser.json());
app.use(cookieParser());

// index
app.get('*', function (req, res) {
    const store = getStore();

    Promise.all(actions.map(actionFunc => {
        return actionFunc(req)
            .then(action => store.dispatch(action));
    }))
        .then(() => {
            const context = {};
            const html = renderToString(
                <Provider store={store}>
                    <StaticRouter
                        location={req.originalUrl}
                        context={context}
                    >
                        <App />
                    </StaticRouter>
                </Provider>
            );
            const helmet = Helmet.renderStatic();
            const preloadedState = store.getState();
            const page = renderPage(html, helmet, preloadedState);

            res.send(page);
        });
});

app.listen(PORT, function () {
    console.log('listening on port', PORT); // eslint-disable-line no-console
});
