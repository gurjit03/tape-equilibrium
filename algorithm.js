function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    if(A.length == 0 || A.length == 1) {
        return A[0] || A;   
    }
    var diff = [];
    var currentDiff = 0;
    var sumFirstTerms = A[0];
    var sumLastTerms = 0 
    for(let i = A.length-1; i > 0; --i) {
        sumLastTerms += A[i];  
    }
    diff.push(Math.abs(sumFirstTerms - sumLastTerms));
    for(let i = 1; i < A.length - 1; ++i) {
        sumFirstTerms += A[i];
        sumLastTerms -= A[i];
        currentDiff = (sumFirstTerms - sumLastTerms);
        diff.push(Math.abs(currentDiff));
    }
    //console.log(diff)
    var smallest = diff[0];
    for(let i = 0; i< diff.length; ++i) {
        if(smallest > diff[i]) {
            smallest = diff[i];   
        }
    }
    //console.log(smallest);
    return smallest;
}
