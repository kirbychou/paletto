var Engine = function () {

// private attributes and methods
    var board = new Array(6);
    var player1 = new Array(36);
    var player2 = new Array(36);
    var corner  = new Array(0);
    var corner_color = new Array(0);
    var line, column;
    for (line = 0; line < 6; line = line + 1) {
        board[line] = new Array(6);
    }
    for(line = 0; line < 36; line = line +1){
        player1[line] = new Array(36);
        player2[line] = new Array(36);
    }
    var player;
    var piece_player1;
    var piece_player2;

    this.get_player = function(){
        return player;
    };


    this.initialisation = function(){
       this.initialisation_player();
        this.initialisation_board();
    };

    this.initialisation_player = function(){
        player = 1;
        piece_player1 = 0;
        piece_player2 = 0;
        corner.push("A6","A1","F1","F6");
    };

    this.piece_number_player = function(player){
        if(player == 1){
            return piece_player1;
        }else if(player == 2){
            return piece_player2;
        }
        return 0;
    };

    this.get_piece_tray = function(){
        var total = 0 ;
        for(line=0; line<6; line = line +1){
            for(column=0; column <6; column = column +1){
                if( board[line][column] != -1){
                    total ++;
                }
            }
        }
        return total;
    };

    this.remove_piece = function (line, column, player){
        var done = false;
        column = this.code_ascii(column);
        if(board[line-1][column] != -1 ){
            done = true;
            var piece = board[line-1][column];
            board[line-1][column] = -1;
            if(player == 1){
                player1[piece_player1]= piece;
                piece_player1 ++;

            }else{
                player2[piece_player2]= piece;
                piece_player2 ++;
            }
            if(this.remove_corner(line, column) == 0){
                this.add_corner(line, column);
            }
         //   this.add_corner(line, column);
         //   this.remove_corner(line, column);

        }
        return done;
    };

    this.code_ascii = function (column) {
        return column.charCodeAt(0) - 65;
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

        board[2][0] = "Blue";
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
    };

    this.juxtaposition = function() {
        var juxtaposition = 0;

        var line = 1;
        do {
            for (column = 1; column < board.length - 2; column++) {
                if ((board[line][column] == board[line + 1][column])
                    || (board[line][column] == board[line - 1][column])
                    || (board[line][column] == board[line][column + 1])
                    || (board[line][column] == board[line][column - 1])) {
                    juxtaposition = 1;
                }
            }
            line = line + 1;

        } while (line < 5);
        return juxtaposition;
    };


    this.letter = function(column){
        column = column +65;
        column = String.fromCharCode(column);
        return column;
    };
    this.remove_corner = function(line, column){
        var remove = 0;
        var nb;
        var temp;
        var popped;
        if(line !=5 && line != 0 ) {
            if (column != 0 && column != 5) {
                if (this.neighbor(line, column) == 1) {
                    if (this.neighbor(line, column)) {
                        remove = 1;
                        column = this.letter(column);
                        nb = 0;
                        while (nb < corner.length) {
                            popped = corner.pop();
                            temp = column;
                            temp = temp + (line + 1);
                            // alert("temp " + temp + "popped" + popped);
                            if (popped != temp) {
                                corner.unshift(popped);
                            }
                            nb++;
                        }
                    }
                }
            }
        }else {
            column = this.letter(column);
            nb = 0;
            while (nb < corner.length) {
                popped = corner.pop();
                temp = column;
                temp = temp + (line + 1);
                // alert("temp " + temp + "popped" + popped);
                if (popped != temp) {
                    corner.unshift(popped);
                }
                nb++;
            }
        }
        return remove;
    };
    this.insertion= function(l, col , temp){
        if(board[l][col] != -1) {
            corner.unshift(temp);
        }
    };
    this.neighbor= function(line, column){
        var nb_neighbor = 0;
        if(board[line - 1][column] != -1){
            nb_neighbor ++ ;
        }
        if(board[line + 1][column] != -1){
            nb_neighbor++;
        }
        if(board[line][column + 1] != -1){
            nb_neighbor++;
        }
        if(board[line][column - 1] != -1){
            nb_neighbor++;
        }
        if(nb_neighbor >= 3){
            return 1;
        }
        return 0;
    };
    this.add_corner= function(line, column){
        var col;
        var l;
        var temp;
        if(line !=5 && line != 0 ){
                if (column != 0 && column != 5) {
                    col = this.letter(column - 1);
                    l = line + 1;
                    temp = col;
                    temp = temp + l;
                    this.insertion(line, column, temp);
                    col = this.letter(column + 1);
                    l = line + 1;
                    temp = col;
                    temp = temp + l;
                    this.insertion(line, column, temp);

                    col = this.letter(column);
                    l = line + 2;
                    temp = col;
                    temp = temp + l;
                    this.insertion(line, column, temp);

                    col = this.letter(column);
                    l = line;
                    temp = col;
                    temp = temp + l;
                    this.insertion(line, column, temp);

                }
        }else if(line ==0){
            if(column ==0 ){
                col = this.letter(column+1);
                 l =line +1;
                 temp = col;
                 temp = temp + l;
                this.insertion(line,column,temp);

                col = this.letter(column);
                l =line +2;
                 temp = col;
                 temp = temp + l;
                this.insertion(line,column,temp);

            }else if(column == 5){
                col = this.letter(column-1);
                l =line +1;
                 temp = col;
                 temp = temp + l;
                this.insertion(line,column,temp);

                col = this.letter(column);
                l =line +2;
                 temp = col;
                 temp = temp + l;
                this.insertion(line,column,temp);

            }else{
                col = this.letter(column+1);
                l =line +1;
                 temp = col;
                 temp = temp + l;
                this.insertion(line,column,temp);

                col = this.letter(column-1);
                l =line +1;
                 temp = col;
                 temp = temp + l;
                this.insertion(line,column,temp);

                col = this.letter(column);
                l =line+2;
                 temp = col;
                 temp = temp + l;
                this.insertion(line,column,temp);

            }

        }else if(line == 5){
            if(column ==0){
                col = this.letter(column);
                l =line ;
                temp = col;
                temp = temp + l;
                this.insertion(line,column,temp);

                col = this.letter(column +1);
                l =line +1;
                temp = col;
                temp = temp + l;
                this.insertion(line,column,temp);

            }else if(column == 5){
                col = this.letter(column);
                l =line;
                temp = col;
                temp = temp + l;
                this.insertion(line,column,temp);

                col = this.letter(column-1);
                l =line+1;
                temp = col;
                temp = temp + l;
                this.insertion(line,column,temp);

            }else{
                col = this.letter(column);
                l =line;
                temp = col;
                temp = temp + l;
                this.insertion(line,column,temp);

                col = this.letter(column-1);
                l =line+1;
                temp = col;
                temp = temp + l;
                this.insertion(line,column,temp);

                col = this.letter(column+1);
                l =line+1;
                temp = col;
                temp = temp + l;
                this.insertion(line,column,temp);
            }

        }
    };

    this.choice = function(){
        var popped;
        var size = corner.length ;
        var nb = 0;
        var color = "";

        while(nb < size){
            popped = corner.pop();
            var temp_col = this.code_ascii(popped);
            var temp_line = (popped.substr(1,1))-1;
           // alert(popped + " " + temp_line+ " " + temp_col +" board[temp_line][temp_col] " + board[temp_line][temp_col] );
            corner_color.push(board[temp_line][temp_col]);
            corner.unshift(popped);
            nb++;
        }
         nb = 0;
        while(nb <size){
            popped = corner_color.pop();
            color = color + popped + " ";
            corner_color.unshift(popped);
            nb++;
        }
      //  alert(color);
        return color; // retourne toutes les couleurs possibles.
    };
// public methods

};
