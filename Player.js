"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Board_1 = require("./Board");
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super.call(this) || this;
        _this.board = new Board_1.Board();
        _this.currentPlayer = 'X';
        return _this;
    }
    Player.prototype.startGame = function () {
        console.log("Welcome to Tayo TicTacToe.");
        this.board.display;
    };
    Player.prototype.playMove = function (row, col) {
        console.log("player".concat(this.currentPlayer, " played (").concat(row, ",").concat(col, ")"));
        if (this.board.setMove(row, col, this.currentPlayer)) {
            this.board.display();
            if (this.board.checkWinner(this.currentPlayer)) {
                console.log("player".concat(this.currentPlayer, " wins"));
                return;
            }
            if (this.currentPlayer === 'X') {
                this.currentPlayer = 'O';
            }
            else {
                this.currentPlayer = 'X';
            }
        }
        else {
            console.log("Invalid move, try again.");
        }
    };
    return Player;
}(Board_1.Board));
var game = new Player();
game.startGame();
game.playMove(0, 0);
game.playMove(1, 1);
game.playMove(0, 1);
