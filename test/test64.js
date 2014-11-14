/**
 * Created by lcarpent on 14/11/14.
 */
var PalettoTestCase1 = TestCase("PalettoTestCase1");
PalettoTestCase1.prototype.testStory8 = function () {
    var test = new Engine();
    test.initialisation_player();
    test.initialisation_board_bis();
    assertEquals(test.check_length_board(),64);
    assertEquals(test.juxtaposition(),0);
};