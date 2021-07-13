function minimumBribes(q) {
    // Write your code here

    let bribeCount = 0;
    let expectedOne = 1;
    let expectedTwo = 2;
    let expectedThree = 3;

    for (let i = 0; i < q.length; i++){
        if (q[i] == expectedOne){
            expectedOne = expectedTwo;
            expectedTwo = expectedThree;
            expectedThree += 1;
        }
        if (q[i] == expectedTwo){
            bribeCount += 1;
            expectedTwo = expectedThree;
            expectedThree += 1;
        }
        if (q[i] == expectedThree){
            bribeCount += 2;
            expectedThree += 1;
        }
        if (q[i] > expectedThree){
            console.log("Too chaotic");
            return
        }
    }
    console.log(bribeCount);
}
