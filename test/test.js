'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {
    var test = new Engine();
    assertEquals(test.check_length_board(),36);
    assertEquals(test.initialisation_board(),0);

};