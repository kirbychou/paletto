'use strict';

var Engine;
Engine = function () {

// private attributes and methods
    var board = new Array(6);
    var line, column;
    for (line = 1; line < 6; line = line + 1) {
        board[line] = new Array(6);
    }

    this.check_length_board = function () {
        return board.length* board.length;
    };

    this.initialisation_board = function () {
        board[0][1] = "Black";
        board[0][2] = "Green";
        board[0][3] = "White";
        board[0][4] = "Blue";
        board[0][5] = "Red";
        board[0][6] = "White";

        board[1][1] = "Yellow";
        board[1][2] = "White";
        board[1][3] = "green";
        board[1][4] = "Red";
        board[1][5] = "Yellow";
        board[1][6] = "Blue";

        board[2][1] = "Blue";
        board[2][2] = "Yellow";
        board[2][3] = "Blue";
        board[2][4] = "white";
        board[2][5] = "Black";
        board[2][6] = "Red";

        board[3][1] = "Red";
        board[3][2] = "Black";
        board[3][3] = "Red";
        board[3][4] = "Green";
        board[3][5] = "Blue";
        board[3][6] = "White";

        board[4][1] = "white";
        board[4][2] = "green";
        board[4][3] = "Yellow";
        board[4][4] = "Black";
        board[4][5] = "Yellow";
        board[4][6] = "Green";

        board[5][1] = "Yellow";
        board[5][2] = "Blue";
        board[5][3] = "Black";
        board[5][4] = "Red";
        board[5][5] = "Green";
        board[5][6] = "Black";


        var  juxtaposition =0;
        var column = 1;
        var line = 1;
        do {

            if (board[line][column] == board[line + 1][column]
                || board[line][column] == board[line - 1][column]
                || board[line][column] == board[line][column+1]
                || board[line][column] == board[line][column-1]) {
                juxtaposition = 1;
            }
            line = line +1;
            column = column +1;
        } while (juxtaposition == 0 || column < 4 && line <4);
        return juxtaposition;
    };
// public methods
};
