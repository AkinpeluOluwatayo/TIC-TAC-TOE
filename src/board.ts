export class Board {
  private house: string[][];

  constructor() {
    this.house = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];
  }

  emptySpace(): void {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        this.house[row][col] = ' ';
      }
    }
  }

   display(): void {
  for (let index = 0; index < 3; index++) {
    console.log(this.house[index].join('|'));

    if (index < 2) {
      console.log('--------');
    }
  }
}

   setMove(row: number, col: number, symbol: string): boolean {
    if (this.house[row][col] === ' ') {
      this.house[row][col] = symbol;
      return true;
    }
    return false;
  }

  checkWinner(symbol: string): boolean {
    const win = this.house;

    //i am checking for rows here
    if (win[0][0] === symbol && win[0][1] === symbol && win[0][2] === symbol) return true;
    if (win[1][0] === symbol && win[1][1] === symbol && win[1][2] === symbol) return true;
    if (win[2][0] === symbol && win[2][1] === symbol && win[2][2] === symbol) return true;

    //i am checking for column here
    if (win[0][0] === symbol && win[1][0] === symbol && win[2][0] === symbol) return true;
    if (win[0][1] === symbol && win[1][1] === symbol && win[2][1] === symbol) return true;
    if (win[0][2] === symbol && win[1][2] === symbol && win[2][2] === symbol) return true;

    //i am checking for winning diagonal  here
    if (win[0][0] === symbol && win[1][1] === symbol && win[2][2] === symbol) return true;
    if (win[0][2] === symbol && win[1][1] === symbol && win[2][0] === symbol) return true;

    return false;
  }
}