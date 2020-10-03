Little Shino and Common factors
Max. score: 100
Little Shino loves maths. Today her teacher gave her two integers. Shino is now wondering how many integers can divide both the numbers. She is busy with her assignments. Help her to solve the problem.

Input:
First line of the input file contains two integers, a and b.

Output:
Print the number of common factors of a and b.

Constraints:

SAMPLE INPUT 
10 15
SAMPLE OUTPUT 
2
Explanation
The common factors of  and  are 1 and 5.






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

function gcd(a,b){ 
    if (a === 0){
        return b
    } 
    
    return gcd(b % a, a); 
} 

function main(input) {
    let no1,no2
    [no1,no2] = input.split(' ')
    // console.log('no1...',no1,'...no2...',no2)

    let n = gcd(no1,no2); 

    let result = 0; 
    for (let i = 1; i <= Math.sqrt(n); i++) { 
        // if 'i' is factor of n 
        if (n % i == 0) { 
            // check if divisors are equal 
            if (n / i == i){
                result += 1;
            } else {
                result += 2; 
            }
        } 
    } 

    process.stdout.write(""+result);       // Writing output to STDOUT
}

