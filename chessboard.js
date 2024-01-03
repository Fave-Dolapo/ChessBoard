let size = 8;
let chessboard = "";
for (let i = 0; i < size; i++){
    for (let j = 0; j < size; j++){
        chessboard += (i + j)% 2 === 0? " ":'#'
    }
    chessboard += '\n';
}
//'i' is for the horizontal rows and 'j' is for vertical coloumns.//
// '===' is used cause it's a strict equality sign than '=='
console.log(chessboard)

