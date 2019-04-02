'use strict';

import ExampleService from './service';

class ExampleController {
    getPoints (req, res) {
        ExampleService.getPoints(req, res);
    }
}

export default ExampleController;
