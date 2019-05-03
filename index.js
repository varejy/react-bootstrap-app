export default function (html, helmet, preloadedState = {}) {
    return `
    <!doctype html>
    <html lang='ru'>
        <head>
            <meta charset="utf-8">
            <meta http-equiv='x-ua-compatible' content='ie=edge'>
            <meta name='viewport' content='width=device-width, initial-scale=1'>
            <title>${helmet.title.toString()}</title>
            ${helmet.meta.toString()}
            <link rel='shortcut icon' href='/client/images/favicon.ico' type='image/png'>
            <link rel='stylesheet' type='text/css' href='/public/app.chunk.css'>
        </head>
        <body>
            <div id='app'>${html}</div>
            <script>
                // WARNING: See the following for security issues around embedding JSON in HTML:
                // http://redux.js.org/recipes/ServerRendering.html#security-considerations
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\\\\\\\\u003c')}
            </script>
            <script src='/public/vendor.chunk.js' defer='defer'></script>
            <script src='/public/app.chunk.js' defer='defer'></script>
        </body>
    </html>`;
}
