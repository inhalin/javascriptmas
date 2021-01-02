// returns largest positive integer possible for digit count
function extractMatrixColumn(matrix, column) {
  let result=[];
  for(let i=0;i<matrix.length;i++){
    if(column>=matrix[0].length){
      return "out of length";
    }
    result.push(matrix[i][column]);
  }
  return result;
}

function extractMatrixColumn0(matrix, column) {
  //  write code here.
  return matrix.map( row => row[column]);
}

function init(){
  const matrix = [[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]];
  const column = 2;
  const result = extractMatrixColumn(matrix, column);
  console.log("result: ", result);  // [1, 0, 3]
}

init();