'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {
    var test = new Engine();
    test.initialisation();
    assertEquals(test.check_length_board(),36);
    assertEquals(test.juxtaposition(),0);

};

PalettoTestCase.prototype.testStory2= function(){
    var test = new Engine();
    test.initialisation();
    var line= "A";
    var column =6;
    assertEquals(test.code_ascii(line),0);
    assertEquals(test.get_player(), 1);
    assertEquals(test.remove_piece(line,column,1),true);
    };

PalettoTestCase.prototype.testStory3= function(){
  var test = new Engine();
    test.initialisation();
    var line= "A";
    var column =6;
    assertEquals(test.code_ascii(line),0);
    assertEquals(test.get_player(), 1);
    assertEquals(test.remove_piece(line,column,1),true);
    assertEquals(test.piece_number_player(1), 1);
    assertEquals(test.get_piece_tray(),35);
};

