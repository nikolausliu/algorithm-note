/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    // 从上下角开始比对
    let i = matrix.length - 1
    let j = 0
    if (matrix.length === 0) return false
    while(i >= 0 && j < matrix[0].length) {
        if (matrix[i][j] < target) {
            j++
        } else if (matrix[i][j] > target) {
            i--
        } else if (matrix[i][j] === target) {
            return true
        }
    }
    return false
};