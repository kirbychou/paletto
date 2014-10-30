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
    var column= "A";
    var line =6;
    assertEquals(test.code_ascii(column),0);
    assertEquals(test.get_player(), 1);
    assertEquals(test.remove_piece(line,column,1),true);
    };

PalettoTestCase.prototype.testStory3= function(){
  var test = new Engine();
    test.initialisation();
    var column= "A";
    var line =6;
    assertEquals(test.code_ascii(column),0);
    assertEquals(test.get_player(), 1);
    assertEquals(test.remove_piece(line,column,1),true);
    assertEquals(test.piece_number_player(1), 1);
    assertEquals(test.get_piece_tray(),35);
};

PalettoTestCase.prototype.testStory4= function(){
    var test = new Engine();
    test.initialisation();
    test.remove_corner(5,0);
    test.add_corner(5,0);
    assertEquals(test.choice(),"Blue White Black White Black ");
    var line = 1 ;
    var column ="A";
    assertEquals(test.remove_piece(line,column,2),true);
    line = 6;
    column = "F";
    assertEquals(test.remove_piece(line,column,2),true);
    assertEquals(test.piece_number_player(2), 2);
};


PalettoTestCase.prototype.testStory5= function(){
    var test = new Engine();
    test.initialisation();

    test.remove_corner(0,0);
    test.add_corner(0,0);

    test.remove_corner(1,0);
    test.add_corner(1,0);

    test.remove_corner(0,1);
    test.add_corner(0,1);

    test.remove_corner(2,0);
    test.add_corner(2,0);

    test.remove_corner(2,1);
    test.add_corner(2,1);

    test.remove_corner(1,1);
    test.add_corner(1,1);

    test.remove_corner(1,2);
    test.add_corner(1,2);

    test.remove_corner(0,2);
    test.add_corner(0,2);

    test.remove_corner(5,0);
    test.add_corner(5,0);

    test.remove_corner(4,0);
    test.add_corner(4,0);

    test.remove_corner(5,1);
    test.add_corner(5,1);

    test.remove_corner(5,5);
    test.add_corner(5,5);

    test.remove_corner(5,4);
    test.add_corner(5,4);

    test.remove_corner(5,3);
    test.add_corner(5,3);

    test.remove_corner(4,5);
    test.add_corner(4,5);

    test.remove_corner(4,4);
    test.add_corner(4,4);

    test.remove_corner(4,3);
    test.add_corner(4,3);

    test.remove_corner(3,3);
    test.add_corner(3,3);

    test.remove_corner(3,4);
    test.add_corner(3,4);

    test.remove_corner(3,5);
    test.add_corner(3,5);

    test.remove_corner(2,5);
    test.add_corner(2,5);

    test.remove_corner(1,5);
    test.add_corner(1,5);

    assertEquals(test.remove_corner(2,2),1);
};

PalettoTestCase.prototype.testStory6= function(){

};



