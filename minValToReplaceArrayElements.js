Fredo is assigned a new task today. He is given an array A containing N integers. His task is to update all elements of array to some minimum value x , that is,  ;  such that sum of this new array is strictly greater than the sum of the initial array. Note that x should be as minimum as possible such that sum of the new array is greater than the sum of the initial array.

Input Format:
First line of input consists of an integer N denoting the number of elements in the array A.
Second line consists of N space separated integers denoting the array elements.

Output Format:
The only line of output consists of the value of x.

Input Constraints:


SAMPLE INPUT 
5
1 2 3 4 5
SAMPLE OUTPUT 
4
Explanation
Initial sum of array 
When we update all elements to 4, sum of array  which is greater than .
Note that if we had updated the array elements to 3,  which is not greater than . So, 4 is the minimum value to which array elements need to be updated.









// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

const calculations = input => {
    let [count,arr] = input.split('\n')
    let rangeInt = arr.split(' ')
    let rangeLen = rangeInt.length

    let sum = 0

    for (let i = 0; i < rangeLen; i++) {
        sum += Number(rangeInt[i]) 
    } 

    return (Math.floor((sum / rangeLen)+1))

}

function main(input) {
    const calculatedMinVal = calculations(input)
    process.stdout.write(""+calculatedMinVal);       // Writing output to STDOUT
}

