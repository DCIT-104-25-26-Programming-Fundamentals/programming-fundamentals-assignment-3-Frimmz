// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

var readlineSync = require('readline-sync');

// Helper function to display a matrix in grid format
function printMatrix(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(" "));
    }
}

// Helper function to read a matrix from user input row by row
function readMatrix(rows, cols, label) {
    if (label) {
        console.log("--- " + label + " ---");
    }
    var matrix = [];
    for (var i = 0; i < rows; i++) {
        var line = readlineSync.question("Enter row " + (i + 1) + ": ");
        // Split line by spaces and convert each value to a number
        var row = line.trim().split(/\s+/).map(Number);
        matrix.push(row);
    }
    return matrix;
}

// PART A: Transpose a Matrix (Rows become columns, columns become rows)
function transposeMatrix(matrix) {
    var rows = matrix.length;
    var cols = matrix[0].length;
    var transposed = [];

    for (var j = 0; j < cols; j++) {
        var newRow = [];
        for (var i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }
        transposed.push(newRow);
    }
    return transposed;
}

// PART B: Add Two Matrices (Element-wise addition)
function addMatrices(matrixA, matrixB) {
    var rows = matrixA.length;
    var cols = matrixA[0].length;
    var result = [];

    for (var i = 0; i < rows; i++) {
        var newRow = [];
        for (var j = 0; j < cols; j++) {
            newRow.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(newRow);
    }
    return result;
}

// PART C: Multiply Two Matrices (Matrix Product A x B)
function multiplyMatrices(matrixA, matrixB) {
    var rowsA = matrixA.length;
    var colsA = matrixA[0].length;
    var colsB = matrixB[0].length;
    var result = [];

    for (var i = 0; i < rowsA; i++) {
        var newRow = [];
        for (var j = 0; j < colsB; j++) {
            var sum = 0;
            for (var k = 0; k < colsA; k++) {
                sum = sum + (matrixA[i][k] * matrixB[k][j]);
            }
            newRow.push(sum);
        }
        result.push(newRow);
    }
    return result;
}

// Main execution function
function main() {
    // --- PART A ---
    console.log("=== PART A: TRANSPOSE ===");
    var rows = readlineSync.questionInt("Enter number of rows: ");
    var cols = readlineSync.questionInt("Enter number of columns: ");
    var matA = readMatrix(rows, cols, "Original Matrix");

    console.log("\nOriginal Matrix:");
    printMatrix(matA);

    console.log("\nTransposed Matrix:");
    printMatrix(transposeMatrix(matA));

    // --- PART B ---
    console.log("\n=== PART B: ADDITION ===");
    console.log("Enter two " + rows + "x" + cols + " matrices to add:");
    var addA = readMatrix(rows, cols, "Matrix A");
    var addB = readMatrix(rows, cols, "Matrix B");

    console.log("\nSum Matrix:");
    printMatrix(addMatrices(addA, addB));

    // --- PART C ---
    console.log("\n=== PART C: MULTIPLICATION ===");
    var pCols = readlineSync.questionInt("Enter number of columns for Matrix B: ");
    var multA = readMatrix(rows, cols, "Matrix A (" + rows + "x" + cols + ")");
    var multB = readMatrix(cols, pCols, "Matrix B (" + cols + "x" + pCols + ")");

    console.log("\nProduct Matrix:");
    printMatrix(multiplyMatrices(multA, multB));
}

// Run the program
main();
