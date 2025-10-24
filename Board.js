"use strict";
exports.__esModule = true;
exports.Board = void 0;
var Board = /** @class */ (function () {
    function Board() {
        this.house = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];
    }
    Board.prototype.emptySpace = function () {
        for (var row = 0; row < 3; row++) {
            for (var col = 0; col < 3; col++) {
                this.house[row][col] = ' ';
            }
        }
    };
    Board.prototype.display = function () {
        for (var index = 0; index < 3; index++) {
            console.log(this.house[index].join('|'));
            if (index < 2) {
                console.log('--------');
            }
        }
    };
    Board.prototype.setMove = function (row, col, symbol) {
        if (this.house[row][col] === ' ') {
            this.house[row][col] = symbol;
            return true;
        }
        return false;
    };
    Board.prototype.checkWinner = function (symbol) {
        var win = this.house;
        //i am checking for rows here
        if (win[0][0] === symbol && win[0][1] === symbol && win[0][2] === symbol)
            return true;
        if (win[1][0] === symbol && win[1][1] === symbol && win[1][2] === symbol)
            return true;
        if (win[2][0] === symbol && win[2][1] === symbol && win[2][2] === symbol)
            return true;
        //i am checking for column here
        if (win[0][0] === symbol && win[1][0] === symbol && win[2][0] === symbol)
            return true;
        if (win[0][1] === symbol && win[1][1] === symbol && win[2][1] === symbol)
            return true;
        if (win[0][2] === symbol && win[1][2] === symbol && win[2][2] === symbol)
            return true;
        //i am checking for winning diagonal  here
        if (win[0][0] === symbol && win[1][1] === symbol && win[2][2] === symbol)
            return true;
        if (win[0][2] === symbol && win[1][1] === symbol && win[2][0] === symbol)
            return true;
        return false;
    };
    return Board;
}());
exports.Board = Board;
