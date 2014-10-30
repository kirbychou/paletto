'use strict';

var Engine;
Engine = function () {

// private attributes and methods
    var board = new Array(6);
    var player1 = new Array(36);
    var player2 = new Array(36);
    var line, column;
    for (line = 0; line < 6; line = line + 1) {
        board[line] = new Array(6);
    }
    for(line = 0; line < 36; line = line +1){
        player1[line] = new Array(36);
        player2[line] = new Array(36);
    }
    var player = 1;
    var piece_player1 =0;
    var piece_player2 =0;

    this.get_player = function(){
        return player;
    };

    this.code_ascii = function (line) {
        return line.charCodeAt(0) - 65;
    };

    this.remove_piece= function (line, column, player){
        var done = false;
        line = this.code_ascii(line);
        if(board[line][column] != -1 ){
            done = true;
            var piece = board[line][column];
            board[line][column] = -1;
            if(player == 1){
                player1[piece_player1]= piece;
                piece_player1 ++;

            }else{
                player2[piece_player2]= piece;
                piece_player2 ++;
            }
        }
        return done;
    };

    this.check_length_board = function () {
        return ((board.length  )* (board.length ));
    };

    this.initialisation_board = function () {
        board[0][0] ="Black";
        board[0][1] ="Green";
        board[0][2] ="White";
        board[0][3] ="Blue";
        board[0][4] ="Red";
        board[0][5] ="White";

        board[1][0] ="Yellow";
        board[1][1] ="White";
        board[1][2] ="Green";
        board[1][3] ="Red";
        board[1][4] ="Yellow";
        board[1][5] ="Blue";

        board[2][0] ="Blue";
        board[2][1] ="Yellow";
        board[2][2] = "Blue";
        board[2][3] = "White";
        board[2][4] = "Black";
        board[2][5] = "Red";

        board[3][0] = "Red";
        board[3][1] = "Black";
        board[3][2] = "Red";
        board[3][3] = "Green";
        board[3][4] = "Blue";
        board[3][5] = "White";

        board[4][0] = "White";
        board[4][1] = "Green";
        board[4][2] = "Yellow";
        board[4][3] = "Black";
        board[4][4] = "Yellow";
        board[4][5] = "Green";
            
        board[5][0] = "Yellow";
        board[5][1] = "Blue";
        board[5][2] = "Black";
        board[5][3] = "Red";
        board[5][4] = "Green";
        board[5][5] = "Black";



        var  juxtaposition =0;

        var line = 1;
        do {
            for(column =1; column< board.length-2; column++) {
                if ((board[line][column] == board[line + 1][column])
                    || (board[line][column] == board[line - 1][column])
                    || (board[line][column] == board[line][column + 1])
                    || (board[line][column] == board[line][column - 1])) {
                    juxtaposition = 1;
                }
            }
            line = line +1;

        } while (line <5);
        return juxtaposition;
    };
// public methods
};
