function arrayManipulation(n, queries) {
    // Write your code here
    // generate array of 0
    let arr = new Array(n).fill(0);
    //looping through the operations
    let operations = queries.length;
    for (let i = 0; i< operations; i++){
        for (let j = (queries[i][0] - 1); j <queries[i][1]; j++){
            arr[j] += queries[i][2];
        }
    }
    //sort array in ascending order and taking the highest value
    arr.sort((a,b) => (a - b));
    return (arr[n-1]);

}
