import { Board } from "../Board";
class Player extends Board{
    private board: Board;
    private currentPlayer: string;
    
    constructor() {
        super();
        this.board = new Board();
        this.currentPlayer = 'X';
    }

    startGame():void{
        console.log("Welcome to Tayo TicTacToe.");
        this.board.display
    }
    playMove(row:number,col:number):void{
        console.log(`player${this.currentPlayer} played (${row},${col})`);

        if(this.board.setMove(row,col,this.currentPlayer)){
            this.board.display();

        if(this.board.checkWinner(this.currentPlayer)){
            console.log(`player${this.currentPlayer} wins`);

            return;
        }

        if(this.currentPlayer==='X'){
            this.currentPlayer='O';
        }else{
            this.currentPlayer='X';
        }

        }else {
                console.log("Invalid move, try again.");
        }

    }   
}
const game = new Player();
game.startGame();

// sample sequence to show output
game.playMove(0, 0); 
game.playMove(0, 1); 
game.playMove(1, 1); 
game.playMove(0, 2); 
game.playMove(2, 2); 
