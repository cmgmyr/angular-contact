'use strict';

/* jasmine specs for controllers go here */

describe('contactApp controllers module', function() {
    'use strict';

    var app;

    beforeEach(function() {
        app = angular.module('contactControllers');
    });

    it('should be defined', function() {
        expect(app).toBeDefined();
    });
});
