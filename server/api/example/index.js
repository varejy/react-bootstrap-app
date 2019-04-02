'use strict';

import express from 'express';
import ControllerClass from './controller';

const controller = new ControllerClass();
const router = express.Router();

router.route('/get-points')
    .get(controller.getPoints.bind(controller));

export default router;
