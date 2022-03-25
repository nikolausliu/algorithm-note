/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    for(let i = 0; i < matrix.length; i++){
        for(j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === target) {                                                         
                return true   
            }
        }
    }
    return false
};