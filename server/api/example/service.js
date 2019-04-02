export function getPoints (req, res) {
    return res.status(200).send([
        'React, Redux, NodeJs',
        'SPA, SSR'
    ]);
}

export default {
    getPoints
};
