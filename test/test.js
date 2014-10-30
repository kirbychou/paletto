'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {
    var test = new Engine();
    assertEquals(test.check_length_board(),36);
    assertEquals(test.initialisation_board(),0);

};

PalettoTestCase.prototype.testStory2= function(){
  var test = new Engine();
    var line= "A";
    var column =6;
    assertEquals(test.code_ascii(line),0);
    assertEquals(test.get_player(), 1); // joeuur est le joueur 1
    assertEquals(test.remove_piece(line,column),true);
    };

